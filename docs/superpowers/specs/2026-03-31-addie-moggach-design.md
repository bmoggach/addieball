# Addie Moggach #35 — Site Design Spec

**Date:** 2026-03-31
**Status:** Draft
**Author:** Bradley Moggach

---

## Overview

A multi-page hype beast landing site for the launch of Addie Moggach's youth basketball career (#35). The site captures the fun, energy, and epic moments of an 11-year-old's basketball journey — presented with the production quality of a Nike athlete page. It doubles as a design/UX playground showcasing scroll cinematics, 3D effects, micro-interactions, media-first layouts, giant typography, and cursor magic.

## Visual Direction: Electric Court

- **Palette:** Deep navy/black (#030308, #060618) with electric blue accents (#0060ff → #00b4ff → #00e0ff), white text
- **Light mode:** Inverted — clean white/light gray backgrounds, deep blue accents, dark text. Follows system preference by default with a manual toggle override in the nav
- **Typography:** Inter (weight 400–900). Massive display text for hero moments, tight letter-spacing (-0.04em), uppercase for headlines
- **Signature element:** Giant #35 rendered as a 4-layer radiant glow behind her name (outer glow halo → stroke outline → gradient fill → crisp inner edge), all layers breathe on a synchronized animation cycle
- **Ambient texture:** Court line hints (baseline, three-point arc, key, center circle) as subtle geometric elements. Scan line overlay for broadcast energy. Floating particles.
- **Youth energy:** Floating emojis (🏀🔥💪⭐👟), hype sticker badges ("Built Different", "Ice In Her Veins", "Rookie Szn"), scrolling ticker tape with her name, number, and basketball slang

## Interaction Layer

All six interaction techniques are in play across the site:

1. **Scroll-driven cinematics** — Hero parallax, scroll-triggered section reveals, video scrubbing on the Highlights page
2. **3D / WebGL** — Cursor-reactive tilt on gallery images, potential 3D basketball element in hero
3. **Micro-interactions** — Spring-physics stat counters, elastic hover states, staggered load animations, magnetic buttons
4. **Media-first** — Full-bleed photos and video dominate every page, lightbox galleries, auto-playing highlight reels
5. **Giant typography** — Names and numbers fill the viewport, text animates in with slide/fade, ticker tape marquees
6. **Custom cursor** — Basketball emoji cursor with physics-based trailing, blue glow trail particles, cursor morphs on interactive elements

## Site Structure

### Navigation
- Fixed top nav: logo ("ADDIE MOGGACH #35") left, page links right
- Mix-blend-mode: difference so it works over any content
- Nav links: Highlights, Gallery, Stats, About, Journal
- Dark/light mode toggle integrated into nav
- Hover: links glow blue with underline scale animation

### Page 1: Home
The cinematic scroll experience. Sets the tone for the entire site.

**Hero (viewport 1):**
- Full-screen dark canvas
- "ADDIE" in white, "MOGGACH" in electric blue gradient, both Inter 900 at ~13vw
- 4-layer radiant #35 watermark behind the name with breathing glow animation
- Name and #35 parallax in opposite directions on mouse move (depth separation)
- Energy rings emanating outward from center
- Floating emoji particles + hype sticker badges
- Scrolling ticker tape near bottom
- Court line geometry as ambient background
- Animated scroll indicator (spinning ring + bouncing dot)
- Basketball cursor with physics trail

**Below the fold (scroll sections):**
1. **Highlight Reel** — Featured top play as a big auto-playing video moment. Full-width with cinematic letterboxing. Caption overlay with game details.
2. **The Numbers** — 3-column stat display (PPG, RPG, APG or whatever her key stats are). Numbers count up with spring physics as they scroll into view. Glowing blue on dark background.
3. **Photo Grid** — 3-4 massive action shots in a staggered parallax layout. Each image shifts at different scroll speeds. Hover to see game/date info.
4. **Latest from the Journal** — Most recent post card with thumbnail, title, date, category. Teaser that links to the Journal page.
5. **Footer** — Navigation links, social links if applicable, "Season One // 2026", one last hype element.

Each section transitions smoothly — scroll-triggered fade/slide reveals with Framer Motion or GSAP ScrollTrigger.

### Page 2: Highlights
**Design flex: Scroll-driven video playback**

- Featured highlight takes full viewport with cinematic letterboxing
- Scroll to scrub through the clip (GSAP ScrollTrigger + video element)
- Below: grid of highlight thumbnails
- Hover thumbnail to see a preview loop
- Click to expand into full-screen player
- Filter by: game, play type (buckets, assists, steals, blocks)
- Each clip card shows: thumbnail, play title, game/opponent, date
- SportsCenter Top 10 energy throughout

### Page 3: Gallery
**Design flex: 3D masonry grid with depth**

- Masonry/Pinterest-style photo grid
- Each image has cursor-reactive 3D tilt (perspective transform on mouse position)
- Click image → smooth scale-up transition into full-screen lightbox
- Lightbox: arrow key / swipe navigation, image info overlay (game, date, caption)
- Infinite scroll loading for large galleries
- Filter by: Game, Practice, Lifestyle, Portraits
- Parallax depth — images at different z-layers create sense of dimension as you scroll

### Page 4: Stats / The Journey
**Design flex: Sports HUD with animated data**

- Season overview: big animated stat counters (PPG, RPG, APG, etc.)
- Numbers count up with spring physics when scrolling into view
- Interactive season timeline — scrub through games chronologically
- Each game node shows: opponent, score, Addie's stats, W/L
- Charts that animate in with glowing blue lines (points over time, shooting %, etc.)
- Milestone badges that pop in: "First Double-Double", "Season High 24pts", "50th Game"
- Everything has that broadcast overlay / HUD aesthetic
- Data lives in Sanity CMS so stats can be updated after each game

### Page 5: About Addie
**Design flex: Personality page — youth energy goes hardest here**

- Big parallax portrait photo
- "Meet Addie" headline with her story
- Fun facts as animated pill badges (🏀 Point Guard, 🎵 Loves Music, 🐕 Dog Person, etc.)
- Favorites carousel (favorite player, favorite shoe, favorite pre-game song, etc.)
- "Day in the life" scroll story — a visual timeline of a typical game day
- This page leans hardest into the stickers, emojis, and playful energy
- Most personality-driven page — her actual voice and vibe shine through
- Photos: lifestyle, candid, behind-the-scenes (not just game action)

### Page 6: Journal
**Design flex: Rich media blog — each post is its own experience**

- Post list with staggered load animations
- Each post card: thumbnail, title, date, category tag, short excerpt
- Categories: Game Recaps, Lifestyle, Behind the Scenes, Milestones
- Individual post pages are rich media experiences:
  - Game recaps embed highlight clips inline
  - Photo stories use full-bleed images with scroll reveals
  - Behind-the-scenes moments mix photos, text, and video
- Content managed in Sanity CMS — easy to add new posts with rich media
- Designed so a non-developer (parent, Addie herself) can publish

## Dark/Light Mode

- **Default:** Follows `prefers-color-scheme` system preference
- **Override:** Toggle button in nav switches between modes, persists choice in localStorage
- **Dark mode (primary):** Deep navy/black backgrounds, white text, electric blue accents, glowing effects prominent
- **Light mode:** Clean white/off-white (#f8f9fc) backgrounds, dark navy text (#0a0a2a), electric blue accents shift slightly warmer/deeper for contrast, glow effects become subtle shadows, court lines become light gray geometric accents
- **Transition:** Smooth 300ms CSS transition on all color properties when toggling
- Implemented via Tailwind `dark:` variant with `class` strategy (not `media`) so the toggle works

## Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Framework | **Next.js 15 (App Router)** | Page routing, image optimization, SSR for journal/SEO, React ecosystem |
| Styling | **Tailwind CSS 4** | Utility-first rapid styling, native dark mode support with `dark:` classes |
| Animation (UI) | **Framer Motion** | Scroll-triggered reveals, spring physics, layout animations, page transitions |
| Animation (Scroll) | **GSAP + ScrollTrigger** | Heavy-duty scroll cinematics, video scrubbing, parallax, timeline pinning |
| 3D (optional) | **Three.js or Spline** | 3D basketball element, cursor-reactive tilt, particle systems if we go deeper |
| CMS | **Sanity v3** | Journal posts, stats data, gallery management. Visual editor for non-devs. Real-time preview. |
| Deployment | **Vercel** | Zero-config Next.js deploy, edge functions, image CDN, analytics |
| Media | **Cloudinary or Vercel Blob** | Video hosting/streaming, image transforms, responsive delivery |

## Content Strategy

Content to capture/create:

- **Photography:** Game action shots, portraits (dramatic lighting), lifestyle/candid, team photos, pre-game rituals
- **Video:** Highlight clips (10-30 sec), slow-motion plays, behind-the-scenes, hype reels with music
- **AI-generated:** Custom graphics, sticker designs, stat cards, social-share images, potentially AI-enhanced photo effects
- **Stats:** Track per-game stats in Sanity after each game (points, rebounds, assists, steals, blocks, W/L)
- **Journal content:** Game recaps, milestone celebrations, gear/shoe posts, practice moments, off-court personality

## Sanity CMS Schema (High Level)

- **Game:** date, opponent, score, result (W/L), Addie's stats, highlight clips, photos
- **JournalPost:** title, slug, date, category, body (portable text with embedded media), cover image, featured
- **GalleryImage:** image, caption, date, category (game/practice/lifestyle), game reference
- **Highlight:** video, title, play type, game reference, featured
- **PlayerProfile:** bio, fun facts, favorites, position, jersey number, portrait
- **SeasonStats:** computed/aggregated from Game entries

## Success Criteria

1. The site looks like it could win an Awwwards Honorable Mention
2. Every page showcases a different interactive design technique
3. A non-developer can add journal posts, stats, and photos via Sanity
4. Dark and light modes both feel intentional and polished (not an afterthought)
5. Performance: Lighthouse score ≥ 85 despite heavy animation (lazy loading, code splitting, will-change optimization)
6. It makes Addie feel like a pro athlete and captures the genuine fun of youth basketball
7. It serves as a living portfolio piece demonstrating design/UX range
