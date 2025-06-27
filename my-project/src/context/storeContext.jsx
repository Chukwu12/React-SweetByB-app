import { createContext, useEffect, useState } from "react";
import { itemCard } from '../assets/Data';
<<<<<<< HEAD
=======
import axios from 'axios';
>>>>>>> 3156c428f8d4226f624d5f481280bc318e54cf86

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
<<<<<<< HEAD

=======
    // State to hold products
>>>>>>> 3156c428f8d4226f624d5f481280bc318e54cf86
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
<<<<<<< HEAD
  //   useEffect(() => {
  //   const fetchFood = async () => {
  //     try {
  //    const response = await fetch("http://localhost:5000/api/foods/list");
  //       const data = await response.json();
  //       if (data.success) {
  //         setFoodList(data.data);
  //       } else {
  //         console.error("Failed to fetch food list");
  //       }
  //     } catch (err) {
  //       console.error("Error fetching food list:", err);
  //     }
  //   };

  //   fetchFood();
  // }, []);
=======
 useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://ideal-guide-pg5p57qpw55h67g-5000.app.github.dev/api/food/list");
      if (response.data.success) {
        setProducts(response.data.data);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  fetchProducts();
}, []);

>>>>>>> 3156c428f8d4226f624d5f481280bc318e54cf86


    const contextValue = {
            itemCard,// ✅ real data from MongoDB
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