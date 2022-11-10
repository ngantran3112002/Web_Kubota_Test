import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import HeadHomePage from './client/css/homePagetest';
//import css from './client/css/homePage';
import reportWebVitals from './reportWebVitals';

import Product from "./client/pages/product";
import HomePage from "./client/pages/homePage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<HomePage></HomePage>}></Route>
            <Route path={'/san-pham'} element={<Product></Product>}></Route>
        </Routes>
    </BrowserRouter>
      <HomePage/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
