# Artist Portfolio — GitHub Pages Template

A responsive, one-page artist portfolio made with plain HTML, CSS, and JavaScript. No build tools, package installs, or paid hosting required.

## Personalize it

1. In `index.html`, replace “Alex Taylor,” “AT,” the biography, location, and email address.
2. In `script.js`, edit the `projects` array to add your work, titles, categories, dates, image URLs, and descriptions.
3. Replace sample Unsplash URLs with your own image URLs or paths such as `images/my-art.jpg`. Add your images in an `images` folder.
4. Edit colors and typography in `styles.css`.

## Preview locally

Open `index.html` in a browser, or run `python -m http.server 8000` and visit `http://localhost:8000`.

## Publish

This repository includes a GitHub Actions workflow in `.github/workflows/pages.yml`. In the repository's **Settings → Pages**, set **Source** to **GitHub Actions** once. Future pushes to `main` will automatically deploy the site.

Sample artwork and contact details are placeholders. The contact form is a mailto link and opens the visitor's email app; it does not submit to a server.
