# Dogs N Buns

Static bilingual restaurant website built with Next.js App Router, TypeScript and Tailwind CSS v4. No ordering, accounts, forms or API routes.

## Run

Use Node.js 20.9+ and npm. Run `npm install`, then `npm run dev`; visit http://localhost:3000/en/ or /ko/.

`npm run lint`, `npm test`, `npm run build`. Build exports a static site into `out/`. `npm run format` formats source with Prettier.

## Owner editing

All menu names, descriptions, prices, slider pricing, wing flavors, premium toppings and sauces are in `src/data/menu.ts`. Prices are integers in KRW. Keep both English and Korean fields. Restaurant hours live in `src/data/hours.ts`: minutes after midnight; closing values above 1440 represent the next morning. Friday at 03:00 is closed because Thursday service ends at 02:30. Monday at 00:30 is open from Sunday service.

Phone, Instagram, maps, reviews and rating are in `src/data/site-config.ts`. `null` hides optional controls. The production `siteUrl` is set to `https://dogsnbuns.kr`; change it only if the domain changes. Phone should include country code. Add only real reviews and verified ratings. Korean copy needs owner review.

Add a UI string in `src/i18n/dictionaries/en.ts`, then add its translation in `ko.ts`; TypeScript enforces matching keys. Menu content belongs only in menu.ts. Language routes are statically generated with canonical and hreflang links.

## Photography

The supplied logo is installed as `public/assets/logo.png` and is used in the header, footer and favicon. All 23 original menu photos were recovered from https://dogsnbuns.kr/assets/ with their original `.webp` filenames. They are used throughout the hero, favorites, menu, gallery, About section and sharing metadata.

Replace the matching files in `public/assets/`, then rebuild. `src/lib/assets.ts` prefers exact original assets; stock/illustrated fallbacks remain available if an asset is removed. All images use next/image; static export uses unoptimized assets, so compress new originals before adding. Only the hero has priority. Sharing metadata automatically uses the original combo image.

## Deploy

Build command: `npm run build`. Publish directory: `out`. Works on Vercel, Netlify and Cloudflare Pages without server functions. Root uses a static HTML meta redirect to `/en/`; a plain fallback link is available in exported HTML. For immediate HTTP redirects configure `/ /en/ 302` in your hosting provider's redirect settings. Keep trailing-slash URLs. Do not use `next start` to serve export output; use any static file server (for example `npx serve out`). next/font fetches Google fonts at build time and serves them locally to visitors.

## Accessibility and architecture

Sections and menu content are Server Components. Client boundaries are limited to active nav, mobile navigation, menu anchor tracking, reveal effects, live hours, clipboard toast, and native-dialog photo lightbox. The dialog supports keyboard navigation, focus trapping/restoration and swipes. Reduced-motion preferences disable animation. Maps load lazily; a visitor can also open address search in Naver, Kakao or Google Maps.

The locale layout is a root layout so it can render the correct static `<html lang>` for each language. `/` has its own minimal `(entry)` root layout for the redirect.

## Verification

Lint, strict TypeScript build and 21 Seoul-time unit tests pass. Browser QA covers English/Korean at 375, 768 and 1280 pixels, no overflow, valid language, one H1, successful image decoding, mobile Escape and photo navigation/Escape. Run `npx playwright install chromium`, serve `out/` on port 3000, then `node scripts/check-browser.mjs` to repeat. Set `CHROMIUM_PATH` to reuse an existing Chromium installation. Lighthouse scores have not been measured. `npm audit --omit=dev` reports zero production advisories; the current Next ESLint tooling has five transitive development-only advisories through braces/micromatch, with no compatible patched version offered by npm.

The visual theme is permanently dark, independent of device appearance. Canvas, surface, border and readable accent tokens are defined in `src/app/globals.css`; red buttons and mustard price tags retain their brand colors.

Typography matches the existing website: Arial/Helvetica for English body and display text, heavy uppercase headings, and tight heading letter spacing. Korean uses locally served Noto Sans KR through next/font.

## Menu parity

Names, prices and English descriptions match the existing website, including four slider price options, the signature combo upgrade, wing flavors, toppings and sauces. Premium Topping and DNB Signature Sauce display as add-on prices with a `+` prefix. Run `node scripts/check-existing-menu.mjs` (Node.js 22.18+, network access and Playwright Chromium required) to compare against the live website. This is an explicit verification command; normal builds read only the local menu data.

## Food presentation

Food photographs use a CSS crop to hide white margins baked into the source files. Already borderless photos keep a smaller crop; originals are preserved. Decorative CSS steam appears over the hero, featured dishes and About photo, and is hidden under `prefers-reduced-motion`. Category icons and spicy/kids badges use Lucide; all decorative graphics are hidden from assistive technology. Warmer section lighting and price labels use theme tokens. No client JavaScript is added for these effects.

Hero lighting uses static CSS gradients over the existing WebP. Smoke uses two soft radial gradients with no blur filters or persistent `will-change` layers. Only desktop hero wisps animate (transform and opacity); card and mobile smoke stay static, and reduced-motion hides smoke entirely. The badge uses an opaque graphite gradient to keep its contrast independent of the photo. These backgrounds add no image requests or client JavaScript.

## Editorial layout

The homepage uses a split hero with a framed arch photograph and direct signature-menu link, a static orange brand ribbon, asymmetric featured cards, a photo mosaic, and separate layouts for About, toppings and location. These are Server Components and CSS; the menu dataset and established Arial typography remain the same. Mobile stacks the composition for readable copy and a visible menu action.
