import React from 'react'
import classes from "./ProductsPage.module.css"
import Filters from '../components/Filters'
import ProductList from '../components/ProductList'
import Sort from '../components/Sort'

const ProductsPage = () => {
  return <div className={classes.products}>
    <Filters />
    <div className={classes.productsList}>
      <Sort />
      <ProductList  />
    </div>
  </div>
}

export default ProductsPage