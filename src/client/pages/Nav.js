import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
  },
}));
const Nav = () => {
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
        to="/products?page=1"
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
    </>
  );
};

export default Nav;
