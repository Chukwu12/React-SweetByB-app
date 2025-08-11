import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    // State to hold products
    const[cartItems, setCartItems] = useState ({});
    const [products, setProducts] = useState([]);
    
    const addToCart = (itemId) => {
        if(!cartItems[itemId]) {
            setCartItems(((prev)=>({...prev,[itemId]:1})))
        }
        else {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]-1}));
    }

    const getTotalCartCount = () => {
    return Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);
};


    useEffect(()=> {
        
        console.log(cartItems);
    },[cartItems])

        // 🥘 Fetch food items from backend
//  useEffect(() => {
//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/foods/food-data');
//       if (response.data.success) {
//         setProducts(response.data.data);
//       } else {
//         console.error("Failed to fetch products");
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   fetchProducts();
// }, []);

  // 👇 No API call — use static itemCard for now
  useEffect(() => {
    setProducts(itemCard);
}, []);

//       if (response.data.success) {
//         setProducts(response.data.data);
//       } else {
//         console.error("Failed to fetch products");
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   fetchProducts();
// }, []);
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


    const contextValue = {
            // ✅ real data from MongoDB
            cartItems,
            getTotalCartCount,
            products, 
            setCartItems,
            addToCart,
            removeFromCart
    }
    return (
        <StoreContext.Provider value = {contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;