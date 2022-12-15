import React, { useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import { ADD_TO_CART, REMOVE_CART_ITEM, CLEAR_CART } from "../actions";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

export const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 0,
  new_order: false,
};

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItemToCartHandler = (item) => {
    const reducedItem = {
      id: item.id.length > 17 ? item.id : item.id + item.pickedColor,
      name: item.name,
      price: item.price,
      pickedColor: item.pickedColor,
      quantity: item.id.length > 17 ? 1 : item.quantity,
      category: item.category,
      company: item.company,
      image: item?.images ? item.images[0] : item.image,
      singleShippingFee: item.quantity.shipping ? 0 : 7,
      stock: item.stock,
    };
    dispatch({ type: ADD_TO_CART, item: reducedItem });
  };

  const removeItemFromCartHandler = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, id: id });
  };

  const clearCartHandler = () => {
    dispatch({ type: CLEAR_CART });
  };

  const ctxValue = {
    ...state,
    addItemToCartHandler,
    removeItemFromCartHandler,
    clearCartHandler,
  };
  return (
    <CartContext.Provider value={ctxValue}>
      {props.children}
    </CartContext.Provider>
  );
};
