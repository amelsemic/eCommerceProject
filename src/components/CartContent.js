import React from 'react'
import CartItem from './CartItem'
import Modal from "./Modal"
import { CartContext } from '../context/cart_context'
import { OrdersContext } from '../context/orders_context'
import { useContext, useState } from 'react'
import classes from "./CartContent.module.css"
import { formatPrice } from '../utils/helpers'
import Checkout from './Checkout'


const CartContent = (props) => {
  let {total_amount, cart, addItemToCartHandler, removeItemFromCartHandler, clearCartHandler} = useContext (CartContext)
  const {updateOrders} = useContext(OrdersContext)
  const hasItems = cart.length > 0;
  const [isCheckout, setIsCheckOut] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartItemAddHandler = (item) => {
    addItemToCartHandler(item)
  };
  const cartItemRemoveHandler = (index) => {
    removeItemFromCartHandler(index)
  }
  const orderHandler = () => {
    setIsCheckOut(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);

    await fetch(
      "https://e-commerce-project-6f45b-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cart,
        }),
      }
    );
    setTimeout(updateOrders, 1000);
    setIsSubmitting(false);
    setDidSubmit(true);
    clearCartHandler();
 
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
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)} 
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button onClick={orderHandler} className={classes.button}>
          Order
        </button>
      )}
    </div>
  );


  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{formatPrice(total_amount)}</span>
      </div>
      {isCheckout && hasItems && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;
  const didSubmitModalContent = <p>Successfully sent the order! </p>;

  return <Modal onClose={props.onClose}>
    {!isSubmitting && !didSubmit && cartModalContent}
    {isSubmitting && isSubmittingModalContent}
    {!isSubmitting && didSubmit && didSubmitModalContent}
  </Modal> 
}

export default CartContent
