import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import HeadHomePage from './client/css/homePagetest';
//import css from './client/css/homePage';
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./client/context";
import HomePageTest from "./client/pages/HomePageTest";
import 'antd/dist/antd.min.css';
// import productList from "./client/pages/productList/productList"
ReactDOM.render(
  // <React.StrictMode>

    <BrowserRouter>
      <ContextProvider>
        <HomePageTest />
      </ContextProvider>
    </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
