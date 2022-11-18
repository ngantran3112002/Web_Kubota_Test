import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        TRANG CHỦ
      </NavLink>

      <NavLink
        to="/products?page=1" params
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        SẢN PHẨM
      </NavLink>

      <NavLink to="/introduction">
        {({ isActive }) => (
          <span className={isActive ? activeClassName : undefined}>
            GIỚI THIỆU
          </span>
        )}
      </NavLink>
    </>
  );
};

export default Nav;
