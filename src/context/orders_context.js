import React, { useEffect, useReducer } from "react";

function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");

  for (var i = 0; i < splitStr.length; i++) {
    if (splitStr.length[i] < splitStr.length) {
      splitStr[i].charAt(0).toUpperCase();
    }

    str = splitStr.join(" ");
  }

  return str;
}

const initialState = {
  orders: [],
  reports: [],
  new_order: false,
};

export const OrdersContext = React.createContext();

const reducerFn = (state, action) => {
  if (action.type === "setOrders") {
    return { ...state, orders: action.payload, new_order: false };
  }
  if (action.type === "makeReports") {
    let ordersReport = [];
    for (const order of state.orders) {
      let orderReport = "\n\n" + order.user.name + " ordered ";

      for (const item of order.orderedItems) {
        if (
          item !== order.orderedItems[0] &&
          item !== order.orderedItems[order.orderedItems.length - 1]
        ) {
          orderReport += ", ";
        }
        if (
          item === order.orderedItems[order.orderedItems.length - 1] &&
          item !== order.orderedItems[0]
        ) {
          orderReport += " and ";
        }
        if (item.quantity !== 1) {
          orderReport += item.quantity + "x ";
        }
        orderReport += titleCase(item.name);
        orderReport += " in `" + item.pickedColor + "` color";
      }

      orderReport +=
        ".\n Adress: " +
        order.user.street +
        ", " +
        order.user.postalCode +
        " " +
        order.user.city;

      ordersReport.push(orderReport);
    }
    return { ...state, reports: ordersReport };
  }
  if (action.type === "updateOrders") {
    return { ...state, new_order: true };
  }
};

export const OrdersProvider = (props) => {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          "https://e-commerce-project-6f45b-default-rtdb.firebaseio.com/orders.json"
        );
        if (!response.ok) {
          throw new Error("Something went wrong....");
        }
        const responseData = await response.json();
        const loadedOrders = [];
        for (const key in responseData) {
          loadedOrders.push({
            id: key,
            orderedItems: responseData[key].orderedItems,
            user: responseData[key].user,
          });
        }
        dispatch({ type: "setOrders", payload: loadedOrders });
      } catch (err) {
        console.err(err);
      }
    };
    fetchOrders();
  }, [state.new_order]);

  useEffect(() => {
    dispatch({ type: "makeReports" });
  }, [state.orders.length]);

  const updateOrders = () => {
    dispatch({ type: "updateOrders" });
  };

  const ctxValue = {
    ...state,
    updateOrders,
  };

  return (
    <OrdersContext.Provider value={ctxValue}>
      {props.children}
    </OrdersContext.Provider>
  );
};
