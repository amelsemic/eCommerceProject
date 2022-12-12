import { act } from 'react-dom/test-utils'
import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
if(action.type == ADD_TO_CART){

const updatedTotalAmount =
  state.total_amount + action.item.price * action.item.quantity;

const existingCartItemIndex = state.cart.findIndex(
  (item) => item.id === action.item.id
);
const existingCartItem = state.cart[existingCartItemIndex];
let updatedItems;
let updatedShipping=state.shipping_fee
let updatedTotalItems = state.total_items;

if (existingCartItem) {
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


return {
  ...state,
  cart: updatedItems,
  total_amount: updatedTotalAmount,
  shipping_fee: updatedShipping,
  total_items: updatedTotalItems
};

}

  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
