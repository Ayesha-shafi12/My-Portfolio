# Portfolio — React + Tailwind CSS v4

A premium, modern one-page portfolio website built with React (JSX) + Tailwind CSS v4 + Vite.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx          # App entry point
│   ├── App.jsx           # Root component
│   ├── index.css         # Global styles + Tailwind
│   └── components/
│       ├── Navbar.jsx    # Sticky glass navbar with active section detection
│       ├── Hero.jsx      # Full-screen hero with stats + CTAs
│       ├── TechStack.jsx # Infinite scrolling tech icon marquee
│       ├── About.jsx     # Two-column about section with cards
│       ├── Skills.jsx    # Categorised skill cards
│       ├── Projects.jsx  # Project cards with demo/GitHub links
│       ├── Contact.jsx   # Contact info cards
│       └── Footer.jsx    # Multi-column footer
└── public/
```

## Tech Stack

- **React 18** (JSX only — no TypeScript)
- **Tailwind CSS v4** (via @tailwindcss/vite plugin)
- **Framer Motion** — scroll animations & marquee
- **Lucide React** — icons
- **React Icons** — brand/tech logos (SI set)
- **Vite 5** — dev server & build tool

## Customisation

1. **Your name & info** — Update `Hero.jsx`, `Contact.jsx`, `Footer.jsx`
2. **Projects** — Edit the `projects` array in `Projects.jsx`
3. **Skills** — Edit the `categories` array in `Skills.jsx`
4. **Colors** — Change `--primary: #7c3aed` in `index.css`
5. **Fonts** — Swap the Google Fonts import at the top of `index.css`
