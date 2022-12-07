import React, { useState } from 'react';
import ProductDetail from '../pages/ProductDetail/index';
import { createContext } from 'react';

const CartContext = createContext();
const UserContext = createContext();

function ContextProvider({ children }) {
	const [cartList, setCartList] = useState([]);
	const [user, setUser] = useState({});
	const [logined, setLogined] = useState(false);

	const values = {
		cartList,
		setCartList,
		user,
		setUser,
	};

	return (
		<UserContext.Provider value={values}>
			<CartContext.Provider value={values}>{children}</CartContext.Provider>
		</UserContext.Provider>
	);
}

export { CartContext, UserContext, ContextProvider };
