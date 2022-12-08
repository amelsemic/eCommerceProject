import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import classes from "./SingleProductPage.module.css";

import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const [productInfo, setProductInfo] = useState({});
  const [bigPicInd, setBigPicInd] = useState(0);
  const id = useParams().id;

  useEffect(() => {
    const fetchProducts = async () => {
      console.log(`${single_product_url}${id}`);
      let res = await fetch(`${single_product_url}${id}`);
      let data = await res.json();
      setProductInfo(data);
    };
    fetchProducts();
  }, [id]);

  const changeBigPicHandler = (e) => {
    console.log(e.target.dataset.index);
    setBigPicInd(e.target.dataset.index);
  };

  if (Object.keys(productInfo).length === 0) return <Loading />;
  return (
    <>
      <Link to={"/products"}>
        <button>Back to products</button>
      </Link>
      <div className={classes.wrapper}>
        {/*        <div className={classes.visual}> */}
        <div className={classes.pics}>
          <img src={productInfo.images[bigPicInd].url} alt="no pic" />
          <div className={classes.smallPics}>
            {productInfo.images.map((img, ind) => (
              <img
                src={img.url}
                data-index={ind}
                onClick={changeBigPicHandler}
              />
            ))}
          </div>
        </div>
        {/*         </div> */}
        <section className={classes.content}>
          <h2>{productInfo.name}</h2>
          <Stars stars={productInfo.stars} reviews={productInfo.reviews} />
          <h5 className={classes.price}> {formatPrice(productInfo.price)}</h5>
          <p className={classes.desc}> {productInfo.description}</p>
          <p className={classes.info}>
            <span>Available : </span>
            {productInfo.stock > 0 ? "In stock" : "out of stock"}
          </p>
          <p className={classes.info}>
            <span>SKU : </span>
            {productInfo.id}
          </p>
          <p className={classes.info}>
            <span>Brand : </span>
            {productInfo.company}
          </p>
          <hr />
          {productInfo.stock > 0 && <AddToCart product={productInfo} />}
        </section>
      </div>
    </>
  );
};

/* const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
` */

export default SingleProductPage;
