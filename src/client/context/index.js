import React, { useState } from "react";
import ProductDetail from "../pages/ProductDetail/index";
import { createContext } from "react";

const CartContext = createContext();
const userContext = createContext({user: {}})
function ContextProvider({ children }) {
    const [cartList, setCartList] = useState([])
    const [user, setUser] = useState([]) 


    const values = {
        cartList, setCartList
    }

    return (
        <userContext.Provider>

        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
        </userContext.Provider>
    )
}

export { CartContext, userContext, ContextProvider };