# D.D.S FRIENDS CAR TRAVELS 🚗✨

> **"Your Journey, Our Responsibility!"**  
> Premium Car Rental & Travel Services from Hyderabad to Anywhere in India.

---

## 🌟 Overview

**D.D.S FRIENDS CAR TRAVELS** is a modern, responsive website built with Node.js, Express.js, HTML5, CSS3, JavaScript, and Bootstrap 5. It features a luxury dark automotive aesthetic with rich golden-yellow accents, fluid animations, interactive vehicle filtering, lightbox image preview, and direct WhatsApp booking.

---

## 📁 Project Structure

```
dds-friends-car-travels/
│
├── server.js              # Express.js web server serving static assets
├── package.json           # Node.js project metadata and dependencies
├── package-lock.json      # Dependency lockfile
├── README.md              # Project documentation
│
└── public/
    ├── index.html         # Main semantic HTML5 single-page application
    │
    ├── css/
    │   └── style.css      # Custom styling, dark/gold theme, glassmorphism
    │
    ├── js/
    │   └── script.js      # WhatsApp booking, vehicle filter, lightbox, scroll spy
    │
    └── images/
        ├── logo.png           # Company branding logo
        ├── logo.svg           # Scalable vector logo
        ├── hero-car.jpg       # Luxury car on highway
        ├── hatchback.jpg      # Hatchback fleet (Swift, WagonR, Baleno)
        ├── sedan.jpg          # Sedan fleet (Dzire, Amaze, Aura)
        ├── suv.jpg            # SUV fleet (Innova Crysta, Ertiga, Fortuner)
        ├── luxury-car.jpg     # Luxury fleet (Mercedes-Benz, BMW, Audi)
        ├── tempo-traveller.jpg# Tempo Traveller fleet (12, 17, 20 seater)
        ├── bus.jpg            # Coach bus fleet (Mini Bus, AC/Non-AC)
        ├── gallery-*.jpg      # High-res gallery photography
        └── service-*.jpg      # Service highlight imagery
```

---

## 🚀 Quick Start Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.0.0 or higher)
- npm (v7.0.0 or higher)

### Installation & Run

1. Open your terminal in the project directory:
   ```bash
   cd d:\static\dds
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Launch the web server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 🎨 Key Features & Highlights

- **Luxury Automotive Color Theme:** Black, White, and Golden-Yellow (`#f59e0b` / `#fbbf24`).
- **Hero Section:** Full-screen highway luxury car backdrop with call-to-actions and live counter metrics.
- **About Us Section:** Clear value proposition, 10+ years trust badge, and quality highlights.
- **Vehicle Collection & Filtering:**
  - Hatchbacks (Swift, WagonR, Baleno)
  - Sedans (Swift Dzire, Honda Amaze, Hyundai Aura)
  - SUVs (Innova Crysta, Ertiga, Kia Carens, Toyota Fortuner)
  - Luxury Cars (Mercedes-Benz, BMW, Audi)
  - Tempo Travellers (12, 17, 20 Seater)
  - Buses (Mini Bus, AC Bus, Non-AC Bus)
  - Interactive category filters & one-click vehicle booking pre-fill.
- **10 Core Services:** From local Hyderabad hourly rentals to all-India tour packages and airport transfers.
- **30-Minute Vehicle Dispatch Section:** Visually highlighted section with speedometer/timer graphic and GHMC dispatch guarantee.
- **All India Travel Hub:** Highlight cards for Telangana, Andhra Pradesh, Karnataka, Maharashtra, Tamil Nadu, Kerala, Goa, Delhi, Rajasthan, and more.
- **Interactive Gallery & Lightbox:** Grid layout with full-screen popup, prev/next navigation, and keyboard arrow controls.
- **Instant WhatsApp Booking Form:** Formats all customer booking inputs into a clean WhatsApp message and opens WhatsApp Web/App directly.
- **Contact & Map:** Click-to-call, WhatsApp desk, office address, and embedded interactive Google Map.
- **Mobile Friendly:** Sticky bottom quick-contact bar on mobile devices and responsive hamburger navigation.
- **SEO & Social Media Ready:** JSON-LD Schema.org LocalBusiness structured data, OpenGraph tags, and semantic HTML5.

---

## ⚙️ WhatsApp & Contact Configuration

To update the receiving WhatsApp number or telephone hotlines:
1. Open `public/js/script.js`
2. Update the configuration constants at the top:
   ```javascript
   const COMPANY_PHONE = '+917729988388';
   const WHATSAPP_NUMBER = '917729988388'; // Country code + 10-digit number
   ```
3. Update corresponding `tel:` and `wa.me` links in `public/index.html`.

---

© 2026 **D.D.S FRIENDS CAR TRAVELS**. All Rights Reserved.

