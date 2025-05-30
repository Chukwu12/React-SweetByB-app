import Cart from '../models/cartModel.js';  

// Add item to cart
export const addItemToCart = async (req, res) => {
  const { userId, itemId, quantity } = req.body;

  try {
    // Check if the user already has a cart
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // Create a new cart if none exists
      cart = new Cart({ userId, items: [{ itemId, quantity }] });
    } else {
      // If the cart exists, add or update the item quantity
      const existingItem = cart.items.find(item => item.itemId.toString() === itemId);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.items.push({ itemId, quantity });
      }
    }

    await cart.save();
    res.json({ success: true, message: 'Item added to cart' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Remove item from cart
export const removeItemFromCart = async (req, res) => {
  const { userId, itemId } = req.body;

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }

    const itemIndex = cart.items.findIndex(item => item.itemId.toString() === itemId);
    if (itemIndex > -1) {
      cart.items.splice(itemIndex, 1);
      await cart.save();
      return res.json({ success: true, message: 'Item removed from cart' });
    }

    res.status(404).json({ success: false, message: 'Item not found in cart' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


//fetch user cart 
const getCart = async (req,res) => {

}

export {addToCart,removeFromCart,getCart}