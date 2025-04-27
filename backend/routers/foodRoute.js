import express from 'express';
import multer from 'multer';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';  // Named imports

// Images Storage Engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

// Create an express router
const router = express.Router();

// Routes
router.post("/add", upload.single("image"), addFood);
router.get("/list", listFood);
router.delete("/remove", removeFood);

export default router;  // Default export
