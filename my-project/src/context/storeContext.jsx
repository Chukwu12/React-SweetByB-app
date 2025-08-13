import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    // State to hold products
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);

    // 🥘 Fetch food items from the backend
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://ideal-guide-pg5p57qpw55h67g-5000.app.github.dev/api/foods/list'); // Make sure to update with the correct URL

                if (response.data.success) {
                    setProducts(response.data.data); // Set the fetched data to state
                } else {
                    console.error("Failed to fetch products");
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    // ✅ Add to Cart with full item details
    const addToCart = (itemId) => {
        const product = products.find(p => p._id === itemId);
        if (!product) return; // Defensive check

        setCartItems(prev => {
            const existingItem = prev[itemId];
            return {
                ...prev,
                [itemId]: {
                    name: product.name,
                    minPrice: product.minPrice,
                    image: product.image,
                    quantity: existingItem ? existingItem.quantity + 1 : 1,
                }
            };
        });
    };



    // ✅ Remove from Cart (remove if quantity becomes 0)
    const removeFromCart = (itemId) => {
        setCartItems(prev => {
            const updated = { ...prev };
            if (!updated[itemId]) return prev;

            if (updated[itemId].quantity === 1) {
                delete updated[itemId];
            } else {
                updated[itemId].quantity -= 1;
            }

            return updated;
        });
    };

    // ✅ Clear cart
    const clearCart = () => {
        setCartItems({});
    };


    // ✅ Get total item count
    const getTotalCartCount = () => {
        return Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0);
    };

    // ✅ Get total cart price
    const getCartTotalPrice = () => {
        return Object.values(cartItems).reduce((total, item) => {
            return total + item.minPrice * item.quantity;
        }, 0);
    };


    useEffect(() => {

        console.log(cartItems);
    }, [cartItems])


    const contextValue = {
        // ✅ real data from MongoDB
        cartItems,
        products,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalCartCount,
        getCartTotalPrice,
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;