# Rohith K — Interactive Profile Website

A modern, interactive portfolio website showcasing Rohith K's work in Customer Support Engineering, AI, and Salesforce.

## Features

- Smooth scroll with Lenis
- Custom magnetic cursor (desktop)
- Animated gradient hero with canvas blobs
- Scroll-triggered reveal animations
- Interactive project cards with hover effects
- Experience timeline with education section
- Skills showcase with animated tags
- Contact section with email copy
- Fully responsive design

## Tech Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4
- Framer Motion
- Lenis (smooth scroll)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Deploy

### Railway (recommended)

This repo includes `railway.toml` for zero-config deployment with [Railpack](https://railpack.com/).

1. Push this repo to GitHub
2. Create a new project on [Railway](https://railway.com) and connect the repository
3. Railway will auto-detect the Vite SPA, run `npm run build`, and serve `dist/` with Caddy
4. Add a public domain under **Settings → Networking**

Or deploy from the CLI:

```bash
npm i -g @railway/cli
railway login
railway up
```

If SPA mode is not detected, set these service variables in the Railway dashboard:

| Variable | Value |
|---|---|
| `RAILPACK_SPA_OUTPUT_DIR` | `dist` |
| `RAILPACK_NODE_VERSION` | `22` |

**Important:** Do not add a `start` script to `package.json` — it prevents Railpack from serving the built static site.

### Other hosts

The `dist` folder can also be deployed to Vercel, Netlify, or GitHub Pages.
