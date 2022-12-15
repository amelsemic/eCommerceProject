import React from 'react'
import classes from "./ListView.module.css"
import Product from './Product'
import Loading from './Loading'
import { ImSad2 } from "react-icons/im";
import { ProductsContext } from "../context/products_context"
import { FilterContext } from '../context/filter_context'
import { useContext } from "react"



const ListView = () => {

  const { products_loading} = useContext(ProductsContext)
  const {filtered_products} = useContext(FilterContext)

  if(products_loading) return <Loading />

  if(!products_loading && filtered_products?.length>0)
  return <div className={classes.productsContainer} >
  {filtered_products.map((product)=>{
    return <Product view="listing" key={product.id} {...product} />
  })}
</div>
 if(filtered_products?.length===0) return <h4 style={{"marginTop":"10rem"}} >No products matching your search <ImSad2 /> </h4>

}


export default ListView
