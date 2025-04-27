// seedFoods.js

const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Food = require('./models/FoodModel'); // Adjust this if your model filename is different
const { itemCard } = require('./foodData.js'); // We'll create this file next

// Seed function
const seedFoods = async () => {
  try {
    await connectDB(); // connect to MongoDB

    // Clear existing food data (optional, but usually helpful for reseeding)
    await Food.deleteMany();

    // Insert food data
    await Food.insertMany(itemCard);

    console.log('Food data successfully seeded!');
    process.exit(); // exit process after seeding
  } catch (error) {
    console.error('Error seeding food data:', error);
    process.exit(1);
  }
};

seedFoods();
