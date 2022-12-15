import React from "react";
import { formatPrice } from "../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import classes from "./Product.module.css";

const Product = (props) => {
  if (props.view === "grid")
    return (
      <div className={classes.wrapper}>
        <div className={classes.visual}>
          <img src={props.image} alt={props.name} />
            <Link to={`/products/${props.id}`}  className={classes.gridLink}>
              <FaSearch />
            </Link>
        </div>
        <footer>
          <h4>{props.name[0].toUpperCase() + props.name.substring(1) } </h4>
          <p>{formatPrice(props.price)} </p>
        </footer>
      </div>
    );

  if (props.view === "listing")
    return (
      <article className={classes.wrapperListing}>
        <img src={props.image} alt={props.name} />
        <div className={classes.infoListing}>
          <h4>{props.name[0].toUpperCase() + props.name.substring(1) }</h4>
          <h5 className={classes.priceListing}>{formatPrice(props.price)}</h5>
          <p>{props.description.substring(0, 150)}...</p>
          <Link to={`/products/${props.id}`} className={classes.link}>
            Details
          </Link>
        </div>
      </article>
    );
};

export default Product;
