import React, { useState, useContext } from "react";
import classes from "./AddToCart.module.css";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { CartContext } from "../context/cart_context";

const AddToCart = (props) => {
  let colors = props.product.colors;
  const [pickedColor, setPickedColor] = useState(props.product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const ctxValue = useContext(CartContext);

  const chooseColorHandler = (e) => {
    setPickedColor(e.target.dataset.value);
  };

  const quantityHandler = (e) => {
    if (
      e.currentTarget.dataset.incr === "true" &&
      props.product.stock > quantity
    )
      setQuantity((prev) => prev + 1);
    else if (e.currentTarget.dataset.incr === "false") {
      if (quantity > 1) setQuantity((prev) => prev - 1);
    }
  };

  const addToCartHandler = () => {
    ctxValue.addItemToCartHandler({ ...props.product, quantity, pickedColor });
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.colors}>
        <span>Colors:</span>
        {colors.map((c, index) => {
          return (
            <button
              onClick={chooseColorHandler}
              className={classes.btnColors}
              data-value={c}
              key={index}
              name="color"
              style={{ background: `${c}` }}
            >
              {c === pickedColor ? <FaCheck /> : null}
            </button>
          );
        })}
      </div>
      <div className={classes.quantity}>
        <button onClick={quantityHandler} data-incr={false}>
          <span className={classes.btnSpan}>-</span>
        </button>
        <span className={classes.numSpan}> {quantity} </span>
        <button onClick={quantityHandler} data-incr={true}>
          <span className={classes.btnSpan}>+</span>
        </button>
        {quantity >= props.product.stock ? (
          <span className={classes.noMoreSpan}>No more in stock!</span>
        ) : null}
      </div>
      <Link onClick={addToCartHandler} className={classes.btn}>
        Add to Cart
      </Link>
    </div>
  );
};

export default AddToCart;
