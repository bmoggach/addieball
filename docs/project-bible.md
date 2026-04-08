# Addie Moggach #35 — Project Bible

> Everything you need to pick this project back up and know exactly where things stand, what decisions were made, and why.

## What This Is

A design-forward, media-rich, interactive multi-page website for **Addison (Addie) Moggach #35** — an 11-year-old's basketball career landing page. Built as a design/UX playground showcasing scroll cinematics, 3D effects, micro-interactions, media-first layouts, giant typography, and cursor magic. Includes a (future) Shopify-powered merch store.

**Live**: [addiehoops.com](https://addiehoops.com)  
**Repo**: [github.com/bmoggach/addieball](https://github.com/bmoggach/addieball)

---

## The Player

- **Name**: Addison (Addie) Moggach
- **Age**: 11 years old
- **Jersey**: #35
- **Team**: Barrie Royals
- **League**: U12 Rep Basketball
- **Season**: Season Two (2025–2026) — her 2nd year of rep, NOT a rookie
- **Appearance**: Fair skin, light freckles across nose/cheeks, dark brown hair parted in the middle in two long French braids past shoulders, brown eyes, slim athletic build, ~5 feet tall
- **Home jersey**: White sleeveless V-neck, royal blue trim, "BARRIE" above cursive "Royals" with gold crown, #35 in bold blue, blue pinstripes. White shorts with blue-to-white gradient, gold crown "R" logo. Royal blue mid-calf socks. Blue-and-yellow Nike basketball shoes with yellow outsole
- **Away jersey**: Royal blue and black (blue front panel, black side panels and sleeves)
- **Ball**: Wilson Evolution (dark orange-brown leather, black channels, red Wilson logo)
- **Brand on jerseys**: XEIST

---

## Visual Identity

### "Electric Court" Palette
- **Background**: `#030308` (deep navy-black)
- **Primary accent**: `#0078ff` → `#00b4ff` → `#00e0ff` (electric blue gradient)
- **Font**: Inter, weight 900
- **Vibe**: Dark, atmospheric, cinematic sports broadcast. Nike "After Dark" energy.

### Design Rules
- Dark mode only — light mode was attempted and killed. The entire aesthetic (blue glows, smoke, particles, scan lines, gradient text) is designed for dark. Dark IS the brand.
- No forced humor, handwritten notes, or fake reviews — personality comes from design and real media
- AI-generated content is acceptable and encouraged for atmospheric/abstract elements
- AI-generated video of Addie herself doesn't work yet (faces drift, text garbles) — revisit when models improve
- Custom cursor: 🏀 default, 👆 on clickables — pure DOM manipulation, zero React re-renders

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 16.2.1 + React 19 | App router, RSC, image optimization |
| Styling | Tailwind CSS 4 | Utility-first, fast iteration |
| Animation | Framer Motion + GSAP | Motion design, scroll triggers (GSAP not yet wired) |
| Images | sharp + @imgly/background-removal-node | Local AI background removal, WebP optimization |
| Hosting | Railway (free Shopify perk) | Auto-deploys from GitHub `main` branch |
| Domain | addiehoops.com on Cloudflare | DNS + SSL |
| Package manager | npm | (not pnpm — wasn't installed at project start) |
| Video AI | Shopify AI Proxy → fal.ai | Kling v3 Pro for image-to-video, text-to-video |

### Key Config
- `next.config.ts`: `output: 'standalone'`, AVIF+WebP image formats, 30-day image cache TTL, immutable cache headers
- Railway project: `1fe58102-e312-49e7-bf05-5e256250a273`, service `7eb1b11c-9b6c-4780-a55e-a7f2a835d9e4`
- Railway region: **europe-west4 (Amsterdam)** — NEEDS CHANGING to US East for lower latency
- Every `git push` to `main` triggers auto-deploy on Railway

---

## Site Architecture

### Pages (7 total + 6 journal detail pages)
| Path | Status | Notes |
|---|---|---|
| `/` | ✅ Live | Hero (split: text left, Addie cutout right) + Highlight Reel + The Numbers + Photo Grid + Latest Journal + Footer |
| `/about` | ⚠️ Placeholder | Content is guessed — favorites, daily timeline, fun facts all need real data from Addie |
| `/highlights` | ✅ Live | Theatre-style video player, 5 clips (1 real + 4 AI-generated). Labels distinguish real vs AI. |
| `/gallery` | ✅ Live | CSS grid masonry, tall images row-span-2, lightbox with arrows, filter pills |
| `/stats` | ⚠️ Placeholder | All stats and opponent names are fabricated — need real season data |
| `/journal` | ⚠️ Placeholder | Hidden from nav. 6 fake game recaps. Need real game data. |
| `/merch` | ⚠️ Placeholder | AM35 Hoodie Drop 001 concept. No Shopify store connected yet. |

### Nav Order
About → Highlights → Gallery → Stats → Merch (Journal hidden)

### Shared Components
- `CustomCursor.tsx` — 🏀/👆 swap, pure DOM, passive listeners
- `ParticleField.tsx` — floating blue particles
- `ScanLines.tsx` — CRT overlay effect
- `SmokeLayer.tsx` — crossfading dual-video smoke loops (seamless)
- `Nav.tsx` — fixed nav, mix-blend-difference, mobile hamburger
- `Footer.tsx` — minimal footer
- `Hero.tsx` — split layout, parallax #35 watermark, smoke layers, floating badges

---

## Media Assets

### Images (28 files, 5.8MB total)
All optimized from 13MB originals → compressed JPEG + WebP pairs.

| Category | Files | Source |
|---|---|---|
| Hero | `addie-cutout.png/.webp` | `12g008.jpg` with AI background removal |
| About | `addie-flex-cutout.webp` | `12g007.jpg` with AI background removal |
| Gallery/Studio | `studio-portrait`, `studio-flex`, `studio-piggyback` | Professional studio shoot |
| Action | `action-1` through `action-5`, `warmup`, `postgame-smile` | Game day photography |
| Team | `huddle` | Team huddle shot |

### Videos (7 files, 4.7MB total)
| File | Size | Source | Used On |
|---|---|---|---|
| `game-real.mp4` | 1.7MB | Real game footage (MOV → MP4) | Highlights (clip 1) |
| `clip-dribble.mp4` | 776KB | Kling v3 Pro AI from studio photo | Highlights |
| `clip-moves.mp4` | 830KB | Kling v3 Pro AI from studio photo | Highlights |
| `clip-court.mp4` | 870KB | Kling v3 Pro AI from action photo | Highlights |
| `clip-portrait.mp4` | 380KB | Kling v3 Pro AI from studio photo | Highlights |
| `smoke-fog.mp4` | 148KB | Kling v3 Pro text-to-video, ffmpeg color graded | Hero background |
| `smoke-wisps.mp4` | 77KB | Kling v3 Pro text-to-video, ffmpeg color graded | Hero background |

### Available Media NOT Yet Used
- `~/Downloads/IMG_3729.jpeg` — Spain lifestyle/travel photo (planned for About page off-court section)

### Image Processing Pipeline
- `scripts/process-images.mjs` — AI background removal (`@imgly/background-removal-node`) + sharp preprocessing
- `scripts/optimize-for-web.mjs` — Batch WebP conversion from JPEG/PNG originals

---

## Key Technical Decisions & Lessons

### What Worked
- **Split hero layout** (text left, photo right) — solved the problem where full-bleed cutout covered the name/number
- **Pure DOM cursor** — eliminated re-render lag completely. `translate3d` + `textContent` swap
- **WebP everywhere** — 53% payload reduction (6.2MB → 1.8MB for images alone)
- **AI background removal locally** — `@imgly/background-removal-node` works great, no API keys needed, runs in ~30s per image
- **Smoke as abstract video** — AI-generated blue smoke on black + `mix-blend-screen` (black = invisible) = gorgeous atmosphere with no edge artifacts
- **Crossfading dual videos for seamless loops** — `SmokeLayer.tsx` renders two `<video>` elements of the same clip, crossfades at 1.5s before the end. No visible loop point.
- **CSS `mask-image` with radial-gradient** for feathering video edges to invisible — way better than trying to crop or position precisely
- **Removing framer-motion `initial={{ opacity: 0 }}`** from homepage sections — was causing content to be invisible if JS hydration was slow. Server-rendered HTML should be visible immediately.
- **`object-contain` for video, `object-cover` for poster images** — portrait videos show full frame rather than cropping heads

### What Didn't Work
- **Light mode** — attempted full CSS variable theming, killed it. The entire visual identity is built around dark. Don't revisit.
- **AI video of Addie herself** — Kling v3 Pro and Veo 3 both tested. Faces drift, jersey text garbles ("BIRRIE", "Ullson EVUCTION"), limbs get weird. Real photos are way better. Prompts saved in `docs/ai-video-prompts.md` for when models improve.
- **Wan-VACE video inpainting** (removing referee from game clip) — wrong field names on first attempt, stuck in queue 10+ min on second. Real footage looks better with ref than with AI artifacts.
- **framer-motion opacity gating on server-rendered content** — creates invisible sections. Use progressive enhancement only (e.g., CountUp animation) not visibility gating.
- **CSS `columns` layout for gallery** — broke scroll behavior. CSS `grid` with `row-span-2` for tall images works perfectly.
- **Linear-gradient composite masks on video** — `maskComposite: 'intersect'` + `WebkitMaskComposite: 'source-in'` is fragile cross-browser. Radial-gradient masks are simpler and more reliable.

### Mobile-Specific
- Hero stacks vertically: `flex-col` → `md:flex-row`. Cutout 50vh on mobile.
- Name text min clamp reduced: `4.5rem` → `3rem` on mobile
- #35 watermark min: `14rem` → `8rem` on mobile
- Floating badges hidden on mobile (`hidden md:block`)
- Gallery lightbox: portrait aspect ratio on mobile
- CSS font floor: media query bumps all text below 0.45rem to 0.5rem+ on mobile
- Touch targets: global CSS enforces 44px minimum on all buttons/links for `pointer: coarse` devices
- Smoke layers: wider on mobile (300%/250% width vs 180%/160% desktop) to cover full-width stacked layout
- SmokeLayer has iOS autoplay fallback: retries on first `touchstart` if muted autoplay is blocked

---

## What's Done vs What's Placeholder

### ✅ Real / Final
- Visual identity and color palette
- All 14 real photos processed and optimized
- Hero design with split layout, parallax, smoke atmosphere
- Gallery with masonry grid and lightbox
- Highlights video player (1 real clip + 4 AI atmospheric clips)
- Mobile responsive layout
- Touch targets and loading states
- Custom cursor
- Domain, hosting, auto-deploy pipeline

### ⚠️ Placeholder / Needs Real Data
- **About page**: favorites, daily timeline, fun facts — all guessed. Addie needs to provide real answers.
- **Stats page**: all numbers and opponent team names are fabricated
- **Journal entries**: 6 fake game recaps with made-up opponents and scores
- **Merch page**: AM35 Hoodie concept only. No Shopify store, no product photo, no AM35 logo file.

---

## What's Next (Priority Order)

### High Priority
1. **Get real About page content** from Addie (favorites, bio, daily routine)
2. **Get real season stats and opponent names** to replace placeholders
3. **Change Railway region** to us-east1 or us-central1 (currently Amsterdam = ~100ms extra latency for NA visitors)
4. **Restore #35 glow behind Addie** in the hero — was requested, not yet implemented in split layout

### Medium Priority
5. **Set up Shopify store** + Storefront API integration for merch checkout
6. **Get AM35 logo file** for hoodie design and branding
7. **Get real hoodie product photo** for merch page
8. **Add Spain lifestyle photo** (`IMG_3729.jpeg`) to About page
9. **Page transitions** — no animation between routes currently
10. **GSAP ScrollTrigger** for homepage scroll sections
11. **Loading skeleton screens** — basic shimmer exists for images, could be richer

### Low Priority / Future
12. **Set up Neon Postgres + Drizzle** schema for backend (journal, stats, gallery metadata)
13. **Embed Spotify pre-game playlist** (URL not yet provided)
14. **PostHog analytics** integration (free perk available)
15. **Ken Burns effect** on hero photo (slow zoom/pan for subtle motion — better than AI video of Addie)
16. **Re-run AI video prompts** when models improve (see `docs/ai-video-prompts.md`)

---

## Infrastructure & Credentials

| Service | Details |
|---|---|
| **GitHub** | `bmoggach/addieball` (public) |
| **Railway** | Project `1fe58102...`, service `7eb1b11c...`, europe-west4 |
| **Domain** | addiehoops.com on Cloudflare |
| **AI Proxy** | `$SHOPIFY_PROXY_KEY` env var → `proxy.shopify.ai` |
| **fal.ai** | Via Shopify AI Proxy vendor passthrough |

### Available Free Perks (Shopify)
- Railway Hobby ✅ (in use)
- Neon Postgres credits (not yet used)
- PostHog Scale (not yet used)
- Framer Pro, Canva Business, ElevenLabs Creator, Replit Core (not used)

---

## Build & Deploy

```bash
# Dev
npm run dev              # localhost:3000

# Build
npm run build            # Next.js standalone build

# Deploy
git push origin main     # Railway auto-deploys from main

# Image processing
node scripts/process-images.mjs     # AI background removal
node scripts/optimize-for-web.mjs   # WebP conversion

# AI video generation
# See docs/ai-video-prompts.md for full details
# Endpoint: POST https://proxy.shopify.ai/vendors/fal-queue-run/fal-ai/{model}
# Auth: Bearer $SHOPIFY_PROXY_KEY
# Queue pattern: submit → poll status → get result
```

---

*Last updated: April 7, 2026*
