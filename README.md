# rudysummers.com

Personal portfolio site for Rudy Summers, deployed as a static GitHub Pages site at [rudysummers.com](https://rudysummers.com).

## Architecture

- Static HTML/CSS site with Bootstrap 4.1.3 (CDN) and jQuery 3.3.1 (CDN)
- Single-page layout based on the Bootstrap Cover template
- `index.html` — the entire site
- `cover.css` — custom styles on top of Bootstrap
- `main.js` — jQuery ready handler (currently empty)
- `CNAME` — custom domain config for rudysummers.com; do not delete

## Tech Stack

- Bootstrap 4 via StackPath CDN for grid, cards, and responsive layout
- jQuery 3 via CDN
- Dark background (#333) with light text, gold-bordered project cards

## Development

Preview locally:

```sh
python3 -m http.server
```

## Deployment

Push to `main` on GitHub to deploy via GitHub Pages.
