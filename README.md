# SweetByB Monorepo 🍰

![React](https://img.shields.io/badge/Frontend-React%2018-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Bundler-Vite-646CFF?logo=vite&logoColor=white)
![Express](https://img.shields.io/badge/API-Express-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white)
![Stripe](https://img.shields.io/badge/Payments-Stripe-635BFF?logo=stripe&logoColor=white)

SweetByB is a full-stack dessert ordering platform with:

- 🛍️ Customer storefront (React + Vite)
- 🧑‍💼 Admin dashboard for product and order management
- ⚙️ Express API with MongoDB, auth sessions, and Stripe checkout

## Documentation Map 🗺️

- Root overview: `README.md`
- Storefront app guide: `my-project/README.md`
- Admin app guide: `admin/README.md`

## What Is In This Repo

```text
React-SweetByB-app/
├── my-project/   # Customer-facing frontend
├── admin/        # Admin dashboard frontend
└── backend/      # Express + MongoDB API
```

## Feature Highlights ✨

- Product browsing and category-driven menu display
- Cart and checkout flow with Stripe session creation
- Session-based auth with Passport + Mongo-backed sessions
- Admin product add/list/remove flows
- Order verification endpoint for post-payment confirmation

## Tech Stack 🧰

- Frontend: React 18, Vite, Chakra UI, Tailwind CSS, Axios
- Backend: Node.js, Express, Mongoose, Passport, Express Session
- Integrations: Stripe, Cloudinary

## Quick Start 🚀

### 1. Clone and install dependencies

```bash
git clone <your-repo-url>
cd React-SweetByB-app

cd backend && npm install
cd ../my-project && npm install
cd ../admin && npm install
```

### 2. Configure environment variables

Create a `.env` file in `backend/` with values similar to:

```env
PORT=5000
NODE_ENV=development
DB_STRING=mongodb+srv://<username>:<password>@<cluster>/<dbName>
SESSION_SECRET=replace-with-a-strong-secret
FRONTEND_URL=http://localhost:5173
STRIPE_SECRET_KEY=sk_test_xxx

# Cloudinary
CLOUD_NAME=your_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
```

For the storefront, create `my-project/.env` (optional for local dev):

```env
VITE_BACKEND_URL=http://localhost:5000
# Alternative supported key:
# VITE_API_BASE_URL=http://localhost:5000
```

### 3. Run the apps

Open 3 terminals and run:

```bash
# Terminal 1
cd backend
npm run dev

# Terminal 2
cd my-project
npm run dev

# Terminal 3
cd admin
npm run dev
```

Default local URLs:

- Storefront: `http://localhost:5173`
- Admin: `http://localhost:5174` (or next free Vite port)
- API: `http://localhost:5000`

## Scripts By App 📜

### backend

- `npm run dev` - start API with nodemon
- `npm run start` - start API with node
- `npm run server` - alias for nodemon server start

### my-project

- `npm run dev` - run Vite dev server (host enabled)
- `npm run build` - production build
- `npm run preview` - preview build
- `npm run lint` - lint frontend code

### admin

- `npm run dev` - run Vite dev server
- `npm run build` - production build
- `npm run preview` - preview build
- `npm run lint` - lint admin code

For app-specific details, see the app README files in `my-project/` and `admin/`.

## API Surface (High-Level) 🔌

- `/api/user` - auth/user endpoints
- `/api/foods` - food catalog CRUD/listing
- `/api/cart` - cart add/remove operations
- `/api/order` - place and verify orders

## Deployment Notes 🌍

- Storefront uses Vite proxy in dev and env-based backend URL in production.
- Backend CORS allows localhost plus configured frontend origin(s).
- Set production `FRONTEND_URL`, `DB_STRING`, and Stripe/Cloudinary secrets before deploy.

## Known Gaps / Next Improvements 🛠️

- Move admin hardcoded API URLs to env-based config for easier deployments.
- Add a single root-level script runner (or workspace tooling) to start all services together.
- Add automated tests for order placement and payment verification flow.

## Contributing 🤝

1. Create a feature branch.
2. Make focused changes.
3. Run lint/build checks in affected app(s).
4. Open a pull request with clear test notes.

## License

No license declared yet. Add a `LICENSE` file if you plan to distribute this project publicly.
