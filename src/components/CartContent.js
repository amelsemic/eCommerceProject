import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'
import Modal from "./Modal"
import { CartContext } from '../context/cart_context'
import { useContext } from 'react'
import classes from "./CartContent.module.css"
import { formatPrice } from '../utils/helpers'


const CartContent = (props) => {
  const {total_amount, cart, addItemToCartHandler} = useContext (CartContext)

  const cartItemAddHandler = (item) => {
    addItemToCartHandler(item)
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.quantity}
          price={item.price}
          img={item.image.url}
          pickedColor={item.pickedColor}
       /*    onRemove={cartItemRemoveHandler.bind(null, item.id)}*/
          onAdd={cartItemAddHandler.bind(null, item)} 
        />
      ))}
    </ul>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{formatPrice(total_amount)}</span>
      </div>
      {/* {isCheckout && hasItems && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions} */}
    </>
  );

  return <Modal onClose={props.onClose}>
    {cartModalContent}
  </Modal> 
}


/* const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
` */
export default CartContent
