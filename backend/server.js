import express from 'express';
// import mongoose from 'mongoose';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import methodOverride from 'method-override';
import flash from 'express-flash';
import logger from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db.js';  // Note the `.js` extension here (ESM modules need file extensions)
import foodRoutes from './routers/foodRoute.js';  // Same here
import cartRouter from './routers/cartRoute.js';
 import foodRoute from './routers/foodRoute.js';



dotenv.config();

// Connect to Database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || origin.endsWith('.app.github.dev')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
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
    secret: 'keyboard cat', // <-- you can put a real secret later
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ 
      mongoUrl: process.env.MONGODB_URI, 
    }),
  })
);

// Use flash messages
 app.use(flash());

// Setup Routes
app.use('/api/foods', foodRoutes);
app.use("/api/cart", cartRouter);
app.use('/api', foodRoute);


// Server Running
app.listen(process.env.PORT || 5000, '0.0.0.0', () => {
  console.log(`✅ Server running on PORT ${process.env.PORT}`);
});
// Check if the MongoDB URI is being loaded correctly
console.log('MONGODB_URI:', process.env.MONGODB_URI);