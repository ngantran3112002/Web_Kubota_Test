import React from "react";
import ProductList from "./ProductList";
import { NavLink } from "react-router-dom";

const NavLinkRouter = () => {
  let activeStyle = {
    textDecoration: "underline",
  };
  let activeClassName = "underline";
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="./homePage.js"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            TRANG CHỦ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="ProductList"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            SẢN PHẨM
          </NavLink>
        </li>
        <li>
          <NavLink to="./homePage.js">
            {({ isActive }) => (
              <span className={isActive ? activeClassName : undefined}>
                GIỚI THIỆU
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="./homePage.js">
            {({ isActive }) => (
              <span className={isActive ? activeClassName : undefined}>
                KỸ THUẬT
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="./admin"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            ADMIN
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinkRouter;
