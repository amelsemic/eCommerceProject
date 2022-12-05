import React from 'react'
import classes from "./ProductsPage.module.css"
import { Filters, ProductList, Sort, PageHero } from '../components'

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
