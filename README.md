# Personal Portfolio

A responsive, dependency-free portfolio site for engineering work, personal projects, and an About section.

## Update your content

Most routine edits happen in [`portfolio-data.js`](portfolio-data.js):

- Replace the profile name, initials, tagline, and contact information.
- Edit the About paragraphs and photo list.
- Add, remove, or reorder objects in `engineeringProjects` and `personalProjects`.
- Add project photos, videos, or downloadable files to `assets/` and reference their paths in `portfolio-data.js`.

Each project supports:

- A card title, short description, and cover image.
- A larger accessible detail dialog.
- Multiple long-description paragraphs and topic tags.
- Any number of images and browser-controlled videos.
- A project-files area for SolidWorks assemblies, STEP/STL models, PDFs, ZIP files, or other downloads.

Each project has two blank entries in `videos` and two blank entries in `downloads`. Blank entries stay hidden. Fill in a path to show one, or delete its entire `{ ... }` object to remove the slot.

### Add videos

1. Put an MP4 in `assets/`, such as `assets/folder-demo.mp4`.
2. In the correct project's `videos` list, change a blank slot to:

```js
{ src: "assets/folder-demo.mp4", poster: "assets/folder-poster.jpg", caption: "Automatic folding test" }
```

The browser's native player supplies play, pause, volume, fullscreen, and timeline controls. `poster` is optional.

### Add downloadable files

1. Put the file in `assets/`. ZIP archives are recommended for SolidWorks assemblies with referenced part files.
2. In the correct project's `downloads` list, change a blank slot to:

```js
{ href: "assets/paper-folder-assembly.zip", label: "SolidWorks assembly", meta: "ZIP, 18 MB" }
```

### Optimize photos

The high-resolution originals stay in `assets/`. The website loads smaller WebP copies from `assets/optimized/` for faster scrolling and opens a larger optimized copy in project details.

GitHub Pages regenerates these optimized copies automatically during deployment. To refresh them locally after adding photos, run:

```powershell
python tools/optimize_images.py
```

JPEG and PNG files are optimized automatically. Files without an optimized copy fall back to the original.

## Preview locally

From this directory, run:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`.

## Publish

The included GitHub Actions workflow publishes the site to GitHub Pages whenever changes reach `main`. In the repository settings, choose **Settings ? Pages ? Source: GitHub Actions** if it is not already selected.

