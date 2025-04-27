import { createContext, useEffect, useState } from "react";
import { itemCard } from '../assets/Data';
// import axios from 'axios';


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const[cartItems, setCartItems] = useState ({});
    const url = 'http://localhost:4000';

    
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

    const fetchFoodList = async () => {
        try {
            const response = await axios.get(url + "/api/food/list"); 
            console.log(response.data); // you get { success: true, data: [foods] }
        } catch (error) {
            console.error("Failed to fetch food list:", error);
        }
    };

    useEffect(()=> {
        console.log(cartItems);
    },[cartItems])


    const contextValue = {
            itemCard,
            cartItems,
            setCartItems,
            addToCart,
            removeFromCart,
            fetchFoodList,
            url
    }
    return (
        <StoreContext.Provider value = {contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;