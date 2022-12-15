
import React, { useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../actions'

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
}
export const ProductsContext = React.createContext()


const ProductsProvider = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchProducts = async () =>{

    dispatch({type: GET_PRODUCTS_BEGIN})
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({type: GET_PRODUCTS_SUCCESS, payload: data })
    } catch(err) {
      dispatch({type: GET_PRODUCTS_ERROR})
      console.error(err)
    }
  }

  useEffect(()=>{
    fetchProducts()
  }, [])


  return (
    <ProductsContext.Provider value={state}>
      {props.children}
    </ProductsContext.Provider>
  )
}
export default ProductsProvider; 

