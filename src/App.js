import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import classes from "./App.module.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import ErrorPage from "./pages/ErrorPage";
import CartContent from "./components/CartContent";

function App() {
  const [showCart, setShowCart] = useState(false)

  const hideCartHandler = () =>{
    setShowCart(false)
  }
  const showCartHandler = () =>{
    setShowCart(true)
  }

  return (
    <div className={classes.app}>
      <Navbar onShowCart={showCartHandler} />
      {showCart && <CartContent onClose={hideCartHandler} />}

      {/* <Sidebar />  */}
      <Switch>
        <Route exact path="/">
          <ProductsPage />
        </Route>
        <Route exact path="/products/:id">
          <SingleProductPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>

        {/*         <Route path="/about">
          <AboutPage />
        </Route> */}
        {/*         <Route path="/cart">
          <CartPage />
        </Route> */}
        {/*         <Route exact path="/products">
          <ProductsPage />
        </Route> */}

        {/*         <Route path="/checkout">
          <CheckoutPage />
        </Route> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
