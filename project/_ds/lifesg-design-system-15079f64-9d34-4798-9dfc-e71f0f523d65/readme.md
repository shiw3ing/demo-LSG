# LifeSG Design System

A design system for **LifeSG** — the Singapore Government's mobile super-app and the family of digital-government products built around it (BookingSG, SupportGoWhere, MyLegacy and others). LifeSG is the single front door through which citizens access services across every life stage: birth and parenthood, healthcare, housing, employment, retirement and bereavement.

This project is a faithful, build-ready recreation of the **LifeSG theme** from the official open-source library, packaged so design agents can generate on-brand interfaces, prototypes and assets.

## Sources

This system was reconstructed from material the user provided. Reference them for deeper work:

- **Codebase (attached, read-only):** `react-design-system-master/` — the `@lifesg/react-design-system` monorepo. Tokens live under `src/theme/*` (colour-primitive, colour-semantic, spacing, radius, shadow, motion, font-spec); components under `src/<component>/`.
- **GitHub:** [LifeSG/react-design-system](https://github.com/LifeSG/react-design-system) — explore for the full component inventory and exact prop contracts.
- **Live docs:** https://designsystem.life.gov.sg
- **Production assets/fonts:** served from `https://assets.life.gov.sg/react-design-system/v3/css/main.css` and `open-sans.css`.

> The reader is not assumed to have access to the above, but they are recorded here for anyone who does. Browsing the GitHub repo will let you build more accurately than this snapshot alone.

---

## Content fundamentals

LifeSG writes like a **calm, capable civil servant who respects your time** — plain, warm, and never bureaucratic. The product tagline is *"Life can be simpler."*

- **Voice:** Second person, active, reassuring. "Apply for Baby Bonus", "Renew your passport", "We'll let you know when it's ready." Address the citizen as **you**; the service speaks as **we** sparingly.
- **Casing:** **Sentence case everywhere** — headings, buttons, labels, menu items. Never Title Case UI, never ALL CAPS. ("Start application", not "Start Application".)
- **Tone:** Clear and direct first, friendly second. Lead with what the user gets or must do. Short sentences. Avoid jargon and acronyms unless universally known in SG (HDB, CDC, NRIC, Singpass).
- **Numbers & money:** Singapore conventions — `$300`, `3 working days`, `12 Sep 2024`, masked IDs like `S••••567A`.
- **Buttons:** Verb-first and specific — "Start application", "Save changes", "Verify with Singpass" — not "Submit" / "OK".
- **Errors:** Explain what happened and what to do next, blame-free. "We couldn't process your payment. Please try again."
- **Emoji:** Used very sparingly, only in warm personal moments (a greeting "Wei Ming 👋"). Never in body copy, errors, or as functional icons.
- **Trust signals:** Singpass verification and security are surfaced proudly — "Verified with Singpass", a green check tag.

---

## Visual foundations

**Overall vibe:** clean, bright, trustworthy, spacious. A white canvas, a confident **LifeSG red** for brand moments, and a calm **action blue** that does the functional work. Generous spacing and a large 18px body size make it accessible and unhurried.

- **Colour:**
  - **Brand red `#BF3431` (`brand-50`)** — reserved for brand surfaces (app header, logo, key moments). Not a general action colour.
  - **Primary blue `#1768BE` (`primary-50`)** — the workhorse: buttons, links, selected states, focus rings, progress.
  - **Secondary indigo `#5B62A7`** — supporting accents.
  - **Neutrals** — text is `neutral-20 #282828` (near-black, not pure black); borders `neutral-90 #DDE1E2`; surfaces white with `neutral-100`/`neutral-95` for subtle fills.
  - **Validation** — success green `#257645`, warning amber `#98590C`, error red `#CB2213`, info blue `#176E9B`, each with a tinted background and border.
  - Always design against the **semantic aliases** (`--text`, `--bg-primary`, `--border-error`…), not raw primitives. A full dark-mode token set exists in the source.
- **Typography:** **Open Sans** throughout (300/400/600/700). Headings are semibold with gently negative letter-spacing at large sizes; body is regular. Body baseline is a large, accessible **18px / 26px**. Type scale: heading xxl 48 → xs 18; body baseline 18 → xs 12.
- **Spacing:** 4px base grid. Component tokens `spacing-4…72`; page-rhythm tokens `layout-xs…xxxl`.
- **Corners:** small and friendly — `2/4/8/12px` plus pill. **Buttons, inputs and tags use 4px (`sm`); cards use 8px (`md`); modals 12px (`lg`).**
- **Cards:** white surface, `1px` `neutral-90` border, `8px` radius, **soft neutral drop shadow** (`0 2px 4px rgba(104,104,104,.24)`). Interactive cards lift 2px and deepen the shadow on hover. No coloured left-borders on cards.
- **Shadows:** a single soft, neutral elevation family built from `neutral-50` at 24% (subtle) and 50% (strong), in xs/sm/md/lg sizes. Shadows are gentle, never harsh or coloured.
- **Borders:** hairline `1px` default; `2px` for emphasis. **Alerts are the signature pattern: a 2px coloured _left_ accent border** over a tinted background (this left-accent treatment is correct for alerts here — it is the real LifeSG pattern — but is not used on cards).
- **Backgrounds:** predominantly flat white / very light neutral. The brand-red header on the app home is the main bold surface, with a large bottom corner radius (24px). No gradients, no textures, no photographic hero washes in the core UI.
- **Animation:** purposeful and quick. Durations 150–350ms for UI; easing `ease-default cubic-bezier(0.45,0.05,0.55,0.95)` for most transitions, `ease-standard` for expand/collapse. Fades and slides, no bounces, no infinite loops.
- **Hover states:** subtle neutral fills (`bg-hover-neutral`) for secondary controls; primary buttons darken one step (`primary-50 → primary-40`). 
- **Press / active:** same darker colour step; no scale-shrink on buttons.
- **Focus:** visible 2px `primary-50` ring, offset 2px — accessibility is non-negotiable for government.
- **Transparency / blur:** minimal. Overlays are flat `rgba(40,40,40,.85)` scrims behind modals; no glassmorphism.
- **Imagery:** illustrative, warm, flat-vector spot illustrations (error/empty states on the CDN), never moody photography. Icons are clean single-weight outlines.

---

## Iconography

- **System:** LifeSG ships its own icon library, **`@lifesg/react-icons`** — a large set of clean, **single-weight outline** icons (≈1.5–2px stroke, rounded joins), used as React components (`<ChevronDownIcon />`, `<CrossIcon />`). Icons inherit `currentColor`; semantic colour tokens (`--icon`, `--icon-primary`, `--icon-error`) set their tone.
- **In this kit:** the proprietary set is **not bundled**, so cards and the UI kit substitute **[Lucide](https://lucide.dev)** (CDN, matching outline weight), recoloured via CSS `mask` so any token colour applies. **Flagged substitution** — swap for `@lifesg/react-icons` in production.
- **No icon fonts.** Icons are SVG. Emoji are not used as functional icons (only the occasional warm flourish in copy). Unicode glyphs (✓, ✕, ▼, ‹ ›) appear only as tiny internal affordances inside components.
- **Logos:** the LifeSG wordmark ("Life" in `neutral-20`, "SG" in `brand-50`) and the stacked primary logo are loaded from the official CDN: `https://assets.life.gov.sg/lifesg/logo-lifesg.svg` and `…/react-design-system/img/logo/lifesg-primary-logo.svg`.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (link this). `@import`s only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.
- `SKILL.md` — Agent-Skills-compatible entry for using this system.

**Components** (`components/<group>/` — 19 components, React, namespace `window.LifeSGDesignSystem_…`)
- `buttons/` — **Button**
- `forms/` — **Input, Textarea, Select, Checkbox, RadioButton, Toggle**
- `data-display/` — **Card, Tag, Pill, Badge, Avatar**
- `feedback/` — **Alert, NotificationBanner, ProgressIndicator**
- `navigation/` — **Tabs, Breadcrumb, Pagination, Accordion**

Each directory has a `*.card.html` demo (Design System tab) and each component an `.d.ts` + most a `.prompt.md`.

**Foundations** (`guidelines/` — specimen cards): colour ramps (brand, primary, secondary, neutral), semantic & validation colour, headings & body type, spacing, radius, shadow, logo.

**UI kits** (`ui_kits/`)
- `lifesg-app/` — interactive LifeSG mobile super-app (home, services, service detail, inbox). See its `README.md`.

### Caveats
- **Icons are Lucide, not `@lifesg/react-icons`** (substitution flagged above).
- **Open Sans loads from Google Fonts** (the production app self-hosts it from the LifeSG CDN); visually identical.
- Logos and the official error/empty-state illustrations are referenced from the LifeSG CDN rather than copied locally (cross-origin assets couldn't be bundled here). For offline use, download them into `assets/`.
