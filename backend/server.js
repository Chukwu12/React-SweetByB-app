//Load environment variables
import dotenv from 'dotenv';
 import cors from 'cors';


import express from 'express';
import initPassport from "./config/passport.js"; 
// import mongoose from 'mongoose';
import session from 'express-session';
<<<<<<< HEAD
import passport from "passport";
=======
import passport from 'passport';
>>>>>>> c12718f69537c3ccc2acad518c4fe7f21444a91c
import MongoStore from 'connect-mongo';
import methodOverride from 'method-override';
import flash from 'express-flash';
import logger from 'morgan';
import './config/passport.js';



<<<<<<< HEAD
import connectDB from './config/db.js';
import foodRoutes from './routers/foodRoute.js'; 
import cartRouter from './routers/cartRoute.js';
import orderRouter from './routers/orderRoute.js';
import userRoutes from "./routers/userRoute.js";
=======
import connectDB from './config/db.js';  // Note the `.js` extension here (ESM modules need file extensions)
import foodRoutes from './routers/foodRoute.js';  
import cartRouter from './routers/cartRoute.js';
import orderRouter from './routers/orderRoute.js'
import userRouter from './routers/userRoute.js';
>>>>>>> c12718f69537c3ccc2acad518c4fe7f21444a91c




dotenv.config();
// console.log("STRIPE KEY:", process.env.STRIPE_SECRET_KEY);

// Connect to Database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

<<<<<<< HEAD
// Allow requests from frontend origin (localhost:5173)
app.use(cors({
  origin: 'http://localhost:5173', // exact origin
  credentials: true   
=======
// Log every request origin BEFORE CORS is applied
app.use((req, res, next) => {
  console.log("🛰️ Incoming request from origin:", req.headers.origin);
  next();
});



// Enable CORS for frontend

const allowedOrigins = [
  process.env.FRONTEND_URL,  // Use your environment variable for frontend URL
];

app.use(cors({
  origin: (origin, callback) => {
    console.log("🔍 Checking CORS for origin:", origin);
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`⛔ CORS BLOCKED for origin: ${origin}`);
      callback(new Error(`CORS blocked for origin: ${origin}`));
    }
  },
  credentials: true,
>>>>>>> c12718f69537c3ccc2acad518c4fe7f21444a91c
}));

app.get('/api/ping', (req, res) => {
  res.json({ message: "pong" });
});



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
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
    cookie: {
      secure: false,
      httpOnly: true,
      sameSite: 'lax'
    }
  })
);

<<<<<<< HEAD


app.use(passport.initialize());
app.use(passport.session());

initPassport(passport); // Set up passport strategies

=======
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

>>>>>>> c12718f69537c3ccc2acad518c4fe7f21444a91c
// Use flash messages
 app.use(flash());

// Setup Routes
app.use('/api', foodRoutes);
app.use("/api/cart", cartRouter);
<<<<<<< HEAD
app.use("/api/order", orderRouter);
app.use('/api', userRoutes);

=======
app.use('/user', userRouter); 
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
>>>>>>> c12718f69537c3ccc2acad518c4fe7f21444a91c



// Server Running
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on PORT ${PORT}`);
});
// Check if the MongoDB URI is being loaded correctly
console.log('MONGODB_URI:', process.env.MONGODB_URI);