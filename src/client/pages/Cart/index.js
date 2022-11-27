// import React from "react";
// import ProductDetail from "../ProductDetail";
//
// export const CartContext = React.createContext();
//
// export class CartProvider extends ProductDetail {
//     constructor(props) {
//         super(props);
//         this.state = {
//             cartItems: []
//         };
//         this.addToCart = this.addToCart().bind(this);
//     }
//
//     addToCart(ProductDetail) {
//         console.log("Adding to cart", ProductDetail);
//         this.setState({
//             cartItems: this.state.cartItems.concat(ProductDetail)
//         })
//     }
//
//     render() {
//         return <CartContext.Provider value={{
//             cartItems: this.state.cartItems,
//             addToCart: this.addToCart
//         }}>
//             {this.props.children}
//         </CartContext.Provider>
//     }
// }