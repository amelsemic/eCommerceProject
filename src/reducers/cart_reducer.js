import { act } from 'react-dom/test-utils'
import { initialState } from '../context/cart_context';

import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {

if(action.type == ADD_TO_CART){

const existingCartItemIndex = state.cart.findIndex(
  (item) => item.id === action.item.id
);
const existingCartItem = state.cart[existingCartItemIndex];

let updatedItems;
let updatedShipping=state.shipping_fee
let updatedTotalItems = state.total_items;

if (existingCartItem) {

  if(action.item.quantity + existingCartItem.quantity > existingCartItem.stock) {
    console.log("jedanput")
    alert("There is not that much in the stock!")
    return {...state}
  }

  const updatedItem = {
    ...existingCartItem,
    quantity: existingCartItem.quantity + action.item.quantity,
  };
  updatedItems = [...state.cart];
  updatedItems[existingCartItemIndex] = updatedItem;
} else {
  updatedItems = state.cart.concat(action.item);
  updatedShipping = state.shipping_fee + action.item.singleShippingFee;
  updatedTotalItems++;
}


const updatedTotalAmount =
state.total_amount + action.item.price * action.item.quantity;

return {
  ...state,
  cart: updatedItems,
  total_amount: updatedTotalAmount,
  shipping_fee: updatedShipping,
  total_items: updatedTotalItems
};

}
if(action.type == REMOVE_CART_ITEM) {

  
  const existingCartItemIndex = state.cart.findIndex(
    (item) => item.id === action.id
  );
  const existingItem = state.cart[existingCartItemIndex];
  const updatedTotalAmount = state.total_amount - existingItem.price;
  let updatedCart;
  if (existingItem.quantity === 1) {
    updatedCart = state.cart.filter((item) => item.id !== action.id);
  } else {
    const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
    updatedCart = [...state.cart];
    updatedCart[existingCartItemIndex] = updatedItem;
  }

  return {
    cart: updatedCart,
    total_amount: updatedTotalAmount,
  };

}
if(action.type == CLEAR_CART) {
  return initialState;
}

  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
