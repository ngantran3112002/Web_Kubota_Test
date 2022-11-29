import React, { useState } from "react";
import ProductDetail from "../pages/ProductDetail/index";
import { createContext } from "react";

const CartContext = createContext();
function CartProvider({ children }) {
    const [cartList, setCartList] = useState([])



    const values = {
        cartList, setCartList
    }

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider };