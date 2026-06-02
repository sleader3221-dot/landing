<p align="center">
  <img src="./src/assets/dukanselogo.webp" alt="DukaanSe Logo" width="120" />
</p>

# DukaanSe — Landing Page

A modern, responsive landing page for **DukaanSe**, a hyperlocal grocery pickup app that connects users to their nearby Kirana stores. Built with **React** and styled using **Tailwind CSS**.

---

## 🛍️ About the Project

DukaanSe is a smart grocery shopping platform that lets users browse products from their neighbourhood Kirana stores, place orders from their phone, and simply walk in and pick them up — no delivery fees, no surge pricing, no waiting for a rider.

This landing page is the primary marketing and conversion surface for the DukaanSe mobile app. It communicates the core value proposition, builds trust through social proof, and drives app downloads via Google Play and the App Store.

---

## 📄 Page Sections

| Section | Description |
|---|---|
| **Hero** | Bold headline, tagline, phone mockup, and app store download badges |
| **How It Works** | 3-step visual guide: Browse → Apply Gullak Coins → Pickup & Save |
| **Why DukaanSe (Stats)** | Side-by-side comparison of delivery app problems vs. the DukaanSe solution |
| **Buy Trusted Groceries** | Infinite auto-scrolling category carousel (Groceries, Fruits, Vegetables, Personal Care) |
| **About** | Brand story, mission statement, and the "Zero Friction / Zero Fees" promise |
| **Testimonials** | Customer review cards with star ratings |
| **FAQ** | Fully expanded FAQ covering Gullak Coins, delivery, refunds, and referrals |
| **CTA** | Final call-to-action with app mockup and download links |
| **Footer** | Navigation links including Terms & Conditions and Privacy Policy |

---

## ⚙️ Tech Stack

- **React** — Component-based UI
- **Tailwind CSS** — Utility-first styling
- **React Router DOM** — Client-side routing for Terms, Privacy, and Public routes
- **Vite** — Fast development build tool
- **Lucide React** — Icon library

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📁 Project Structure
DUKAANSE-LANDING-PAGE/
├── public/
│   ├── _redirects
│   └── vite.svg
├── src/
│   ├── assets/               # Images, logos, badges, mockups
│   ├── components/
│   │   ├── routes/
│   │   │   └── PublicRoutes.jsx
│   │   ├── About.jsx
│   │   ├── BuyTrustedGroceries.jsx
│   │   ├── Cta.jsx
│   │   ├── Faq.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Privacy.jsx
│   │   ├── Stats.jsx
│   │   ├── Terms.jsx
│   │   └── Testimonials.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js

---

## ✨ Key Features

- **Infinite Scroll Carousel** — Auto-scrolling grocery category strip with pause-on-hover
- **Fully Responsive** — Optimised for mobile, tablet, and desktop
- **Animated UI** — Smooth hover effects and transitions throughout
- **Custom Brand Identity** — DukaanSe red (`#EC2D01`) and Gullak gold (`#FEBC1D`) colour palette
- **Route Protection** — `PublicRoutes.jsx` handles navigation guards
- **Dedicated Pages** — Separate routes for Terms & Conditions and Privacy Policy

---

## 📬 Contact

For support or queries: **support@dukaanseindia.com**