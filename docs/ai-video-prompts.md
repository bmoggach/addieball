# AI Video Generation Prompts

> Saved for future use when models improve. As of April 2026, image-to-video AI still garbles text, drifts faces, and produces uncanny motion — not good enough for hero-quality footage of a real person. Revisit in 6–12 months.

## Source Image

Use `12g008.jpg` — the full-body studio portrait (Addie standing with ball at right hip, blue smoke background). Available on the live site at:
- Full studio shot: `https://addiehoops.com/images/gallery/studio-portrait.webp`
- Cutout (transparent bg): `https://addiehoops.com/images/hero/addie-cutout.webp`

## Subject Description (reuse across all prompts)

```
11-year-old girl, fair skin with light freckles across nose and cheeks, dark brown
hair parted in the middle styled in two long French braids falling past shoulders.
Brown eyes, confident closed-mouth smile, slim athletic build, approximately 5 feet tall.

White sleeveless V-neck basketball jersey, royal blue trim at collar and armholes.
"BARRIE" in small blue text above large cursive "Royals" in royal blue with small
gold crown above the R. Number 35 in bold royal blue. Blue vertical pinstripes on
torso. White shorts with blue-to-white gradient from waistband, royal blue hem trim,
gold crown "R" on right leg, "XEIST" logo on left leg. Mid-calf royal blue socks.
Blue-and-yellow Nike basketball shoes with yellow outsole. Wilson Evolution basketball
(dark orange-brown, black channels, red Wilson logo).
```

## Models Tested (April 2026)

| Model | Aspect | Duration | Result |
|---|---|---|---|
| **Kling v3 Pro** | 9:16 | 5s | Best face accuracy, jersey text preserved, but still visibly AI. 1244×1660, 7.4MB |
| **Veo 3** | 9:16 | 8s | Wrong face entirely, jersey says "BIRRIE", ball says "Ullson EVUCTION". 720×1280, 2.7MB |

**Verdict**: Kling wins on faithfulness to source image. Neither is good enough for hero-quality footage of a real person. AI video works great for abstract elements (smoke, particles, atmosphere) — not for portraying a specific human accurately.

## Available via Shopify AI Proxy

```
Endpoint pattern:
POST https://proxy.shopify.ai/vendors/fal-queue-run/fal-ai/{model}
Authorization: Bearer $SHOPIFY_PROXY_KEY

Available models (confirmed working):
- fal-ai/kling-video/v3/pro/image-to-video  (5s/10s, 9:16/16:9/1:1)
- fal-ai/kling-video/v3/pro/text-to-video   (5s/10s, 9:16/16:9/1:1)
- fal-ai/veo3                                (4s/6s/8s, 9:16/16:9/1:1)
- fal-ai/wan/v2.1/image-to-video            (inpainting capable)
- fal-ai/ltx-video/v0.9.7/image-to-video   (budget, open-weight)

Not available:
- Runway Gen-4.5 (404)
- Hailuo 2.3 Pro (404)
```

## Prompt 1 — "Blue Smoke Portrait" (best for hero)

**Settings**: image-to-video, 9:16, 5s (Kling) or 8s (Veo)

```
Extreme slow motion cinematic portrait of an 11-year-old girl standing with a
basketball at her right hip. Fair skin, light freckles, dark brown hair in two
long French braids past her shoulders, brown eyes, confident closed-mouth smile,
slim athletic build.

White sleeveless V-neck basketball jersey, royal blue trim at collar and arms.
Jersey reads BARRIE above cursive Royals in royal blue with gold crown, number
35 in bold blue. Blue vertical pinstripes. White shorts with blue-to-white
gradient, blue trim, gold crown R logo. Royal blue mid-calf socks, blue-and-yellow
Nike shoes. Wilson Evolution basketball in right hand.

Pitch-black studio, zero visible walls or floor. Dense blue smoke rolls from both
sides and below, swirling around legs and waist, thick at base, thin wisps rising
past shoulders. Single overhead spotlight cone illuminates from above, smoke glows
deep cobalt and electric cyan. Two blue LED rim lights behind at 120 degrees each
side create electric blue edge lighting on arms, braids, shoulders. Dust particles
float upward through the light beam.

Camera locked on tripod, no movement, only smoke drifts. 96fps slow motion,
shallow depth of field T1.5, foreground smoke soft blue bokeh. Crushed blacks,
blue shadows, warm skin tones, hyperrealistic sports broadcast quality.
```

## Prompt 2 — "The Entrance" (cinematic walk-on)

**Settings**: image-to-video, 16:9, 5–10s

```
Cinematic ultra slow motion, young female basketball player walking forward toward
camera with quiet intensity. Fair skin, light freckles, dark brown hair in two
French braids, brown eyes, focused determined expression with confident smirk.
Slim athletic build.

White sleeveless V-neck basketball jersey with royal blue trim. BARRIE above
cursive Royals in royal blue with gold crown, number 35. Blue pinstripes. White
shorts with blue gradient, blue trim. Royal blue socks, blue-yellow Nike shoes.
Wilson Evolution basketball held loosely at right side.

Camera dolly tracking backward at waist height, ultra-smooth steadicam. Long dark
corridor with wet black concrete floor reflecting all light sources in long streaks.
Dense blue fog at ankle height. Single powerful backlight directly behind creates
intense rim light silhouette — edges of braids, shoulders, arms glow electric
blue-white. Cool blue fill from camera-left at 45 degrees illuminates face and
jersey. Moisture droplets and dust particles suspended mid-air catching backlight.

120fps slow motion, anamorphic lens with horizontal blue flare streaks. Shallow
depth of field T1.4, background blown into soft blue bokeh. Crushed blacks, lifted
blue shadows, warm skin tones preserved. Professional Nike commercial quality.
```

## Prompt 3 — "Game Time" (low-angle dribble)

**Settings**: image-to-video, 16:9, 5s. Use game action photo as source.

```
Cinematic slow motion mid-game basketball. 11-year-old girl mid-dribble on
hardwood court. Fair skin, freckles, dark brown French braids, intense focused
expression. Low athletic stance, knees bent, left hand for balance, right hand
pushing Wilson Evolution ball down toward glossy hardwood.

Royal blue and black sleeveless jersey — blue front panel with BARRIE, cursive
Royals, gold crown, number 35. Black side panels. Blue shorts with black panels.
Royal blue socks, blue-yellow Nike shoes.

Empty gymnasium, no other players. Polished hardwood with high-gloss reflections.
Overhead high-bay lights create warm pools on court. Single blue spotlight from
camera-right casts long shadow across court. Ball compresses on floor impact,
subtle light ripple across reflective surface. Chalk dust and sweat droplets
frozen mid-air around hands.

Camera 4 inches above floor, slightly upward, 24mm wide lens. Shallow DOF —
face and hands sharp, background hoop soft warm bokeh. 240fps extreme slow
motion. Teal shadows, warm amber midtones, natural skin. Film grain. Professional
ESPN broadcast quality.
```

## What Works NOW with AI Video

- **Abstract smoke/atmosphere** on black background (mix-blend-screen eliminates black)
- **Text-to-video** for environmental elements (fog, particles, light effects)
- Prompt: keep it simple, no person, describe only the visual effect

## What Doesn't Work Yet

- Specific real person's face (drifts, morphs, uncanny valley)
- Text on clothing (garbles within 1–2 seconds)
- Brand logos (Wilson → "Ullson", BARRIE → "BIRRIE")
- Hands holding objects (fingers multiply, ball phases through hand)
- Consistent footwear (shoes mangle at edges)
