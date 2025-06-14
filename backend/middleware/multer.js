// backend/middleware/multer.js
import multer from "multer";
import path from "path";

// Configure multer storage (optional, you can keep this empty if uploading to Cloudinary)
const storage = multer.diskStorage({}); // or customize if needed

// File filter
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) {
    cb(new Error("Only images are allowed (.jpg, .jpeg, .png, .webp)"), false);
    return;
  }
  cb(null, true);
};

const upload = multer({ storage, fileFilter });

export default upload; // ✅ ESM default export
