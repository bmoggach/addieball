# Addie Moggach #35 — Implementation Plan

## Phase 1: Foundation
1. Scaffold Next.js 15 (App Router) + Tailwind CSS 4
2. Set up project structure (app/, components/, lib/, public/)
3. Install core deps: framer-motion, gsap, @gsap/react
4. Configure Tailwind dark mode (class strategy)
5. Set up Inter font via next/font
6. Create base layout with dark/light mode toggle + localStorage persistence
7. Create shared components: Nav, Footer, CustomCursor, ParticleField, ScanLines

## Phase 2: Homepage
1. Hero section — radiant #35, ADDIE MOGGACH type, parallax, energy rings
2. Basketball cursor with physics trail
3. Hype stickers + floating emojis
4. Ticker tape marquee
5. Scroll sections: Highlight Reel, The Numbers, Photo Grid, Latest Journal
6. GSAP ScrollTrigger for section reveals + parallax
7. Court line ambient geometry

## Phase 3: Core Pages
1. **Highlights** — video player, thumbnail grid, scroll-driven scrub
2. **Gallery** — masonry grid, 3D tilt hover, lightbox
3. **Stats** — animated counters, season timeline, chart animations
4. **About** — parallax portrait, fun fact badges, personality content
5. **Journal** — post list with stagger animations, rich post template

## Phase 4: Merch Store
1. Set up Shopify store with products
2. Integrate Storefront API into Next.js
3. Build merch page: drop hero, countdown, product grid, lookbook
4. 3D tilt cards, confetti easter egg
5. All products show as sold out

## Phase 5: Sanity CMS
1. Set up Sanity v3 studio
2. Define schemas: Game, JournalPost, GalleryImage, Highlight, PlayerProfile
3. Connect Sanity to Next.js pages
4. Set up real-time preview

## Phase 6: Polish & Deploy
1. Light mode polish pass
2. Responsive pass (mobile, tablet)
3. Performance optimization (lazy loading, code splitting)
4. Deploy to Vercel
5. Connect custom domain if ready
