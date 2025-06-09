import { createContext, useEffect, useState } from "react";
import { itemCard } from '../assets/Data';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    // const [foodList, setFoodList] = useState([]); // ✅ use fetched food
    const[cartItems, setCartItems] = useState ({});
    
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


    const contextValue = {
            itemCard,// ✅ real data from MongoDB
            cartItems,
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