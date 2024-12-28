import React, { useEffect, useState } from "react";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [categories, setCategories] = useState([]);

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const handleCategory = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/categories");
      const result = await response.json();
      setCategories(result);
    } catch (err) {}
  };

  useEffect(() => {
    handleCategory();
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ position: "fixed" }}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand logo" href="/">
              <img src="shopping-cart.png" alt="" />
              Shopaholic's Haven
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/shop">
                  Shop
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu cat-down">
                  <li>
                    <a className="dropdown-item" href="/all-categoires">
                      All Categories
                    </a>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <a
                        className="dropdown-item"
                        href={`/category/${category.name}`}
                      >
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About-us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact-us
                </a>
              </li>
              <li className="nav-item position-relative abc">
                <a className="nav-link" href="/cart">
                  <FaShoppingCart />
                </a>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success badge">
                  {cart.length ? cart.length : "0"}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
