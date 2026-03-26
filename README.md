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

## Commands
```bash
npm start     # Dev server
npm run build # Production build
```

## Deployment to GitHub Pages

This project is deployed to GitHub Pages using GitHub Actions.

### Deployment Workflow
- **Repository Branch:** `main` (always push changes here)
- **Deployment Branch:** `gh-pages` (auto-generated, managed by GitHub Actions)
- **Live Site:** https://cymonic-ai.github.io/cymonic.ai.v2/
- **Automatic Build:** GitHub Actions triggers on every push to `main`
- **Deployment Time:** ~2-5 minutes after pushing

### How to Deploy

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Update: [describe your changes]"
   ```

2. **Push to main branch (important: NOT gh-pages):**
   ```bash
   git push origin main
   ```

3. **Verify deployment:**
   - Check GitHub repository → **Actions** tab to see workflow status
   - Workflow should show "Build and Deploy" running and then complete
   - Once complete, visit https://cymonic-ai.github.io/cymonic.ai.v2/ to see live changes
   - Changes typically appear within 2-5 minutes after push

### GitHub Actions Configuration

The repository uses `.github/workflows/deploy.yml` to:
- Build the project with `npm run build`
- Generate static files in the `build/` directory
- Deploy to `gh-pages` branch automatically
- Make changes available at the GitHub Pages URL

**Note:** Always push to `main` branch only. GitHub Pages and GitHub Actions handle the `gh-pages` branch automatically — manual pushes to `gh-pages` are not needed.
