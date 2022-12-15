import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import classes from "./App.module.css";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import ErrorPage from "./pages/ErrorPage";
import CartContent from "./components/CartContent";
import Orders from "./components/Orders";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showOrders, setShowOrders] = useState(false);

  const hideCartHandler = () => {
    setShowCart(false);
  };
  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideOrdersHandler = () => {
    setShowOrders(false);
  };
  const showOrdersHandler = () => {
    setShowOrders(true);
  };

  return (
    <div className={classes.app}>
      <Navbar onShowCart={showCartHandler} onShowOrders={showOrdersHandler} />
      {showCart && <CartContent onClose={hideCartHandler} />}
      {showOrders && <Orders onClose={hideOrdersHandler} />}
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
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
