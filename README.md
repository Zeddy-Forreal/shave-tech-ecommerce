<div align="center">

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/SVG_Icons-FFB13B?style=for-the-badge&logo=svg&logoColor=black" />

# 🛒 ШAVE — Modern Tech E-Commerce

**A dark, luxury-styled tech storefront built with pure HTML, CSS, and JavaScript.**  
No frameworks, no installs — just open and start selling.

[Features](#-features) · [Getting Started](#-getting-started) · [File Structure](#-file-structure) · [Customization](#-customization)

</div>

---

## ✨ Features

- 🌑 **Dark Luxury Design** — Deep ink-black aesthetic with purple & teal dual-accent system
- 📢 **Announcement Bar** — Gradient top bar for promotions and shipping notices
- 🧭 **Sticky Frosted Header** — Glass-blur nav that solidifies on scroll with cart badge indicator
- 🎬 **Hero Section** — Bold editorial layout with ambient glow, animated text reveals, and social links
- 🏷️ **Trust Strip** — Static info bar highlighting Free Returns, Warranty, Fast Delivery, and more
- 🔥 **Featured Deals Grid** — 4-column product cards with old/new pricing and add-to-cart buttons
- 🛍️ **Shop Collection Grid** — 3-column product grid with category filter chips
- ✉️ **Newsletter Section** — Centered subscribe card with gradient top border accent
- 🗂️ **Full Footer** — 5-column footer with Socials, Shop, Company, and Support link groups
- ✨ **Scroll Reveal Animations** — Cards and sections fade and slide in via `IntersectionObserver`
- 📱 **Fully Responsive** — Adapts cleanly from widescreen down to mobile

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Zeddy-Forreal/shave-tech-ecommerce.git
cd shave-tech-ecommerce
```

### 2. Open in browser

No build step, no installs. Just open `index.html` directly:

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

### 3. Customize your products

Edit the product cards directly in `index.html` — update the titles, prices, and swap SVG icons to match your real inventory.

---

## 📁 File Structure

```
shave-tech-ecommerce/
└── index.html          Full site — markup, styles, and logic in one file
```

> The site is intentionally single-file for simplicity. All CSS and JavaScript are embedded inline.

---

## 🎨 Customization

All colors are CSS custom properties at the top of the `<style>` block. Edit these to retheme the entire site:

```css
:root {
  --bg:       #080a0c;              /* Page background              */
  --bg2:      #0d1014;              /* Section alt background       */
  --bg3:      #111519;              /* Card background              */
  --lift:     #181d22;              /* Hover / elevated background  */
  --rim:      #222830;              /* Borders and dividers         */
  --muted:    #5a6672;              /* Dim text                     */
  --silver:   #8a9aaa;              /* Secondary text               */
  --txt:      #d8e2ec;              /* Body text                    */
  --white:    #f0f5fa;              /* Primary text                 */
  --pur:      #8b6bff;              /* Primary accent (purple)      */
  --pur-lt:   #aa90ff;              /* Primary accent light         */
  --teal:     #00e8b0;              /* Secondary accent (teal)      */
}
```

---

<div align="center">

Made with 🖤 by [Zeddy-Forreal](https://github.com/Zeddy-Forreal)

</div>
