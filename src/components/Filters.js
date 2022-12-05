import React from "react";
import classes from "./Filters.module.css";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";
import { FilterContext } from "../context/filter_context";
import { useContext } from "react";

const categories = [
  "office",
  "living room",
  "kitchen",
  "bedroom",
  "dining",
  "kids",
];
const companies = ["marcos", "liddy", "ikea"];
const colors = ["#ff0000","#00ff00","#0000ff"]



/* KASNIJE URADITI OVO
const categories = getUniqueValues(all_products, 'category')
const companies = getUniqueValues(all_products, 'company')
const colors = getUniqueValues(all_products, 'colors') */

const Filters = () => {
  const {
    updateFilters,
    clearFilters,
    filters: {
      text,
      company,
      category,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
  } = useContext(FilterContext);

  return (
    <div className={classes.filters}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div /* className={classes.form} */>
          <input
            type="text"
            name="text"
            placeholder="search"
            className="search-input"
            /* value={text} */
            onChange={updateFilters}
          />
        </div>

        <div className={classes.form}>
          <h5>category</h5>
          <div className={classes.category} >
            <button key="99" onClick={updateFilters} type="button" name="category">
              all
            </button>
            {categories.map((c, index) => {
              return (
                <button
                  key={index}
                  onClick={updateFilters}
                  type="button"
                  name="category"
                  /* className={`${
                    category === c.toLowerCase() ? "active" : null
                  }`} */
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        <div className={classes.form}>
          <h5>company</h5>
          <select
            name="company"
            value={company} 
            onChange={updateFilters}
            /* className="company" */
          >
            <option key="99" value={"all"}>
              all
            </option>
            {companies.map((c, index) => {
              return (
                <option key={index} value={c}>
                  {c}
                </option>
              );
            })}
          </select>
        </div>

        <div className={classes.form}>
          <h5>colors</h5>
          <div className={classes.colors}>
            <button name="color" data-value="all" className={classes.btnColorsAll} onClick={updateFilters} >All</button>
            {colors.map((c,index)=>{
            
              return <button onClick={updateFilters} className={classes.btnColors} data-value={c} key={index} name="color" style={{ "background": `${c}` }} >{color == c ? <FaCheck /> : null }  </button>
            
            })}
            {/* {colors.map((c, index) => {
              if (c === "all") {
                return (
                  <button
                    key={index}
                    name="color"
                    onClick={updateFilters}
                    data-color="all"
                    className={`${
                      color === "all" ? "all-btn active" : "all-btn"
                    }`}
                  >
                    all
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  name="color"
                  style={{ background: c }}
                  className={`${
                    color === c ? "color-btn active" : "color-btn"
                  }`}
                  data-color={c}
                  onClick={updateFilters}
                >
                  {color === c ? <FaCheck /> : null}
                </button>
              );
            })} */}
          </div>
        </div>

        <div className={classes.form}>
          <h5>price</h5>
          <p className="price">{formatPrice(price)} $</p>
          <input
            type="range"
            name="price"
            min={min_price}
            max={max_price}
            onChange={updateFilters}
            value={price} 
          />
        </div>
        <div className={`${classes.freeShipping} ${classes.form}`}>
          <label htmlFor="shipping"> free shipping</label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            onChange={updateFilters}
            checked={shipping} 
          />
        </div>
        <button type="button" /* className='clear-btn' */ onClick={clearFilters}>
          {" "}
          clear filters
        </button>
      </form>
    </div>
  );
};

export default Filters;
