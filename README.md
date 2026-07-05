# Adeyeye Emmanuel — Portfolio

A premium, conversion-focused personal portfolio for **Adeyeye Emmanuel**, a GoHighLevel Automation Specialist, Sales Funnel Builder, CRM Consultant, Social Media Manager, and Video Editor.

Built with a dark SaaS-inspired design, glassmorphism effects, scroll animations, and a filterable project showcase.

## Features

- **Hero** — Headline, CTAs, profile image, animated stats
- **About** — Summary, mission, core values, career highlights
- **Skills** — Categorized skill cards
- **Services** — Six service cards with deliverables and outcomes
- **Portfolio** — Filterable project grid, case-study modals, image lightbox, promo videos
- **Process** — Four-step workflow timeline
- **Industries** — Industries served grid
- **Testimonials** — Auto-advancing carousel + video modal
- **Contact** — Lead form, Calendly embed, direct contact info, social links
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
| Theming | Custom `ThemeProvider` + blocking script in `app/layout.tsx` |
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
| Promotional videos (Google Drive) | [`lib/data/promotional-videos.ts`](lib/data/promotional-videos.ts) |
| Services | [`lib/data/services.ts`](lib/data/services.ts) |
| Skills | [`lib/data/skills.ts`](lib/data/skills.ts) |
| Testimonials | [`lib/data/testimonials.ts`](lib/data/testimonials.ts) |
| Industries | [`lib/data/industries.ts`](lib/data/industries.ts) |
| Process steps | [`lib/data/process.ts`](lib/data/process.ts) |
| SEO title, description, domain | [`app/layout.tsx`](app/layout.tsx) |

### Profile photo

Replace [`public/hero-image.jpg`](public/hero-image.jpg) and update `heroImage` in `lib/site-config.ts` if the path changes.

### Project screenshots & videos

Add assets under `public/` (e.g. `buyers/`, `investors/`, `mml/`, `chatbot/`, `sales-pipe-auto/`, `smm/`) and reference paths in `lib/data/projects.ts`. Use lowercase folder names — Linux/Vercel builds are case-sensitive.

### Contact form

The form submits to FastSubmit via `contactFormEndpoint` in `lib/site-config.ts`.

### Calendly

Update the URL in `lib/site-config.ts`. The inline embed is already wired in `Contact.tsx` via `CalendlyInlineEmbed`.

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
│   ├── theme-script.ts     # Theme flash-prevention script
│   ├── utils/media-path.ts # Public asset path helpers
│   └── data/               # Content data files
└── public/
    ├── hero-image.jpg      # Hero profile photo
    ├── buyers/             # Project screenshots (lowercase paths)
    └── og-image.svg        # Open Graph preview image
```

## Deploy on Vercel

1. Push the repo to GitHub
2. Import the project at [vercel.com](https://vercel.com)
3. Deploy — no extra configuration required

Update `metadataBase` in `app/layout.tsx` if your production domain changes from `adeyeyeemmanuel.com`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | Run ESLint |

## License

Private project. All rights reserved.
