import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import HeadHomePage from './client/css/homePagetest';
//import css from './client/css/homePage';
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import HomePageTest from "./client/pages/HomePageTest";
import ProductList from "./client/pages/ProductList";

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />}></Route>
        <Route path={"/san-pham"} element={<Product />}></Route>
      </Routes>
    </BrowserRouter> */}
    <BrowserRouter>
      {/*<HomePageTest />*/}
        <ProductList></ProductList>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
