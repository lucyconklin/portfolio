# Lucy Conklin Portfolio

A modern, static portfolio website built with [Astro](https://astro.build), featuring artwork and illustrations by Lucy Conklin.

## Features

- Fast, static site generation
- Content Collections for easy artwork management
- Responsive, image-forward design
- SEO optimized with Open Graph tags
- Accessible navigation
- Minimal JavaScript
- Auto-deployment to GitHub Pages

## Project Structure

```
/
├── public/
│   └── images/
│       ├── works/           # Artwork images
│       ├── logo.svg         # Site logo
│       └── conklin_bio.jpg  # About page photo
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Gallery.astro
│   │   └── WorkCard.astro
│   ├── content/
│   │   └── works/           # Markdown files for each artwork
│   ├── layouts/
│   │   └── BaseLayout.astro # Main page layout
│   ├── pages/               # Site pages
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── shop.astro
│   │   ├── now.astro
│   │   └── work/
│   │       └── [...slug].astro  # Dynamic work detail pages
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Local Development

### Prerequisites

- Node.js 18.20+ or 20.3+ or 22+
- npm

### Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Adding New Artwork

1. Add your image(s) to `public/images/works/`

2. Create a new markdown file in `src/content/works/` with this structure:

```markdown
---
title: "Artwork Title"
description: "Optional description of the piece"
client: "Client name (if commissioned)"
medium: "Watercolor, Digital, etc."
year: "2024"
thumbnail: "/images/works/your-image.jpg"
images:
  - "/images/works/your-image-large.jpg"
  - "/images/works/your-image-detail.jpg"
tags: ["wildlife", "watercolor"]
order: 1  # Lower numbers appear first
---

Optional longer description goes here as markdown content.
```

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Artwork title |
| `thumbnail` | Yes | Path to thumbnail image |
| `description` | No | Short description |
| `client` | No | Client or publication name |
| `medium` | No | Materials/technique used |
| `year` | No | Year created |
| `images` | No | Array of additional image paths |
| `tags` | No | Array of category tags |
| `order` | No | Sort order (default: 99) |

## Deployment

### GitHub Pages (Automatic)

Push to the `main` branch to trigger automatic deployment via GitHub Actions.

**Setup:**
1. Go to your repository Settings > Pages
2. Under "Build and deployment", select "GitHub Actions"
3. Push your code to the `main` branch

### Other Static Hosts

Build the site and deploy the `dist/` folder:

```bash
npm run build
```

Compatible with: Netlify, Vercel, Cloudflare Pages, AWS S3, etc.

## Customization

### Colors

The accent color (`#27e8c9`) can be changed in:
- `src/styles/global.css`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- Individual page styles

### Typography

The site uses Montserrat from Google Fonts, loaded in `src/layouts/BaseLayout.astro`.

### Site Metadata

Update in `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://lucyconklin.com',
  // ...
});
```

## License

All artwork and images are copyright Lucy Conklin. Code is available for reference.
