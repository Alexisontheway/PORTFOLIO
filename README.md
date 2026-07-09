<p align="center">
  <h1 align="center">Priyanshu Pramanik — Portfolio</h1>
  <p align="center">
    <strong>Building production-ready software, intelligent automation, and AI-powered systems from architecture to deployment.</strong>
  </p>
</p>

<p align="center">
  <a href="https://portfolio-de9q.onrender.com">
    <img src="https://img.shields.io/badge/🌐_Live-portfolio--de9q.onrender.com-EAFF00?style=for-the-badge&labelColor=000000" alt="Live Site" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 6" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Node.js-20-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-4-000000?style=flat-square&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL" />
</p>

---

A full-stack personal portfolio engineered for performance, accessibility, and visual impact. Pitch-black canvas meets electric yellow (`#EAFF00`) in a two-tone aesthetic inspired by circuit-board trace routing and neural network topology — no gradients, no rainbow palettes, just signal and contrast.

<p align="center">
  <img src="hero-desktop.png" alt="Portfolio — Desktop View" width="720" />
</p>

---

## ✨ Features

| Category | Details |
|---|---|
| **Hero** | Three-column layout — identity panel, animated SVG neural network with orthogonal PCB traces, and a live "System Profile" terminal panel |
| **Sections** | About · Skills · Projects · Experience · Education · Certifications · Contact |
| **Contact Form** | Server-side validation, PostgreSQL persistence, rate limiting (5 req / 15 min), and SMTP email notifications via Nodemailer |
| **Security** | Helmet headers, strict CORS, XSS sanitization (`escapeHtml`), parameterized SQL queries, express-validator input checks |
| **SEO** | Meta tags, Open Graph, Twitter Cards, `robots.txt`, `sitemap.xml`, semantic heading hierarchy |
| **Performance** | Lazy-loaded sections, Vite code-split bundles, CSS-only animations — zero runtime animation libraries in production |
| **Accessibility** | ARIA labels, semantic HTML, full keyboard navigation |
| **Responsive** | Mobile-first design, fluid across all viewports |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19, Vite 6, Tailwind CSS 3.4, Lucide React |
| **Backend** | Node.js 20, Express 4, Nodemailer |
| **Database** | PostgreSQL 16 (hosted on [Neon](https://neon.tech)) |
| **Security** | Helmet, express-rate-limit, express-validator, custom `escapeHtml` |
| **Deployment** | Vercel (frontend) · Render (backend) |
| **Typography** | Inter (body) · JetBrains Mono (code / labels) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm
- **PostgreSQL** database — local install or a managed instance ([Neon](https://neon.tech) recommended)

### 1 — Clone & Install

```bash
git clone https://github.com/Alexisontheway/PORTFOLIO.git
cd PORTFOLIO

# Frontend
cd client && npm install

# Backend
cd ../server && npm install
```

### 2 — Configure Environment

Create a `.env` file inside `server/` (use `.env.example` as a template):

```env
# Database
DATABASE_URL=postgresql://user:password@host:5432/portfolio

# SMTP (for contact-form emails)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
NOTIFY_EMAIL=inbox@example.com

# Server
PORT=5000
CLIENT_URL=http://localhost:5173
```

### 3 — Set Up the Database

```bash
# From the server/ directory
psql $DATABASE_URL < db/schema.sql
```

Or paste the contents of `server/db/schema.sql` into your database console (Neon, Supabase, etc.).

### 4 — Start Development

```bash
# Terminal 1 — Backend (from server/)
npm run dev          # → http://localhost:5000

# Terminal 2 — Frontend (from client/)
npm run dev          # → http://localhost:5173
```

The Vite dev server proxies `/api` requests to the Express backend automatically.

---

## 📁 Project Structure

```
portfolio/
├── client/                     # React + Vite frontend
│   ├── public/                 # Static assets, robots.txt, sitemap.xml
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── sections/           # Page sections (Hero, About, Skills, …)
│   │   ├── data/               # portfolioData.js, networkData.js
│   │   ├── hooks/              # Custom React hooks
│   │   └── utils/              # API client utilities
│   ├── dist/                   # Production build output
│   └── package.json
│
├── server/                     # Express.js backend
│   ├── src/
│   │   ├── app.js              # Express app setup
│   │   ├── config/             # Database connection config
│   │   ├── controllers/        # Contact form controller
│   │   ├── middleware/         # Rate limiting, validation
│   │   ├── models/             # PostgreSQL query layer
│   │   ├── routes/             # API route definitions
│   │   └── utils/              # Mailer, security helpers
│   ├── db/
│   │   └── schema.sql          # Database schema
│   └── package.json
│
├── hero-desktop.png            # Desktop screenshot
├── hero-mobile.png             # Mobile screenshot
├── DEPLOYMENT.md               # Detailed deployment guide
└── README.md
```

---

## 🎨 Design

> **Two-tone. No exceptions.**

| Element | Value |
|---|---|
| Background | Pitch black `#000000` |
| Accent | Electric yellow `#EAFF00` |
| Panels | Transparent glass with subtle `1px` borders |
| Body font | [Inter](https://rsms.me/inter/) |
| Monospace | [JetBrains Mono](https://www.jetbrains.com/lp/mono/) |

The centerpiece is a **pure SVG neural network** rendered with orthogonal, circuit-board-style traces — no curves, no diagonal wires. Nodes pulse, data packets animate along PCB-style paths, and the entire graphic runs on CSS keyframes with zero JavaScript animation overhead.

Every visual decision reinforces the same idea: **signal over noise**. No tertiary colors, no gradient fills, no decorative illustrations. The portfolio should look like it was designed by an engineer who ships production systems, not a template user.

---

## 📡 API Reference

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/contact` | Submit a contact message |
| `GET` | `/api/contact` | List stored messages |
| `GET` | `/api/health` | Server health check |

<details>
<summary><strong>POST /api/contact</strong> — request & response</summary>

**Request body:**

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Let's build something together."
}
```

**Response `201`:**

```json
{
  "success": true,
  "message": "Message sent successfully!",
  "data": {
    "id": 1,
    "created_at": "2026-07-09T12:00:00.000Z"
  }
}
```

</details>

---

## 🌐 Deployment

| Service | Role |
|---|---|
| [Vercel](https://vercel.com) | Frontend hosting (auto-deploys from `main`) |
| [Render](https://render.com) | Backend hosting |
| [Neon](https://neon.tech) | Managed PostgreSQL |

A **GitHub Actions** workflow (`.github/workflows/deploy.yml`) automates the full pipeline on push to `main`:

1. Installs dependencies for `client/` and `server/`
2. Builds the frontend production bundle
3. Deploys the backend to Render
4. Deploys the frontend to Vercel

**Required GitHub Secrets:**

```
RENDER_API_KEY
RENDER_SERVICE_ID
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
```

For manual deployment steps, see [`DEPLOYMENT.md`](./DEPLOYMENT.md).

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

<p align="center">
  Designed & built by <strong>Priyanshu Pramanik</strong><br/>
  <a href="https://portfolio-de9q.onrender.com">portfolio-de9q.onrender.com</a> · <a href="https://github.com/Alexisontheway">@Alexisontheway</a>
</p>
