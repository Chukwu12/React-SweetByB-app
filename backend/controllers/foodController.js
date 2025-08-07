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

<<<<<<< HEAD
    console.log("Food has been added!");
    res.json({ success: true, message: "Food Added" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Error adding food", error: err.message });
=======
    console.log("✅ Food has been added!");
    res.status(201).json({ success: true, message: "Food added successfully", data: newFood });
>>>>>>> c12718f69537c3ccc2acad518c4fe7f21444a91c

  } catch (err) {
    console.error("❌ Error adding food:", err);
    res.status(500).json({ success: false, message: "Failed to add food", error: err.message });
  }
};

// Get all food items
export const listFood = async (req, res) => {
  try {
    const foods = await FoodItem.find({});
    res.status(200).json({ success: true, data: foods });
  } catch (err) {
    console.error("❌ Error fetching food list:", err);
    res.status(500).json({ success: false, message: "Error retrieving food list", error: err.message });
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
