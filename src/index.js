import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import HeadHomePage from './client/css/homePagetest';
//import css from './client/css/homePage';
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./client/context";
import HomePageTest from "./client/pages/HomePageTest";
import 'antd/dist/antd.css';
// import ProductList from "./client/pages/productList/ProductList"
ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <CartProvider>

        <HomePageTest />
      </CartProvider>
      {/*  <ProductList></ProductList>*/}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
