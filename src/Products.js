import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const Products = ({ allProducts }) => {
  return (
    <section id="Products">
      <h1>
        Our <span>Products</span>
      </h1>
      <div className="allProducts">
        {allProducts.map((product) => (
          <div className="product" key={product.id}>
            <Link to={`/${product.name}`}>
              <img src={product.image} alt="" />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button className="btn">View Product</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
