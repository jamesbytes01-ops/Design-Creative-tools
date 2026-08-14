# Design & Creative Tools Platform (with Webroot Integration)

A modern, commercial-quality software platform for discovering **Design & Creative Tools**, seamlessly featuring an integrated **Webroot Cybersecurity & Digital Protection** ecosystem.

Built with **Next.js (App Router)** and **Vanilla CSS / CSS Modules**.

---

## 🌟 Key Features

- **Software Discovery Engine**: Advanced search, category filters, pricing filters, and modal view for creative applications (Figma, Canva, Adobe Photoshop, Blender, Midjourney, Procreate, etc.).
- **Webroot Security Integration**: Dedicated Webroot suite landing page (`/webroot`), technical feature breakdowns, threat metrics, and dynamic product detail pages (`/webroot/antivirus`, `/webroot/internet-security`, `/webroot/wifi-security`, `/webroot/business-endpoint`, `/webroot/identity-shield`).
- **Interactive Webroot Security Advisor**: Workflow-based product recommendation tool for freelancers, agencies, 3D artists, and remote nomads.
- **Pure Vanilla CSS & CSS Modules**: Premium light/neutral SaaS aesthetics, custom typography, subtle gradients, and card layouts without third-party utility CSS dependencies.
- **Data-Driven Architecture**: Modular data structures (`toolsData.js`, `webrootData.js`, `categoriesData.js`, `resourcesData.js`) structured for future API / Database / Admin Panel connection.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/jamesbytes01-ops/Design-Creative-tools.git

# Navigate into project directory
cd Design-Creative-tools

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── layout.js              # Server Root Layout (Metadata & Font preloads)
│   ├── globals.css            # Global CSS variables, design tokens & resets
│   ├── page.js                # Homepage (Hero, Categories, Tools & Webroot Section)
│   ├── explore/page.js        # Search & Filterable Tools Directory
│   ├── categories/page.js     # Category Taxonomy Hub
│   ├── products/page.js       # Unified Software Marketplace
│   ├── webroot/               # Webroot Landing & Dynamic Product Detail Pages
│   │   ├── page.js
│   │   └── [productId]/page.js
│   ├── resources/page.js      # Blog & Engineering Guides
│   ├── about/page.js          # Mission & Platform Story
│   └── contact/page.js        # Stateful Contact Form
├── components/
│   ├── layout/                # Navbar, Footer, ClientLayoutWrapper
│   └── ui/                    # ToolCard, CategoryCard, WebrootProductCard, Modals, Advisor
└── data/                      # Structured Data Models
    ├── toolsData.js
    ├── webrootData.js
    ├── categoriesData.js
    └── resourcesData.js
```

---

## 🛡️ License

This repository is maintained for company project presentation. Webroot logos and product names are trademarks of OpenText / Webroot Inc.
