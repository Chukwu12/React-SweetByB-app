import { createContext, useEffect, useState } from "react";
import { itemCard } from '../assets/Data';

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const[cartItems, setCartItems] = useState ({});
    const url = 'http:/localhost:4000';

    
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
        const response = await axios.get(url+"/api/")
    }

    useEffect(()=> {
        console.log(cartItems);
    },[cartItems])


    const contextValue = {
            itemCard,
            cartItems,
            setCartItems,
            addToCart,
            removeFromCart,
            url
    }
    return (
        <StoreContext.Provider value = {contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;