import React from "react";
import classes from "./Navbar.module.css";
import logo from "../assets/logo2.png"
import {
  FaShoppingCart,
  FaShippingFast,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cart_context";
import { OrdersContext } from "../context/orders_context";
import { useContext, useState, useEffect } from "react";

const Nav = (props) => {
  const {cart} = useContext(CartContext)
  const {orders} = useContext(OrdersContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  useEffect(() => {
    if (cart.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cart]);

  return (
    <div className={classes.navBar}>
      <Link to="/">
        <img src={logo} alt="comfy sloth" />
      </Link>
      <span className={classes.title} >have a nice shopping!</span>
      <div className={classes.icons} >
        <div onClick={props.onShowCart} className={`${classes.icon} ${btnIsHighlighted ? classes.bump : ""} `}>
          <FaShoppingCart />
          <div className={classes.quantity}>{cart.length} </div>
        </div>
        <div onClick={props.onShowOrders} className={`${classes.icon} ${classes.shipping}`}>
        <FaShippingFast />
        <div className={classes.quantity}>{orders.length} </div>
        <span className={classes.shipInfo} >getting ready for shipment</span>
        </div>    
      </div>
    </div>
  );
};

export default Nav;
