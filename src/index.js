import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter } from 'react-router-dom'
// import HeadHomePage from './client/css/homePagetest';
//import css from './client/css/homePage';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import HomePage from "./client/pages/homePage";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <HomePage/>

    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
