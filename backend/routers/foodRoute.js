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


export default router;  // Default export
