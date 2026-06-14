# Elevent — Project Brief

> Context document for new chat sessions. Covers brand, market, services, positioning, voice, copy rules, tech stack, SEO/GEO status, city targets, and business model.
> Live site: https://elevent.id · Repo branch: `master` · CMS: Sanity (project `98jwav2j`, dataset `production`)

---

## 1. Brand Overview

**Elevent** is a strategic corporate event organizer platform for enterprise companies in Indonesia. It runs a **curated platform model**: instead of executing every event with one in-house generalist team, Elevent matches each event brief with the right specialist team for that format.

- **Core idea:** Events are business tools, not celebrations. Every event is built around a business objective, not around a list of equipment.
- **Signature line:** "Most corporate events are forgotten by Monday. Yours won't be."
- **Metaphor:** Elevent designs corporate events the way a director designs a film — every decision intentional, every detail load-bearing, every room transformed. (In published copy, em dashes are avoided; see Copy Rules.)
- **Name meaning:** "Event" lives inside the name as a reminder the company exists to make events that actually work. "Eleven" because in events 10/10 is the standard, and Elevent builds for the eleventh: one step beyond expectation.
- **Primary base:** Jakarta. **Coverage:** Jakarta, Bali, Surabaya, Bandung, Medan, Makassar.
- **Languages:** Bahasa Indonesia (primary) and English (via `?lang=en`).

### Contact
- Email: `brief@elevent.id`
- WhatsApp / Phone: `+62 851 9933 3039` (`https://wa.me/6285199333039`)
- Office: AD Premier Office Park, 17th Floor, Suite 04B, Jl. TB Simatupang No.5, Jakarta Selatan 12550
- Hours: Mon–Fri 09:00–18:00, Sat 09:00–14:00 (WIB)
- Social: LinkedIn (`/company/elevent-id`), YouTube (`@elevent`)

---

## 2. Target Market

- **Companies:** Enterprise companies in Indonesia (large corporates, multinationals, government/ministries).
- **Buyers / personas:** GA Managers, Corporate Communications (CorpComm) teams, HR, and any decision-maker responsible for the company event calendar.
- **Event scale:** 100 to 5,000+ attendees.
- **Buying context:** High-stakes events where culture, reputation, team morale, or client/partner relationships are on the line. Audiences range from internal employees to enterprise clients, business partners, and government officials.
- **Representative clients (from case studies):** Shimizu Corporation, Vertiv, Mirae Asset Sekuritas, Kementerian Pariwisata & Ekonomi Kreatif RI, Kementerian Perhubungan RI, Askrindo Syariah, Ninja (Mitra Ninja Award), Kominfo.

---

## 3. Services (all 16)

Services are split into two tiers in Sanity (`tier1` = primary, `tier2` = secondary). All live at `/services/<slug>`.

### Tier 1 (primary, 9)
| # | Service | Slug |
|---|---|---|
| 1 | Corporate Event | `corporate-event` |
| 2 | Corporate Gathering | `corporate-gathering` |
| 3 | Product Launching | `product-launching` |
| 4 | Gala Dinner & Award Night | `gala-dinner-award-night` |
| 5 | Conference & Seminar | `conference-seminar` |
| 6 | Team Building | `team-building` |
| 7 | MICE & Hospitality | `mice-hospitality` |
| 8 | Hybrid & Virtual Event | `hybrid-virtual-event` |
| 9 | Incentive Trip | `incentive-trip` |

### Tier 2 (secondary, 7)
| # | Service | Slug |
|---|---|---|
| 10 | Corporate Meeting | `corporate-meeting` |
| 11 | Corporate Anniversary | `corporate-anniversary` |
| 12 | Corporate Outing | `corporate-outing` |
| 13 | Brand Activation | `brand-activation` |
| 14 | Exhibition & Pameran | `exhibition-pameran` |
| 15 | Roadshow | `roadshow` |
| 16 | Corporate Event Organizer | `corporate-event-organizer` |

Each service detail page has: hero, problem, approach, what's included, ideal-for, related case studies (matched by `eventType`), FAQ (from Sanity), related insights (matched by category), and contextual city links where relevant.

---

## 4. Value Proposition

- **Specialist, not generalist.** A consistent standard can only come from deep specialisation. Every event goes to a team that has run that exact format many times, with verifiable results.
- **One standard across every format.** "Every event type. One standard."
- **Objective-first.** Concept is designed around the business objective and available budget, not the other way around. A memorable event is not always an expensive one.
- **Curated platform model.** Elevent matches each brief with the right specialist team rather than forcing one team across all formats.
- **Accountability.** One contact, one line of accountability through the whole process.
- **Honest counsel.** A good partner is willing to say "this will not be effective, and here is why," rather than agreeing to everything.

---

## 5. Tone of Voice

- **Editorial, confident, strategic, direct.** Reads like a thoughtful operator, not a vendor brochure.
- **Plain and specific.** Concrete numbers and scenarios over adjectives. No hype.
- **Bilingual split (especially on city/landing pages):** English for headlines, labels, and buttons; Bahasa Indonesia for body copy. The broader site offers full EN/ID via the `?lang=en` toggle.
- **Film-director sensibility:** intentional, composed, every element earns its place.

---

## 6. Copy Rules (mandatory)

1. **No em dashes** anywhere in copy (use commas or periods).
2. **Banned words** (Indonesian): `terpercaya`, `profesional`, `terbaik`, `solusi`, `sekadar`. Avoid their English equivalents in spirit too (trusted, professional, best, solution, merely).
3. **English** for headlines, labels, buttons; **Bahasa Indonesia** for body copy on landing/city pages.
4. **Venue names are context only** — never imply affiliation or endorsement (always pair venue lists with a non-endorsement disclaimer).
5. Avoid exaggeration; lean on specificity and the specialist positioning.

---

## 7. Tech Stack

- **Framework:** Next.js 16.2.6 (App Router, Turbopack), TypeScript.
  - ⚠️ This project's Next.js may differ from training data — read `node_modules/next/dist/docs/` before writing framework code (per `AGENTS.md`).
- **Styling:** Pure CSS Modules (no Tailwind). No rounded corners, no drop shadows.
- **CMS:** Sanity — project `98jwav2j`, dataset `production`. Studio: https://elevent-id-studio.sanity.studio/. Server-side writes use `SANITY_API_TOKEN` (in `.env.local`).
- **Hosting:** Vercel (Singapore region, `sin1`). HSTS added by Vercel automatically.
- **Analytics:** Google Analytics 4 (`G-ESWHLBLEN3`).
- **Fonts:** Instrument Serif (serif display), Hanken Grotesk (sans body), JetBrains Mono (labels/mono).

### Design tokens
| Token | Value | Use |
|---|---|---|
| `--chalk` | `#F7F4EF` | Light background |
| `--ink` | `#1C1C1E` | Dark / text |
| `--sienna` | `#C4622D` | Accent |
| `--sage` | `#8A9E8C` | Secondary |
| `--stone` | `#7A7065` | Muted text |
| `--section-pad-y` | `clamp(60px, 6vw, 100px)` | Section padding |
| `--page-pad` | `clamp(20px, 4vw, 72px)` | Page gutter |

### Site structure
`/` · `/services` + 16 `/services/[slug]` · `/work` + 9 `/work/[slug]` (case studies) · `/insights` + `/insights/[slug]` (11 articles) · `/about` · `/contact` · `/get-a-proposal` (brief form → WhatsApp) · `/privacy` · `/terms` · 3 city pages `/services/corporate-event-{jakarta,bali,surabaya}`.

### Conventions
- **Bilingual:** pages read `searchParams.lang`; `isEn = lang === 'en'`; links carry `langParam = isEn ? '?lang=en' : ''`.
- **JSON-LD:** inline `<script type="application/ld+json">` pattern; shared component `components/seo/JsonLd.tsx` + `BreadcrumbJsonLd`.
- **OG/metadata:** shared `baseOpenGraph` in `lib/seo.ts`; per-page `alternates` with hreflang `x-default/id/en`.
- **Internal-link bridge maps:** `lib/related.ts` (service↔insight category, service→city).

---

## 8. Current SEO / GEO Status

**In place:**
- **Sitemap** (`app/sitemap.ts`): canonical ID URLs only (no `?lang=en` duplicates), includes 3 city pages. Priorities set; insights/services/work pulled from Sanity.
- **robots** (`app/robots.ts`): allows all, disallows `/api/`; explicit Allow rules for **GPTBot, OAI-SearchBot, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended**.
- **robots meta** (`layout.tsx`): `index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1` on both base and `googleBot`.
- **hreflang:** `x-default` / `id` / `en` on every page; root `<html lang="id">`.
- **Open Graph / Twitter:** complete on all pages via `baseOpenGraph` (type, locale `id_ID`, alternateLocale `en_US`, siteName, dimensioned image with per-page alt). Insight pages use `og:type: article` with `publishedTime`/`authors`.
- **Titles:** homepage trimmed to "Corporate Event Organizer Jakarta & Indonesia | Elevent" (55 chars).
- **Structured data (`components/seo/JsonLd.tsx`, sitewide `@graph`):**
  - `WebSite` + `SearchAction` (Google site-search target), `inLanguage`.
  - `Organization` with `@id #organization`, `knowsAbout`, `inLanguage`, `hasOfferCatalog` (all 16 services), contactPoint, sameAs.
  - `LocalBusiness` with `geo`, priceRange `Rp100.000.000 - Rp5.000.000.000`, opening hours, image.
  - Per-page: `Article` (+ author Organization + `speakable`) on insights, `BreadcrumbList` sitewide, `FAQPage` on service pages (from real Sanity FAQs).
- **GEO files:** `public/llms.txt` (deep-linked to all 16 services), `public/.well-known/ai.txt`, `public/.well-known/security.txt`, plus a `<link rel="alternate" type="text/plain" href="/llms.txt">`. IndexNow key file for Bing.
- **Internal linking:** semantic related queries — insights by `category`, case studies by `eventType` (on both service and work pages) with newest fallback; insights↔services cross-link blocks; service→city contextual links; footer "Services by City" column. (Resolved the Ahrefs "18 pages with one internal link" finding.)
- **Security headers** (`next.config.ts`): `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, and a CSP (GA + Sanity allowed; `frame-ancestors 'none'`).
- **OG image:** `public/assets/og-image.png`, 1200×630.

**Known open item:**
- **Cache-Control on dynamic routes.** Public pages that read `searchParams` (for `?lang=en`) render dynamically, so Next.js serves them with `private, no-store`. A `next.config.ts` `Cache-Control: public, s-maxage=3600, stale-while-revalidate=86400` header was added and works for **static** routes (`/privacy`, `/terms`, `/get-a-proposal`), but **cannot override** the framework's `no-store` on dynamically rendered routes. Fully clearing the "pages are cacheable" audit flag requires an **i18n refactor** (read `lang` client-side, or move to path-based `/en/...` locales) so the pages render statically. Not yet done.

---

## 9. City Targets (Local SEO)

Dedicated bilingual landing pages under `/services/corporate-event-<city>`, driven by `lib/cities.ts` + `components/city/CityLanding.tsx`. Each has hero, "Why [City]", services, venue references (context only), CTA, plus `BreadcrumbList` and city-specific `LocalBusiness` JSON-LD.

| City | Slug | Geo (lat, lng) | Focus | Angle |
|---|---|---|---|---|
| **Jakarta** | `corporate-event-jakarta` | -6.2088, 106.8456 | Gala dinner, conference, corporate gathering, product launch | Pusat bisnis Indonesia; largest enterprise clients |
| **Bali** | `corporate-event-bali` | -8.4095, 115.1889 | Incentive trip, MICE, corporate retreat, team building | International MICE destination; reward & recognition |
| **Surabaya** | `corporate-event-surabaya` | -7.2575, 112.7521 | Corporate gathering, conference, annual meeting | 2nd largest business city; East Java gateway |

Reference venues (context only, non-endorsement): Jakarta — Ritz-Carlton SCBD, Grand Hyatt, JCC Senayan, The Kasablanka Hall, Balai Kartini. Bali — BNDCC, BICC, Grand Hyatt Nusa Dua, The Westin Nusa Dua, Ubud. Surabaya — Grand City Convention, The Westin Grand Ballroom, Pakuwon area.

---

## 10. Business Model

- **Curated specialist platform.** Elevent is the strategic layer that takes the enterprise brief, defines the right format around the business objective, and matches it to the specialist team that has executed that format repeatedly. It is positioned against generalist EOs that "do everything but master nothing."
- **One standard.** A single, consistent execution standard applied across all 16 formats and all cities.
- **Lead generation:** the `/get-a-proposal` brief form submits via WhatsApp; the funnel is "send your brief → we map format and components → proposal." Response target: ~1 working day (48h average cited).
- **Deal size:** schema `priceRange` `Rp 100.000.000 – Rp 5.000.000.000` (Rp 100 juta to Rp 5 miliar), reflecting enterprise-scale events.
- **Content engine (GEO/SEO):** insights articles (4 categories: Budget & Strategy, Format & Technology, Planning & Preparation, Venue & Execution) + case studies + city pages drive organic and AI-assistant discovery, feeding the brief funnel.

---

## Insights categories (taxonomy)
`Budget & Strategy` · `Format & Technology` · `Planning & Preparation` · `Venue & Execution`. Used for semantic related-content matching and the service↔insight bridge map.

---

*Last compiled: 2026-06-14.*
