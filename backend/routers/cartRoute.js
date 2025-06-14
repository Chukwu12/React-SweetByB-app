import express from 'express';
const router = express.Router();
import { addItemToCart, removeItemFromCart, getCart } from '../controllers/cartController.js';
import Cart from '../models/cartModel.js'; // <-- if you're using this model directly

// Routes
router.post('/add', addItemToCart);       // POST /api/cart/add
router.post('/remove', removeItemFromCart); // POST /api/cart/remove

router.get('/', async (req, res) => {
    const userId = req.sessionID;
    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.json({ items: [] });
        }
        res.json({ items: cart.items });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router; 
