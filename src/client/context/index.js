import React, { useState } from 'react';
// import ProductDetail from '../pages/ProductDetail/index';
import { createContext } from 'react';
import * as _ from "lodash";

const CartContext = createContext();
const UserContext = createContext();

function ContextProvider({ children }) {
	const [cartList, setCartList] = useState([]);
	const [user, setUser] = useState({});
	const [logined, setLogined] = useState(false);

	const addToCart = (obj) => {
		if (!_.find(cartList, {obj})) {
            cartList.push({obj, quantity: 1})
        } else {
            //nếu đã thêm thì + thêm 1
            _.find(cartList, {obj}).quantity += 1
        }
	}

	const values = {
		cartList,
		setCartList,
		user,
		setUser,
        setLogined,
        logined,
		addToCart
	};

	return (
		<UserContext.Provider value={values}>
			<CartContext.Provider value={values}>{children}</CartContext.Provider>
		</UserContext.Provider>
	);
}

export { CartContext, UserContext, ContextProvider };
