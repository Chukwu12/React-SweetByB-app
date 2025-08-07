import express from 'express';
import upload from "../middleware/multer.js";
import { addFood, listFood, removeFood } from '../controllers/foodController.js';  // Named imports
import foodData from '../foodData.js'; 

//Create an express router
const router = express.Router();

// Routes
router.post("/add", upload.single("image"), addFood);
router.get("/list", listFood);
router.delete("/remove", removeFood);


// New route for fetching the food data
router.get('/food-data', (req, res) => {
  try {
    res.status(200).json(foodData);  // Send food data as JSON
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch food data', error: err.message });
  }
});

export default router;  // Default export
