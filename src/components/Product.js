import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import classes from "./Product.module.css";

const Product = (props) => {

  if (props.view == "grid")
    return (
      <div className={classes.wrapper}>
        <div className={classes.visual}>
          <img src={props.image} alt={props.name} />
          {/* Link to SingleProductPage */}
        </div>
        <footer>
          <h5>{props.name} </h5>
          <p>{formatPrice(props.price)} </p>
        </footer>
      </div>
    );

  if (props.view == "listing")
    return (
      <article className={classes.wrapperListing}>
        <img src={props.image} alt={props.name} />
        <div className={classes.infoListing} >
          <h4>{props.name}</h4>
          <h5 className={classes.priceListing} >{formatPrice(props.price)}</h5>
          <p>{props.description.substring(0, 150)}...</p>
{/*           <Link to={`/products/${id}`} className="btn">
            Details
          </Link> */}
        </div>
      </article>
    );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`;
export default Product;
