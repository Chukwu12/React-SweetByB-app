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
                const response = await axios.get('https://possessed-cape-6rx4xv74vr4hxvqj-5000.app.github.dev/api/foods/list');

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
    const addToCart = (itemId, flavor = "") => {
        const product = products.find(p => p._id === itemId);
        if (!product) return; // Defensive check

        // Use a combined key: productId + flavor
        const cartKey = `${itemId}-${flavor}`;

        setCartItems(prev => {
            const existingItem = prev[cartKey];
            const newQuantity = existingItem ? existingItem.quantity + 1 : 1;

            return {
                ...prev,
                [cartKey]: {
                    name: product.name,
                    minPrice: product.minPrice,
                    image: product.image,
                    quantity: newQuantity,
                    flavor,
                }
            };
        });
    };



    // ✅ Remove from Cart (remove if quantity becomes 0)
    const removeFromCart = (cartKey) => {
        setCartItems(prev => {
            const updated = { ...prev };
            if (!updated[cartKey]) return prev;

            if (updated[cartKey].quantity === 1) {
                delete updated[cartKey];
            } else {
                updated[cartKey].quantity -= 1;
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