import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
import { ProductsContext } from "./products_context";

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

export const FilterContext = React.createContext();

export const FilterProvider = (props) => {
  const {products} = useContext(ProductsContext);
  const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(()=>{
    dispatch({type: FILTER_PRODUCTS})
  }, [products, state.filters])

  const updateFilters = (e) => {
    let name = e.target.name;
    let value;
    if(name === "text"){
      value=e.target.value;
    }
    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "company") {
      value = e.target.value;
    }
    if (name === "color") {
      value = e.target.dataset.value;
    }
    if (name === "price") {
      value = Number(e.target.value);
    }
    if (name === "shipping") {
      value = e.target.checked;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  const clearFilters = () =>{
    dispatch({type: CLEAR_FILTERS})
  }
  const setGridView = () => {
    dispatch({type: SET_GRIDVIEW})
  }
  const setListView = () =>{
    dispatch({type: SET_LISTVIEW})
  }
const sortProducts = (e) =>{
  console.log(e.target.value)
  dispatch({type: SORT_PRODUCTS, payload: e.target.value})
}

  return (
    <FilterContext.Provider value={{ ...state, updateFilters, clearFilters,  setGridView, setListView, sortProducts }}>
      {props.children}
    </FilterContext.Provider>
  );
};
