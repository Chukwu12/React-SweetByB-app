// seedFoodItems.js 
import mongoose from "mongoose";
import dotenv from "dotenv";
import FoodItem from "./models/foodModel.js";
import itemCard from "./foodData.js"; 

dotenv.config();

mongoose.connect(process.env.DB_STRING)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

const seedFoodItems = async () => {
  try {
    // Optional: Clear existing food items first
    await FoodItem.deleteMany({});
    console.log("🗑️ Cleared existing food items");

    // Format itemCard to include maxPrice and addons
    const formattedData = itemCard.map(item => ({
      name: item.name,
      description: item.description,
      minPrice: item.minPrice,
      maxPrice: item.maxPrice ?? item.minPrice,
      category: item.category,
      image: item.image,
      flavors: item.flavors ?? [],
      addons: item.addOns ?? [], // <-- This ensures add-ons are included
    }));

    const inserted = await FoodItem.insertMany(formattedData);
    console.log(`🌟 Inserted ${inserted.length} food items`);

    process.exit();
  } catch (err) {
    console.error("❌ Error seeding food items:", err);
    process.exit(1);
  }
};

seedFoodItems();
