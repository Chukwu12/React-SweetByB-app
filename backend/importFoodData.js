// importFoodData.js

import mongoose from 'mongoose';
import FoodItem from './models/foodModel.js';
import itemCard from './foodData.js'; // Adjust if your file is elsewhere
import dotenv from 'dotenv';

dotenv.config(); // Make sure .env is in root or update the path

mongoose.connect(process.env.DB_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log("✅ Connected to MongoDB");

  // Optional: wipe out existing data
  await FoodItem.deleteMany();

  const formattedData = itemCard.map(item => ({
    name: item.name,
    description: item.description,
    minPrice: item.minPrice,
    maxPrice: item.maxPrice || null, // Optional

    category: item.category,
    image: item.image, // Cloudinary URL
  }));

  await FoodItem.insertMany(formattedData);

  console.log("✅ Food data imported!");
  mongoose.disconnect();
}).catch(err => {
  console.error("❌ Error:", err);
});
