import React from "react";
import classes from "./Navbar.module.css";
import logo from "../assets/logo.svg";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import {BsPlus} from "react-icons/bs"
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
import { CartContext } from "../context/cart_context";
import { useContext } from "react";

const Nav = (props) => {
  const ctxValue= useContext(CartContext)
  return (
    <div className={classes.navBar}>
      <Link to="/">
        <img src={logo} alt="comfy sloth" />
      </Link>
      <span>have a nice shopping!</span>
      <div onClick={props.onShowCart} className={classes.cart}>
        <FaShoppingCart /> 
        <div className={classes.quantity}>{ctxValue.cart.length} </div>
        {/* dodati animaciju kad se poveca broj u korpi */}
        </div>
    </div>
  );
};

export default Nav;
