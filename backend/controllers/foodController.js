import FoodItem from '../models/foodModel.js';  // ESM import
import fs from 'fs';  // ESM import
import cloudinary from "../middleware/cloudinary.js";

// Add food item
export const addFood = async (req, res) => {
  try {
  const result = await cloudinary.uploader.upload(req.file.path); // this uploads to Cloudinary
 

    await FoodItem.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
       image: result.secure_url, // Use Cloudinary URL
    });

    console.log("Food has been added!");
    res.json({ success: true, message: "Food Added" });
  } catch (err) {
    console.log(err);
// Example of correct usage:
res.json({ success: true, message: "Food has been added!" });

  }
};

// Get all food items
export const listFood = async (req, res) => {
  try {
    const foods = await FoodItem.find({});
    res.json({ success: true, data: foods });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Error retrieving food list" });
  }
};

// Remove food item
export const removeFood = async (req, res) => {
  try {
    const food = await FoodItem.findById(req.body.id);

    if (!food) {
      return res.json({ success: false, message: "Food not found" });
    }

    // Delete image from uploads folder
    fs.unlink(`uploads/${food.image}`, (err) => {
      if (err) console.log("Failed to delete image:", err);
    });

   // Delete food from database
   await FoodItem.deleteOne({ _id: req.body.id });

   console.log("Food has been removed!");
   res.json({ success: true, message: "Food Removed" });
 } catch (err) {
   console.log(err);
   res.json({ success: false, message: "Error removing food" });
 }
};