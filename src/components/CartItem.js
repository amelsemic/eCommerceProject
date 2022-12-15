import React from 'react'
import classes from "./CartItem.module.css"
import { formatPrice } from '../utils/helpers'

const CartItem = (props) => {

  return (
    <li className={classes['cart-item']}>
      <img className={classes.img} src={props.img}  alt="cant load img" />
      <div>
        <h2>{props.name}</h2>
        <div className={classes.showColor} >
        <span>Color: </span> <div className={classes.pickedColor} style={{ "background": `${props.pickedColor}` }} /> 
        </div>
        <div className={classes.summary}>
          <span className={classes.price}>{formatPrice(props.price)}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem
