# SweetByB Admin Dashboard 🧑‍💼

Internal admin panel for managing products and viewing order-related pages.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4-646CFF?logo=vite&logoColor=white)
![Chakra UI](https://img.shields.io/badge/UI-Chakra-319795?logo=chakraui&logoColor=white)

## Tech Stack 🧰

- React 18 + React Router
- Vite 4
- Chakra UI
- Axios for API calls

## Features ✨

- Add products with image upload support
- List current products
- Delete products from catalog
- Sidebar-based admin navigation

## Routes 🧭

- `/add-product` - Add new product form
- `/list` - Product inventory list
- `/order` - Orders page placeholder

## Prerequisites

- Node.js 18+
- Running backend API

## Setup & Run 🚀

```bash
npm install
npm run dev
```

Dev server runs on `http://localhost:5173` by default (or next available port).

## Scripts 📜

- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Environment Variables ⚙️

This app currently does not read a shared API base URL from `.env`.

## Important API Configuration Note ⚠️

This app currently uses hardcoded backend URLs in some pages instead of environment variables.

- Affected files: `src/pages/Add.jsx`, `src/pages/List.jsx`

For easier local/prod switching, consider moving those URLs to a shared API client using env variables (for example `VITE_BACKEND_URL`).

## Related Docs

- Backend API: `../backend`
- Customer storefront: `../my-project`
- Monorepo guide: `../README.md`
