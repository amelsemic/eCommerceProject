import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 0,
};

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  /*   useEffect(()=>{}, state.cart) */

  const addItemToCartHandler = (item) => {
    const reducedItem = {
      id: item.id.length >17 ? item.id : item.id+item.pickedColor,
      name: item.name,
      price: item.price,
      pickedColor: item.pickedColor,
      quantity: item.id.length >17 ? 1 : item.quantity,
      category: item.category,
      company: item.company,
      image: item?.images ? item.images[0] : item.image ,
      singleShippingFee: item.quantity.shipping ? 0 : 7,
      stock: item.stock
    };
    console.log(state);
    dispatch({ type: ADD_TO_CART, item: reducedItem });
  };

  const removeItemFromCartHandler = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, id: id });
  };

  const ctxValue = {
    ...state,
    addItemToCartHandler,
    removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={ctxValue}>
      {props.children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
