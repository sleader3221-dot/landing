<p align="center">
  <img src="/images/dukanselogo.webp" alt="DukaanSe Logo" width="120" />
</p>

# DukaanSe — Landing Page

A modern, responsive landing page for **DukaanSe**, a hyperlocal grocery pickup app that connects users to their nearby Kirana stores. Built with **Next.js 15 (App Router)** and styled using **Tailwind CSS**.

---

## 🛍️ About the Project

DukaanSe is a smart grocery shopping platform that lets users browse products from their neighbourhood Kirana stores, place orders from their phone, and simply walk in and pick them up — no delivery fees, no surge pricing, no waiting for a rider.

This landing page is the primary marketing and conversion surface for the DukaanSe mobile app. It communicates the core value proposition, builds trust through social proof, and drives app downloads via Google Play and the App Store.

---

## 📄 Page Sections & Routes

| Route / Section | Description |
|---|---|
| **`/` (Landing Page)** | Main landing page containing all sections below |
| ↳ **Hero** | Headline, tagline, phone mockup, and download badges |
| ↳ **About** | Brand story, mission statement, and Zero Fees promise |
| ↳ **Why Us (Stats)** | Delivery app problems vs. DukaanSe solution comparison |
| ↳ **How It Works** | 3-step visual guide: Browse → Apply Coins → Pickup & Save |
| ↳ **Categories** | Auto-scrolling category carousel (Groceries, Fruits, Vegetables, Personal Care) |
| ↳ **FAQ** | Frequently Asked Questions with dynamic backend API support |
| ↳ **CTA** | Final call-to-action with seller support story and download links |
| ↳ **Footer** | Navigation links to legal policies and home |
| **`/terms`** | Terms of Use and Conditions |
| **`/privacy`** | Privacy Policy and Data Protection information |
| **`/api/faqs`** | API endpoint serving FAQ data with backend fallback |

---

## ⚙️ Tech Stack

- **Next.js 15** — React framework with App Router and Server Components
- **React 19** — Component library
- **Tailwind CSS** — Utility-first styling with custom keyframe animations
- **Lucide React** — SVG iconography

---

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   └── faqs/
│   │       └── route.js      # FAQ API endpoint (Next.js route handler)
│   ├── privacy/
│   │   └── page.jsx          # Privacy Policy page
│   ├── terms/
│   │   └── page.jsx          # Terms of Use page
│   ├── globals.css           # Global Tailwind and font styles
│   ├── layout.jsx            # Root HTML layout & metadata
│   ├── not-found.jsx         # Custom 404 page
│   └── page.jsx              # Landing page
├── components/               # Modular UI section components
│   ├── About.jsx
│   ├── BuyTrustedGroceries.jsx
│   ├── Cta.jsx
│   ├── Faq.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── HowItWorks.jsx
│   ├── Privacy.jsx
│   ├── Stats.jsx
│   ├── Terms.jsx
│   └── Testimonials.jsx
├── context/
│   └── FaqContext.jsx        # Client-side FAQ state context
├── hooks/
│   └── useFaq.js             # Custom hook for fetching FAQ data
├── services/
│   └── faqService.js         # FAQ API service with native fetch
├── public/
│   ├── favicon.svg           # Site favicon
│   └── images/               # Optimized static images and mockups
├── next.config.mjs           # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── eslint.config.mjs         # ESLint configuration
└── package.json              # Project dependencies & scripts
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run production server
npm start
```