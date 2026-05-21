<h1 align="center">Kambaz — Web Client</h1>

<p align="center">
  A production-style frontend for a Canvas-inspired learning management system.<br/>
  Dashboards, courses, modules, assignments, people, and authenticated profiles — built on the Next.js App Router.
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white"/>
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=000"/>
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white"/>
  <img alt="Redux Toolkit" src="https://img.shields.io/badge/Redux%20Toolkit-2-764ABC?logo=redux&logoColor=white"/>
  <img alt="Tailwind" src="https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white"/>
  <img alt="Vercel" src="https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white"/>
</p>

<p align="center">
  <b>🌐 Live:</b> <a href="https://kambaz-next-js-xhy3.vercel.app">kambaz-next-js-xhy3.vercel.app</a> ·
  <b>🛠️ Backend repo:</b> <a href="https://github.com/aatharva22/kambaz-node-server-app">kambaz-node-server-app</a>
</p>

---

## ✨ Why this project

Most student LMS clones stop at a styled mockup. **Kambaz** is wired all the way through:

- **App Router with route groups** — `(Kambaz)` cleanly separates the authenticated product from coursework experiments under `Labs`, without leaking the group into the URL.
- **Typed end-to-end with TypeScript** and an explicit API layer (`client.ts` per feature) so screens don't talk to `fetch` directly.
- **Credentialed sessions across origins** — axios with `withCredentials`, talking to an Express API on a different host via `sameSite=none` cookies.
- **Redux Toolkit slices per domain** (account, courses, assignments, …) — global state where it pulls its weight, local state everywhere else.
- **Deployed on Vercel** with env-driven API base URL, so dev / preview / prod each point at the right backend.

---

## 🧩 What's in the box

```
┌──────────────────────┐         credentialed CORS         ┌────────────────────────┐
│  Next.js client       │  ──────────────────────────────▶  │  Express 5 REST API    │
│  (this repo, Vercel)  │                                   │  kambaz-node-server-app│
└──────────────────────┘  ◀──── session cookie ────────────  └──────────┬─────────────┘
                                                                       │ Mongoose
                                                              ┌────────▼─────────┐
                                                              │  MongoDB Atlas   │
                                                              └──────────────────┘
```

---

## 🗺️ Feature map

| Area | Routes | What it does |
|---|---|---|
| **Account** | `/Account/Signin` · `/Signup` · `/Profile` · `/Users` | Session-based auth against the API; faculty/admin can browse and filter users. |
| **Dashboard** | `/Dashboard` | Cards for every course the signed-in user is enrolled in; enroll / unenroll inline. |
| **Course** | `/Courses/[cid]/Home` | Per-course landing with status and quick links. |
| **Modules** | `/Courses/[cid]/Modules` | CRUD on modules + nested lessons. |
| **Assignments** | `/Courses/[cid]/Assignments` · `/[aid]` | List, create, edit, delete; per-assignment detail page. |
| **People** | `/Courses/[cid]/People` · `/Table` | Roster with role-aware actions. |
| **Other** | `/Calendar` · `/Inbox` · `/Courses/[cid]/{Grades,Zoom,Piazza,Quizzes}` | Scaffolded stubs that share the LMS shell. |

---

## 🏗️ Architecture

```
app/
├── (Kambaz)/              ← authenticated product (route group, no URL segment)
│   ├── Account/
│   │   ├── Signin · Signup · Profile · Users
│   │   ├── client.ts      ← axios calls to /api/users
│   │   ├── reducer.ts     ← Redux slice for current user
│   │   └── ProtectedRoute.tsx
│   ├── Courses/
│   │   ├── [cid]/
│   │   │   ├── Home · Modules · Assignments/[aid] · People/Table
│   │   │   └── …Grades · Zoom · Piazza · Quizzes
│   │   ├── client.ts      ← axios calls to /api/courses
│   │   └── reducer.ts
│   ├── Dashboard/
│   ├── Database/          ← seed data fallback for local dev
│   └── store.ts           ← Redux Toolkit store wiring
├── Labs/                  ← coursework experiments (Lab1–Lab5)
├── layout.tsx             ← root layout + global providers
└── globals.css
```

**One pattern, repeated:** each feature folder owns its `client.ts` (API), `reducer.ts` (state), and screen components. Adding a new resource is mechanical.

---

## 🚀 Quickstart

**Prerequisites:** Node 18+, and the [Kambaz API](https://github.com/aatharva22/kambaz-node-server-app) running locally (default `http://localhost:4000`).

```bash
git clone https://github.com/aatharva22/kambaz-next-js.git
cd kambaz-next-js
npm install
cp .env.example .env.local       # fill in values
npm run dev                      # http://localhost:3000
```

### `.env.local`

```bash
# Base URL of the Express API. No trailing slash.
NEXT_PUBLIC_HTTP_SERVER=http://localhost:4000
```

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Next.js dev server with Turbopack. |
| `npm run build` | Production build (Turbopack). |
| `npm start` | Serve the production build. |
| `npm run lint` | ESLint with `eslint-config-next`. |

---

## ☁️ Deployment

Deployed on **Vercel**. To deploy your own:

1. Push this repo to GitHub.
2. Import the project on [vercel.com/new](https://vercel.com/new).
3. Set the env var `NEXT_PUBLIC_HTTP_SERVER` to your deployed API URL.
4. Make sure the backend's `CLIENT_URL` env var matches your Vercel domain so CORS + cookies work.

> **Cross-origin cookies:** the API must run with `NODE_ENV=production` so it sets `sameSite=none; secure=true` on the session cookie. Vercel is HTTPS by default; the API must be too.

---

## 🛣️ Roadmap

- [ ] Real loading + error UI states (Suspense + error boundaries instead of ad-hoc spinners).
- [ ] React Query / RTK Query for cache + invalidation; drop hand-rolled `useEffect` data fetching.
- [ ] Optimistic mutations for modules / assignments with rollback on failure.
- [ ] Zod schemas at the client.ts boundary so the API's response shape is type-checked at runtime.
- [ ] Playwright smoke tests for the auth + enroll-in-course flows.
- [ ] Lighthouse pass — image optimization (`next/image`) for `public/images`, font preloading.

---

## 🧰 Tech stack

`Next.js 16 (App Router, Turbopack)` · `React 19` · `TypeScript 5` · `Redux Toolkit` · `react-redux` · `axios` · `Tailwind CSS 4` · `react-bootstrap` · `Bootstrap 5` · `react-icons`

## 👤 Author

**Atharva Sonawane** — MS Computer Science, Northeastern University · Boston, MA
📧 atharvaboston10@gmail.com · 🔗 [LinkedIn](https://linkedin.com/in/atharva-sonawane-25b801227) · 💼 [GitHub](https://github.com/aatharva22)
