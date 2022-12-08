import React from 'react'
import classes from "./ListView.module.css"
/* import { products } from '../utils/helpers' */

import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import Product from './Product'
import Loading from './Loading'
import { ImSad2 } from "react-icons/im";
import { ProductsContext } from "../context/products_context"
import { FilterContext } from '../context/filter_context'
import { useContext } from "react"



const ListView = () => {

  const ctx = useContext(ProductsContext)
  const { products_loading} = useContext(ProductsContext)
  const {filtered_products} = useContext(FilterContext)

  if(products_loading) return <Loading />

  if(!products_loading && filtered_products?.length>0)
  return <div className={classes.productsContainer} >
  {filtered_products.map((product)=>{
    return <Product view="listing" key={product.id} {...product} />
  })}
</div>
 if(filtered_products?.length==0) return <h4 style={{"marginTop":"10rem"}} >No products matching your search <ImSad2 /> </h4>

}

/* const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  } 
`*/

export default ListView
