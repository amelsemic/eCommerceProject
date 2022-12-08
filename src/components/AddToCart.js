import React, { useState } from "react";
import classes from "./AddToCart.module.css";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";

const AddToCart = (props) => {
  let colors = props.product.colors;
  const [pickedColor, setPickedColor] = useState(props.product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  const chooseColorHandler = (e) => {
    setPickedColor(e.target.dataset.value);
  };

  let quantityHandler = (e) => {
   /* USLOV DA NE BUDE KOLICINA MANJA OD NULE */

    if(e.currentTarget.dataset.incr == "true") setQuantity(prev => prev+1)
    else setQuantity(prev => prev-1)
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
              {c == pickedColor ? <FaCheck /> : null}
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
      </div>
    </div>
  );
};
/* 
const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`; */
export default AddToCart;
