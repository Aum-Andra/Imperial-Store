import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ProductDetails = ({ allProducts }) => {
  const { productName } = useParams();
  const thisProduct = allProducts.find((prod) => productName == prod.name);
  const [quantity, setQuantity] = useState(1);

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleSubtractQuantity = () => {
    setQuantity(quantity - 1);
    if (quantity === 1) {
      setQuantity(1);
    }
  };

  return (
    <section id="product-details">
      <NavBar />
      <div className="product-details">
        <div className="product-photo">
          <img className="prod-img" src={thisProduct.image} alt="" />
        </div>
        <div className="product-description">
          <h1 className="prod-name">{thisProduct.name}</h1>
          <div className="ratings">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalf} />
            <p>(59) reviews</p>
          </div>

          <h3 className="description">{thisProduct.description}</h3>

          <h1 className="price">{thisProduct.price}</h1>
          <div className="size">
            <p>Select Size</p>
            <div className="options">
              <h3 className="option">30ml</h3>
              <h3 className="option">60ml</h3>
              <h3 className="option">80ml</h3>
            </div>
            <div className="quantity">
              <button onClick={handleSubtractQuantity}>-</button>
              <p>{quantity}</p>
              <button onClick={handleAddQuantity}>+</button>
            </div>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ProductDetails;
