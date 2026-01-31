//Load environment variables
import dotenv from 'dotenv';
dotenv.config();
 import cors from 'cors';


import express from 'express';
import initPassport from "./config/passport.js"; 
// import mongoose from 'mongoose';
import session from 'express-session';
import passport from 'passport';
import MongoStore from 'connect-mongo';
import methodOverride from 'method-override';
import flash from 'express-flash';
import logger from 'morgan';
import './config/passport.js';




import connectDB from './config/db.js';  
import foodRoutes from './routers/foodRoute.js';  
import cartRouter from './routers/cartRoute.js';
import orderRouter from './routers/orderRoute.js'
import userRouter from './routers/userRoute.js';






// Connect to Database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Log every request origin BEFORE CORS is applied
app.use((req, res, next) => {
  console.log("🛰️ Incoming request from origin:", req.headers.origin);
  next();
});



// Enable CORS for frontend

// Log incoming request origins (for debugging)
app.use((req, res, next) => {
  console.log("🛰️ Incoming request from origin:", req.headers.origin);
  next();
});

// ✅ CORS configuration
const allowedOrigins = [
  process.env.FRONTEND_URL,                   // Codespaces / dev
  'http://localhost:5173',                    // Local dev
  'https://localhost:5173',                   // Local dev over https
  'https://possessed-cape-6rx4xv74vr4hxvqj-5173.app.github.dev', // Codespaces
  'https://sweetsbyb.netlify.app' // <-- Netlify frontend
];

app.use(cors({
  origin: (origin, callback) => {
    console.log("🔍 Checking CORS for origin:", origin);

    if (!origin) {
      // Allow server-to-server or curl requests with no origin
      return callback(null, true);
    }

    // Allow exact matches
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    // Also allow any *.app.github.dev for flexibility in Codespaces
    if (/\.app\.github\.dev$/.test(origin)) {
      return callback(null, true);
    }

    console.warn(`⛔ CORS BLOCKED for origin: ${origin}`);
    callback(new Error(`CORS blocked for origin: ${origin}`));
  },
  credentials: true,
}));


// Static folder (optional)
app.use(express.static('public'));

// Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Logging
app.use(logger('dev'));

// Use forms for PUT/DELETE
// app.use(methodOverride('_method'));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
  mongoUrl: process.env.DB_STRING,
}),

    cookie: {
      secure: false,
      httpOnly: true,
      sameSite: 'lax'
    }
  })
);

console.log("🧩 Mongo session store using:", process.env.MONGODB_URI || process.env.DB_STRING);


// Passport middleware
initPassport(passport);
app.use(passport.initialize());
app.use(passport.session());

// Use flash messages
 app.use(flash());

// Setup Routes
app.use("/api/foods", foodRoutes);
app.use("/api/cart", cartRouter);
app.use('/api/user', userRouter);
app.use("/api/order", orderRouter);

app.get('/api/test', (req, res) => {
  res.json({ success: true, message: 'CORS working' });
});

app.use('/uploads', express.static('uploads')); // Serve uploaded images

// Global Error Handler (for CORS and general errors)
app.use((err, req, res, next) => {
  console.error("🔥 Global error:", err.message);
  res.status(500).json({ success: false, message: err.message || "Server Error" });
});



// Server Running
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
// Check if the MongoDB URI is being loaded correctly
console.log('DB_STRING:', process.env.DB_STRING);