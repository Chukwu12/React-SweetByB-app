import { createContext } from "react";
import { itemCard } from '../assets/Data';

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const contextValue = {
            itemCard
    }
    return (
        <StoreContext.Provider value = {contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;