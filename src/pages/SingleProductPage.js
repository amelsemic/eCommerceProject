import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { single_product_url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import classes from "./SingleProductPage.module.css";
import ErrorPage from "./ErrorPage";
import Stars from "../components/Stars";
import AddToCart from "../components/AddToCart";
import Loading from "../components/Loading";


const SingleProductPage = () => {
  const [productInfo, setProductInfo] = useState({});
  const [bigPicInd, setBigPicInd] = useState(0);
  const [error, setError] = useState(false);

  const id = useParams().id;

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        let res = await fetch(`${single_product_url}${id}`);
        if (!res.ok) setError(true);
        let data = await res.json();
        setProductInfo(data);
      };
      fetchProducts();
    } catch (err) {
      console.error("no product");
    }
  }, [id]);

  const changeBigPicHandler = (e) => {
    setBigPicInd(e.target.dataset.index);
  };
if(error) return <ErrorPage />
  if (Object.keys(productInfo).length === 0 && !error) return <Loading />;
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.pics}>
          <img src={productInfo.images[bigPicInd].url} alt="no pic" />
          <div className={classes.smallPics}>
            {productInfo.images.map((img, ind) => (
              <img
              alt="noImg"
                src={img.url}
                data-index={ind}
                onClick={changeBigPicHandler}
              />
            ))}
          </div>
        </div>
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

export default SingleProductPage;
