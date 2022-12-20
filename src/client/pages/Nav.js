import React, { useContext } from "react";

import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Context } from "../context";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
  },
}));
const Nav = () => {
  const context = useContext(Context)

  const classes = useStyles();
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={classes.link}
      >
        TRANG CHỦ
      </NavLink>

      <NavLink
        to="/products"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={classes.link}
      >
        SẢN PHẨM
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={classes.link}
      >
        GIỚI THIỆU
      </NavLink>

      <NavLink
        to="/machine"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={classes.link}
      >
        KỸ THUẬT MÁY
      </NavLink>
      {
        context.user.userInfo && context.user.userInfo.isAdmin === false? 
          <NavLink
            to="admin/orders"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={classes.link}
          >
            ADMIN
          </NavLink>
          :
          <></>
      }
    </>
  );
};

export default Nav;
