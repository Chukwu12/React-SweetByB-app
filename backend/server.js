import express from 'express';
import initPassport from "./config/passport.js"; 
// import mongoose from 'mongoose';
import session from 'express-session';
import passport from "passport";
import MongoStore from 'connect-mongo';
import methodOverride from 'method-override';
import flash from 'express-flash';
import logger from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db.js';
import foodRoutes from './routers/foodRoute.js'; 
import cartRouter from './routers/cartRoute.js';
import orderRouter from './routers/orderRoute.js';
import userRoutes from "./routers/userRoute.js";




dotenv.config();

// Connect to Database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Allow requests from frontend origin (localhost:5173)
app.use(cors({
  origin: 'http://localhost:5173', // exact origin
  credentials: true   
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



app.use(passport.initialize());
app.use(passport.session());

initPassport(passport); // Set up passport strategies

// Use flash messages
 app.use(flash());

// Setup Routes
app.use('/api/foods', foodRoutes);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use('/api', userRoutes);




// Server Running
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on PORT ${PORT}`);
});
// Check if the MongoDB URI is being loaded correctly
console.log('MONGODB_URI:', process.env.MONGODB_URI);