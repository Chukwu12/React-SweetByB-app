# SweetByB Storefront 🛍️

Customer-facing React app for browsing desserts, managing cart items, and placing Stripe-powered orders.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Chakra UI](https://img.shields.io/badge/UI-Chakra-319795?logo=chakraui&logoColor=white)

## Tech Stack 🧰

- React 18 + React Router
- Vite 6
- Chakra UI + Tailwind CSS
- Axios API client

## Features ✨

- Multi-page storefront with route-based navigation
- Product listing powered by backend API
- Local cart persistence with `localStorage`
- Checkout flow with Stripe session redirect
- Order verification route after payment

## Routes 🧭

- `/` - Home / auth entry
- `/shop` - Shopping page
- `/about` - About page
- `/cart` - Cart page
- `/order` - Place order page
- `/verify` - Payment result handler
- `/contact` - Contact page

## Prerequisites

- Node.js 18+
- Running backend API (default: `http://localhost:5000`)

## Setup & Run 🚀

```bash
npm install
npm run dev
```

Dev server runs on `http://localhost:5173` by default.

## Environment Variables ⚙️

Create `.env` in this folder if you want explicit API base configuration:

```env
VITE_BACKEND_URL=http://localhost:5000
# OR
# VITE_API_BASE_URL=http://localhost:5000
```

Notes:

- In Vite dev mode, the app uses same-origin `/api` calls and relies on the Vite proxy.
- In production mode, it uses `VITE_BACKEND_URL` (or `VITE_API_BASE_URL`) as the API base URL.

## Scripts 📜

- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Endpoints Used 🔌

- `/api/foods/list`
- `/api/user/login`
- `/api/user/signup`
- `/api/user/logout`
- `/api/user/me`
- `/api/order/place`
- `/api/order/verify`

## Related Docs

- Backend API: `../backend`
- Admin dashboard: `../admin`
- Monorepo guide: `../README.md`
