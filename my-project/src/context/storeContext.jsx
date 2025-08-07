import { createContext, useEffect, useState } from "react";
import  itemCard  from '../assets/Data';
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    // State to hold products
    // const [foodList, setFoodList] = useState([]); // ✅ use fetched food
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
        setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(()=> {
        
        console.log(cartItems);
    },[cartItems])

        // 🥘 Fetch food items from backend
//  useEffect(() => {
//   const fetchProducts = async () => {
//     try {
//         axios.get('/api/foods/food-data'); // Uses Vite proxy

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



    const contextValue = {
            // itemCard,// ✅ real data from MongoDB
            cartItems,
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