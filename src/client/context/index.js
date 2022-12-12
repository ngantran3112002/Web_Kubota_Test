import React, { useState } from 'react';
// import ProductDetail from '../pages/ProductDetail/index';
import { createContext } from 'react';
import * as _ from "lodash";

const Context = createContext();
// const UserContext = createContext();

function ContextProvider({ children }) {
	const [cartList, setCartList] = useState([]);
	const [user, setUser] = useState({});
	const [logined, setLogined] = useState(false);

	const addToCart = (obj, callback) => {
		const newCartList = [...cartList]
		if (!_.find(newCartList, {obj})) {
            newCartList.push({obj, quantity: 1})
			
        } else {
            //nếu đã thêm thì + thêm 1
            if (callback) {
				_.find(newCartList, {obj}).quantity += callback.quantity
			} else {
				_.find(newCartList, {obj}).quantity += 1

			}
        }
		setCartList(newCartList)
		console.log(cartList)
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
		<Context.Provider value={values}>
			{children}
		</Context.Provider>
	);
}

export { Context, ContextProvider };
