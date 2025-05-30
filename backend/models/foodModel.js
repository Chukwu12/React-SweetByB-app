import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
});

// MongoDB Collection named here - will give lowercase plural of name
const FoodItem = mongoose.model("FoodItem", foodSchema);

export default FoodItem;  // Use `export default` for ESM syntax
