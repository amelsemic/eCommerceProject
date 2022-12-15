import React from "react";
import classes from "./Filters.module.css";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";
import { FilterContext } from "../context/filter_context";
import { useContext } from "react";

const Filters = () => {
  const {
    all_products,
    updateFilters,
    clearFilters,
    filters: {
      company,
      category,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
  } = useContext(FilterContext);

  const categories = getUniqueValues(all_products, 'category')
  const companies = getUniqueValues(all_products, 'company')
  const colors = getUniqueValues(all_products, 'colors')

  return (
    <div className={classes.filters}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            name="text"
            placeholder="search"
            className="search-input"
            onChange={updateFilters}
          />
        </div>

        <div className={classes.form}>
          <h3>category</h3>
          <div className={classes.category} >
            <button key="99" onClick={updateFilters} type="button" name="category" className={`${
                    category === "all" ? classes.active : null
                  }`} >
              all
            </button>
            {categories.map((c, index) => {
              return (
                <button
                  key={index}
                  onClick={updateFilters}
                  type="button"
                  name="category"
                  className={`${
                    category === c.toLowerCase() ? classes.active : null
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        <div className={classes.form}>
          <h3>company</h3>
          <select
            name="company"
            value={company} 
            onChange={updateFilters}
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
          <h3>colors</h3>
          <div className={classes.colors}>
            <button name="color" data-value="all" className={classes.btnColorsAll} onClick={updateFilters} >All</button>
            {colors.map((c,index)=>{
              return <button onClick={updateFilters} className={classes.btnColors} data-value={c} key={index} name="color" style={{ "background": `${c}` }} >{color === c ? <FaCheck /> : null }  </button>
            })}
          </div>
        </div>

        <div className={classes.form}>
          <h3>price</h3>
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
        <button type="button" className={classes.clearBtn}  onClick={clearFilters}>
          clear filters
        </button>
      </form>
    </div>
  );
};

export default Filters;
