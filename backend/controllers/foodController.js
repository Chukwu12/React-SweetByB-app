import FoodItem from '../models/foodModel.js';  // ESM import
import cloudinary from "../middleware/cloudinary.js";

// Add food item
export const addFood = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Image file is required' });
    }

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "sweetbyb-foods", // Optional: organizes your uploads
    });

    // Create new food item in MongoDB
    const newFood = await FoodItem.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: result.secure_url, // Cloudinary image URL
    });

    console.log("✅ Food has been added!");
    res.status(201).json({ success: true, message: "Food added successfully", data: newFood });

  } catch (err) {
    console.error("❌ Error adding food:", err);
    res.status(500).json({ success: false, message: "Failed to add food", error: err.message });
  }
};

// Get all food items
export const listFood = async (req, res) => {
  try {
    console.log("DB:", FoodItem.db.name);
console.log("Collection:", FoodItem.collection.name);

    const foods = await FoodItem.find();

    if (foods.length > 0) {
      return res.json({ success: true, data: foods });
    } else {
      console.log("MongoDB is empty, using fallback foodData.js");
      const { default: itemCard } = await import("../foodData.js");

      const withIds = itemCard.map((item, idx) => ({
        ...item,
        _id: item._id || item.id || `fallback-${idx}`,
      }));

      return res.json({ success: true, data: withIds });
    }
  } catch (error) {
    console.error("Error fetching food items:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch food items",
    });
  }
};




// Remove food item
export const removeFood = async (req, res) => {
  try {
    const food = await FoodItem.findById(req.body.id);

    if (!food) {
      return res.status(404).json({ success: false, message: "Food item not found" });
    }

    // Delete image from Cloudinary
    const publicId = food.image.split('/').pop().split('.')[0]; // Extract public ID from URL
    await cloudinary.uploader.destroy(publicId);

    // Delete food item from MongoDB
    await FoodItem.findByIdAndDelete(req.body.id);

    console.log("✅ Food item removed!");
    res.status(200).json({ success: true, message: "Food removed successfully" });

  } catch (err) {
    console.error("❌ Error removing food:", err);
    res.status(500).json({ success: false, message: "Error removing food", error: err.message });
  }
};
