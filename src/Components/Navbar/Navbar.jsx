import React, { useState, useContext, useRef } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import nav_dropdown from "../Assets/nav_dropdown.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import useScreenSize from "./useScreenSize";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const screenSize = useScreenSize();
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open')
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="shopper" />
        <p>SHOPPER</p>
        <p>{screenSize.width} by {screenSize.height}</p>
      </div>
      <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt=""/>
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => {setMenu("shop")}}>
          <Link to="/" style={{textDecoration: 'none'}} >Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => {setMenu("men")}}>
          <Link to="/men" style={{textDecoration: 'none'}}>Men</Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => {setMenu("women")}}>
          <Link to="/women" style={{textDecoration: 'none'}}>Women</Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => {setMenu("kids")}}>
          <Link to="/kids" style={{textDecoration: 'none'}}>Kids</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="shopping cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
