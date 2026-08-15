#!/usr/bin/env python3
"""Create lightweight WebP variants for portfolio photos.

Original files are never modified. The generated manifest lets the website use
the optimized copy when it exists and automatically fall back to the original.
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path

from PIL import Image, ImageOps


SUPPORTED_EXTENSIONS = {".jpg", ".jpeg", ".png"}
VARIANTS = {
    "card": {"max_size": 960, "quality": 78},
    "full": {"max_size": 1440, "quality": 78},
}


def optimize_photo(source: Path, destination: Path, max_size: int, quality: int) -> None:
    destination.parent.mkdir(parents=True, exist_ok=True)

    with Image.open(source) as opened_image:
        image = ImageOps.exif_transpose(opened_image)
        if image.mode not in {"RGB", "RGBA"}:
            image = image.convert("RGBA" if "transparency" in image.info else "RGB")

        image.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
        image.save(destination, "WEBP", quality=quality, method=6)


def build_variants(source_directory: Path, output_directory: Path) -> dict[str, dict[str, str]]:
    manifest: dict[str, dict[str, str]] = {}

    for source in sorted(source_directory.rglob("*")):
        if not source.is_file() or source.suffix.lower() not in SUPPORTED_EXTENSIONS:
            continue
        if output_directory in source.parents:
            continue

        relative_source = source.relative_to(source_directory)
        source_key = (Path("assets") / relative_source).as_posix()
        variant_paths: dict[str, str] = {}

        for variant_name, settings in VARIANTS.items():
            output_name = f"{relative_source.stem}-{variant_name}.webp"
            destination = output_directory / relative_source.parent / output_name
            optimize_photo(source, destination, **settings)
            variant_paths[variant_name] = (
                Path("assets") / "optimized" / relative_source.parent / output_name
            ).as_posix()

        manifest[source_key] = variant_paths

    return manifest


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source", type=Path, default=Path("assets"))
    parser.add_argument("--output", type=Path, default=Path("assets/optimized"))
    args = parser.parse_args()

    manifest = build_variants(args.source, args.output)
    manifest_path = args.output / "manifest.js"
    manifest_path.parent.mkdir(parents=True, exist_ok=True)
    manifest_path.write_text(
        "window.OPTIMIZED_IMAGES = "
        + json.dumps(manifest, indent=2, sort_keys=True)
        + ";\n",
        encoding="utf-8",
    )

    print(f"Optimized {len(manifest)} photos into {args.output}.")


if __name__ == "__main__":
    main()

