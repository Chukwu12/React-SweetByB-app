// seedFood.js
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './config/db.js';
import itemCard from './foodData.js';
import Food from './models/foodModel.js'; 

// Seed function
const seedFoods = async () => {
  try {
    await connectDB(); // connect to MongoDB
    await Food.deleteMany(); // Clear existing food data
    await Food.insertMany(itemCard); // Insert new food data

    console.log('Food data successfully seeded!');
    process.exit(); // Exit process after seeding
  } catch (error) {
    console.error('Error seeding food data:', error);
    process.exit(1);
  }
};

seedFoods();
