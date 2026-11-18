# 👑 Princess Dreamland

> *A gentle, 2D illustrated pastel fairytale storybook website created for International Princess Day (18 November).*

Princess Dreamland transforms a simple Princess Day wish into a warm, interactive 2D storybook experience. Designed with pastel pink tones, delicate golden borders, custom SVG illustrations, smooth Framer Motion choreography, and natural Hinglish writing, every chapter feels personal, playful, and thoughtfully handcrafted.

---

## ✨ Experience Walkthrough

Visitors travel through a six-chapter interactive storybook journey:

1. **Magical Welcome Screen** — A pastel pink royal castle with candlelit windows, climbing rose vines, soft drifting clouds, animated butterflies, and an original 2D princess illustration welcoming Misty into her fairytale.
2. **Meet Your Princess** — A storybook character spread featuring an ornate golden nameplate, handwritten script accents, and a heartfelt Hinglish introduction.
3. **A Special Royal Letter** — An illustrated wax-sealed pink envelope that animates open into lined stationery paper with handwritten typography and a warm, personal letter.
4. **The Magical Garden** — A serene cherry blossom garden with a distant castle silhouette, glowing garden lanterns, a sparkling fountain, and five keyboard-accessible interactive flowers — each revealing a thoughtful Hinglish wish.
5. **The Final Royal Surprise** — A choreographed gift reveal where a golden silk bow unties, the box lid lifts with sparkles and rising hearts, and a full-screen pink fairytale celebration unfolds.
6. **The Developer's Signature** — A minimal, handwritten pastel-and-gold closing note signed with warm wishes from **Your Developer 👨‍💻**.

---

## 🌸 Main Features

- **Original 2D Storybook Illustrations** — Custom lightweight SVG artwork (fairytale castle, kawaii princess character, wax-sealed envelope, cherry blossom garden, five distinct flowers, animated ribbon gift box, butterflies, clouds, and floral dividers) with zero broken external image dependencies.
- **Tasteful Motion & Reduced-Motion Accessibility** — Powered by Framer Motion and GPU-composited CSS animations with full `prefers-reduced-motion` support and keyboard-accessible controls.
- **Optional Non-Autoplaying Music** — Disabled by default; visitors can toggle playback and mute/unmute via a floating control that supports a local licensed track (`public/audio/fairytale-theme.mp3`) or falls back to a lightweight built-in Web Audio fairytale music-box lullaby.
- **Refined Storybook Typography** — Combines `Playfair Display` for royal headings, `Poppins` for comfortable reading, and `Dancing Script` for delicate handwritten accents.
- **Responsive Mobile-First Design** — Tested across `360px`, `390px`, `430px`, `768px`, `1024px`, and `1440px` viewports with zero horizontal overflow.
- **SEO & Dynamic Social Previews** — Includes dynamically generated PNG Open Graph cards, `robots.txt`, `sitemap.xml`, custom SVG crown favicon, and a themed 404 page.

---

## 🛠️ Technologies Used

| Category | Stack |
| --- | --- |
| **Framework** | [Next.js](https://nextjs.org/) (App Router, Static Generation) |
| **UI Library** | [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) + GPU-composited CSS keyframes |
| **Icons & Artwork** | [Lucide React](https://lucide.dev/) & Custom 2D SVG Illustrations |
| **Typography** | Google Fonts (`Playfair Display`, `Poppins`, `Dancing Script`) via `next/font` |

---

## 📁 Project Structure

```text
princess-dreamland/
├── .env.example
├── .gitignore
├── next.config.ts
├── package.json
├── public/
│   └── audio/
│       └── README.md              # Guide for optional licensed local audio
└── src/
    ├── app/
    │   ├── globals.css            # Pastel theme tokens, storybook cards, CSS keyframes
    │   ├── icon.svg               # Custom golden crown favicon
    │   ├── layout.tsx             # Fonts, root metadata, viewport configuration
    │   ├── not-found.tsx          # Fairytale-themed 404 page
    │   ├── opengraph-image.tsx    # Dynamic root Open Graph PNG preview
    │   ├── page.tsx               # Enchanted Castle Gate homepage
    │   ├── robots.ts              # Dynamic robots.txt
    │   ├── sitemap.ts             # Dynamic sitemap.xml
    │   └── princess/
    │       ├── misty/
    │       │   ├── opengraph-image.tsx
    │       │   └── page.tsx       # Misty's complete fairytale experience
    │       └── anika/
    │           ├── opengraph-image.tsx
    │           └── page.tsx       # Preserved princess route
    ├── components/
    │   ├── DeveloperSignature.tsx # Handwritten closing signature section
    │   ├── FloatingElements.tsx   # Ambient clouds, stars, butterflies & petals
    │   ├── GiftSurprise.tsx       # Choreographed gift reveal & celebration modal
    │   ├── MagicalGarden.tsx      # Interactive 5-flower garden & wish popups
    │   ├── MusicControl.tsx       # Optional non-autoplaying audio toggle
    │   ├── PrincessFairytaleExperience.tsx
    │   ├── PrincessIntroduction.tsx
    │   ├── RoyalLetter.tsx        # Animated envelope & lined stationery letter
    │   ├── StoryNavigation.tsx    # Sticky fairytale chapter navigation bar
    │   ├── WelcomeScreen.tsx      # Full-screen magical castle welcome gate
    │   └── illustrations/         # Original 2D storybook SVG components
    ├── config/
    │   └── princesses.ts          # Strongly typed princess content configuration
    └── lib/
        ├── musicBox.ts            # Local audio + Web Audio lullaby controller
        └── site.ts                # Production-safe canonical & metadataBase helpers
```

---

## 🚀 Installation

### Prerequisites

- **Node.js** `20.x` or later
- **npm** `10.x` or later

### Setup

```bash
git clone <your-repository-url>
cd princess-dreamland
npm install
```

*(Optional)* If deploying to a custom domain, copy `.env.example` to `.env.local` and set your production URL:

```bash
cp .env.example .env.local
```

---

## 💻 Local Development

Start the local development server:

```bash
npm run dev
```

Open these routes in your browser:

- **Homepage Gate:** `http://localhost:3000`
- **Misty's Fairytale Experience:** `http://localhost:3000/princess/misty`

---

## 🏗️ Quality Checks & Production Build

Run TypeScript type checking, ESLint, and a full production build:

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

---

## ☁️ Deployment (Vercel Recommended)

1. Push this repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com/) — Next.js is detected automatically.
3. *(Optional)* Add `NEXT_PUBLIC_SITE_URL` in **Project Settings → Environment Variables** (e.g., `https://princess-dreamland.vercel.app`) to enable production canonical URLs and sitemap URLs.
4. Click **Deploy**.

---

## 📸 Screenshots

> *Placeholder preview slots — replace with captured screenshots after deployment or local capture.*

| Magical Welcome Screen | Royal Letter Experience |
| :---: | :---: |
| `![Magical Welcome Screen Placeholder](docs/screenshots/welcome-screen.png)` | `![Royal Letter Placeholder](docs/screenshots/royal-letter.png)` |

| Magical Interactive Garden | Final Gift & Developer Signature |
| :---: | :---: |
| `![Magical Garden Placeholder](docs/screenshots/magical-garden.png)` | `![Final Gift & Signature Placeholder](docs/screenshots/gift-and-signature.png)` |

---

## ❤️ Developer Credits

Made with a little creativity, a lot of care, and a tiny bit of magic — **Your Developer 👨‍💻**.
