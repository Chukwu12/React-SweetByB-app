import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  minPrice: { type: Number, required: true },  // Min price
  maxPrice: { type: Number, required: true },  // Max price
  image: { type: String, required: true },
  category: { type: String, required: true },
  flavors: [{ type: String }], //array for flavor strings
  addons: [{ type: String }] 
});

// MongoDB Collection named here - will give lowercase plural of name
const FoodItem = mongoose.model("FoodItem", foodSchema);

export default FoodItem;  // Use `export default` for ESM syntax
