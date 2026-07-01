# Adeyeye Emmanuel — Portfolio

A premium, conversion-focused personal portfolio for **Adeyeye Emmanuel**, a Nigeria-based GoHighLevel Automation Specialist, Sales Funnel Builder, CRM Consultant, Social Media Manager, and Video Editor.

Built with a dark SaaS-inspired design, glassmorphism effects, scroll animations, and a filterable project showcase.

## Features

- **Hero** — Headline, CTAs, profile placeholder, animated stats
- **About** — Summary, mission, core values, career highlights
- **Skills** — Categorized skill cards
- **Services** — Six service cards with deliverables and outcomes
- **Portfolio** — Filterable project grid with case-study modals
- **Process** — Four-step workflow timeline
- **Industries** — Industries served grid
- **Testimonials** — Auto-advancing carousel
- **Contact** — Lead form, social links, Calendly placeholder
- **Light & dark mode** — Theme toggle in the navbar (persists via localStorage)
- **Sticky glass navigation** with solid mobile menu panel
- **Floating WhatsApp button**
- **SEO metadata** and Open Graph image

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) |
| Icons | [Lucide React](https://lucide.dev) |
| Fonts | Inter + Plus Jakarta Sans (Google Fonts) |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

## Customizing Content

Most copy and links live in data files — update these without touching components.

| What to change | File |
|----------------|------|
| Name, contact, Calendly, WhatsApp, stats, nav | [`lib/site-config.ts`](lib/site-config.ts) |
| Projects & case studies | [`lib/data/projects.ts`](lib/data/projects.ts) |
| Services | [`lib/data/services.ts`](lib/data/services.ts) |
| Skills | [`lib/data/skills.ts`](lib/data/skills.ts) |
| Testimonials | [`lib/data/testimonials.ts`](lib/data/testimonials.ts) |
| Industries | [`lib/data/industries.ts`](lib/data/industries.ts) |
| Process steps | [`lib/data/process.ts`](lib/data/process.ts) |
| SEO title, description, domain | [`app/layout.tsx`](app/layout.tsx) |

### Profile photo

Replace the initials placeholder in [`components/sections/Hero.tsx`](components/sections/Hero.tsx) with a `next/image` component pointing to your photo in `public/images/`.

### Project screenshots

Add images to `public/images/projects/` and reference them in `lib/data/projects.ts`.

### Contact form

The form currently shows a success state on submit. Wire it to [Formspree](https://formspree.io), a GoHighLevel form embed, or your own API in [`components/sections/Contact.tsx`](components/sections/Contact.tsx).

### Calendly

Update the URL in `lib/site-config.ts`, then replace the placeholder block in `Contact.tsx` with a Calendly inline embed iframe.

## Project Structure

```
oahks-portfolio/
├── app/
│   ├── layout.tsx          # Fonts, metadata, theme provider
│   ├── page.tsx            # Composes all sections
│   └── globals.css         # Theme tokens, glass utilities
├── components/
│   ├── layout/             # Navbar, Footer, WhatsAppButton
│   ├── sections/           # Hero, About, Skills, Services, etc.
│   ├── theme/              # ThemeProvider
│   └── ui/                 # Button, GlassCard, ThemeToggle, etc.
├── lib/
│   ├── site-config.ts      # Central site configuration
│   └── data/               # Content data files
└── public/
    └── og-image.svg        # Open Graph preview image
```

## Deploy on Vercel

1. Push the repo to GitHub
2. Import the project at [vercel.com](https://vercel.com)
3. Deploy — no extra configuration required

Update `metadataBase` in `app/layout.tsx` when your production domain is ready.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | Run ESLint |

## License

Private project. All rights reserved.
