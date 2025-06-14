import Cart from '../models/cartModel.js';  

// Add item to cart
export const addItemToCart = async (req, res) => {
  const {  itemId, quantity = 1  } = req.body;
  const userId = req.sessionID; // 👈 unique session-based ID


  try {
    // Check if the user already has a cart
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // Create a new cart if none exists
      cart = new Cart({ userId, items: [] });
    } 
    
      // If the cart exists, add or update the item quantity
      const existingItem = cart.items.find(item => item.itemId.toString() === itemId);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.items.push({ itemId, quantity });
      }
    

    await cart.save();
    res.json({ success: true, message: 'Item added to cart' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Remove item from cart
export const removeItemFromCart = async (req, res) => {
  const { itemId } = req.body; // no more userId from body
  const userId = req.sessionID; // get session ID

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }

    const itemIndex = cart.items.findIndex(item => item.itemId.toString() === itemId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity -= 1;

      if (cart.items[itemIndex].quantity <= 0) {
        cart.items.splice(itemIndex, 1);
      }
      
      await cart.save();
      res.status(200).json({ message: 'Item removed', cart });
    } else {
      res.status(404).json({ message: 'Item not in cart' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to remove item', error: error.message });
  }
};

export const getCart = async (req, res) => {
  const userId = req.sessionID;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.json({ items: [] });

    res.json({ items: cart.items });
  } catch (error) {
    res.status(500).json({ message: 'Failed to get cart', error: error.message });
  }
};

