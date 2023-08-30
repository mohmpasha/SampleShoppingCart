import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Shopping Cart
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="navbar-brand" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand" to="/cart">
                  Cart ({cart.length})
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<h1>Welcome to the Home Page!</h1>} />
            <Route
              path="/products"
              element={<ProductList addToCart={addToCart} />}
            />
            <Route path="/cart" element={<ShoppingCart cart={cart} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
