import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let prices = action.payload.map((p) => p.price);
    let max_price = Math.max(...prices);
    let min_price = Math.min(...prices);

    return {
      ...state,
      all_products: action.payload,
      filtered_products: action.payload,
      filters: { ...state.filters, max_price, min_price, price: max_price },
    };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === FILTER_PRODUCTS) {
    let filtered_products = state.all_products.filter((product) => {
      let searchInputFilter =
        product.name.includes(state.filters.text) || state.filters.text === "";
      let categoryFilter =
        product.category === state.filters.category ||
        state.filters.category === "all";

      let companyFilter =
        product.company === state.filters.company ||
        state.filters.company === "all";
      let colorsFilter =
        product.colors.includes(state.filters.color) ||
        state.filters.color === "all";
      let priceFilter = product.price <= state.filters.price;
      let shippingFilter = !state.filters.shipping || product?.shipping;

      return (
        searchInputFilter &&
        companyFilter &&
        priceFilter &&
        categoryFilter &&
        colorsFilter &&
        shippingFilter
      );
    });

    return { ...state, filtered_products };
  }
  if (action.type === SORT_PRODUCTS) {
    let filtered_products = state.filtered_products;
    if (action.payload === "price-lowest") {
      filtered_products.sort((a, b) => {
        if (a.price < b.price) return -1;
        else return 1;
      });
    }
    if (action.payload === "price-highest") {
      filtered_products.sort((a, b) => {
        if (a.price > b.price) return -1;
        else return 1;
      });
    }
    if (action.payload === "name-a"){
      filtered_products.sort((a, b) => {
        if (a.name < b.name) return -1;
        else return 1;
      });
    }
    if (action.payload === "name-z"){
      filtered_products.sort((a, b) => {
        if (a.name > b.name) return -1;
        else return 1;
      });
    }
    return { ...state, filtered_products, sort: action.payload };
  }

  return state;

};

export default filter_reducer;
