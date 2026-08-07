# Personal Portfolio

A responsive, dependency-free portfolio site for engineering work, personal projects, and an About section.

## Update your content

Most routine edits happen in [`portfolio-data.js`](portfolio-data.js):

- Replace the profile name, initials, tagline, and contact information.
- Edit the About paragraphs and photo list.
- Add, remove, or reorder objects in `engineeringProjects` and `personalProjects`.
- Add project photos or videos to `assets/` and reference their paths in a project's `media` list.

Each project supports:

- A card title, short description, and cover image.
- A larger accessible detail dialog.
- Multiple long-description paragraphs and topic tags.
- Any number of images and browser-controlled videos.

The top comment in `portfolio-data.js` contains copy-and-paste examples for image and video entries.

## Preview locally

From this directory, run:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`.

## Publish

The included GitHub Actions workflow publishes the site to GitHub Pages whenever changes reach `main`. In the repository settings, choose **Settings → Pages → Source: GitHub Actions** if it is not already selected.
