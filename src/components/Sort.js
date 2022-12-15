import React, { useContext } from "react";
import { FilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";
import classes from "./Sort.module.css";

const Sort = () => {
  const {
    filtered_products,
    grid_view,
    setGridView,
    setListView,
    sortProducts,
  } = useContext(FilterContext);

  return (
    <div className={classes.sort}>
      <div className={classes.btnContainer}>
        <button
          type="button"
          className={`${grid_view ? classes.active : classes.inactive}`}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          type="button"
          className={`${!grid_view ? classes.active : classes.inactive}`}
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>
      <p> {filtered_products.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort">sort by</label>
        <select
          name="sort"
          id="sort"
          className="sortInput"
          onChange={sortProducts}
        >
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
        </select>
      </form>
    </div>
  );
};
export default Sort;
