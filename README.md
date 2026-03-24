# Cymonic Technologies — Website

## Tech Stack
- React 18 + TypeScript
- Tailwind CSS (utility-first, responsive)
- Framer Motion (animations)
- Lucide React (icons)

## Project Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Sticky nav with dropdowns + mobile menu
│   │   └── Footer.tsx        # Footer with nav links + contact
│   ├── sections/
│   │   ├── Hero.tsx          # Split layout hero with hex SVG graphic
│   │   ├── TechPartners.tsx  # Technology partner logo strip
│   │   ├── Capabilities.tsx  # 5 service cards grid
│   │   ├── CCOModel.tsx      # Animated 3-step stepper
│   │   ├── Platform.tsx      # 5 product cards with hover expand
│   │   ├── WhyCymonic.tsx    # 8 differentiator grid
│   │   ├── GlobalReach.tsx   # SVG world map with city dots
│   │   ├── Testimonials.tsx  # 3 quote cards
│   │   └── CTABand.tsx       # Full-width CTA band
│   └── ui/
│       ├── FadeUp.tsx        # Scroll-triggered fade animation wrapper
│       └── SectionHeader.tsx # Reusable section label/title/subtitle
├── constants/
│   └── content.ts            # All site content in one place
├── hooks/
│   └── useInView.ts          # Intersection observer hook
├── App.tsx                   # Root component
└── index.css                 # Tailwind + global styles
```

## Brand
- **Primary**: Forest Green `#0D2B2B`, Teal `#2DD4BF`
- **Fonts**: Syne (headings) + DM Sans (body)
- **Style**: Light & clean, white sections, dark forest hero

## Commands
```bash
npm start     # Dev server
npm run build # Production build
```
