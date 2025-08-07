import express from 'express';
import FoodItem from '../models/foodModel.js';
import upload from "../middleware/multer.js";
import { addFood, listFood, removeFood } from '../controllers/foodController.js';  // Named imports


//Create an express router
const router = express.Router();

// Routes
router.post("/add", upload.single("image"), addFood);
router.get("/list", listFood);
router.delete("/remove", removeFood);

// New route for fetching the food data
router.get('/foods/list', async (req, res) => {
  try {
    // Try to fetch food items from MongoDB
    const foods = await FoodItem.find();  // This fetches all food items from MongoDB

    // If we have foods, send them; otherwise, fall back to static data
    if (foods.length > 0) {
      return res.json({
        success: true,
        data: foods,
      });
    } else {
      // If MongoDB data is empty, fall back to static data
        console.log("MongoDB is empty, using fallback foodData.js");

        // Dynamically import foodData.js to use static data as fallback
      const { default: itemCard } = await import('../foodData.js'); // Extract the default export
      
      return res.json({
        success: true,
        data: itemCard,  // Static data from foodData.js
      });
    }
  } catch (error) {
    console.error("Error fetching food items:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch food items",
    });
  }
});

export default router;  // Default export
