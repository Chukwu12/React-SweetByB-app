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
   // Insert food data and log result
   const insertedFoods = await Food.insertMany(itemCard);
   console.log('Inserted Foods:', insertedFoods);

   console.log('Food data successfully seeded!');
   process.exit();
 } catch (error) {
   console.error('Error seeding food data:', error);
   process.exit(1);
 }
};
seedFoods();
