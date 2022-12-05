import React from "react";
import { FilterContext } from "../context/filter_context";
import { useContext } from "react";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = (props) => {
  const { grid_view } = useContext(FilterContext);

  if (grid_view) return <GridView />;

  if (!grid_view) {
    return <ListView />;
  }
};

export default ProductList;
