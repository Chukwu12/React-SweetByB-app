import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true },  // assuming you track by userId
  items: [
    {
      itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true },
      quantity: { type: Number, required: true, min: 1 }
    }
  ]
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
