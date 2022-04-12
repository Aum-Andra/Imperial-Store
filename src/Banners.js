import React from "react";
import newCollection from "./img/newCollection.png";
import Sales from "./img/Sales.png";
import TrendySpring from "./img/trendySpring.png";

const Banners = () => {
  return (
    <section id="Banners">
      <div className="banner">
        <div className="image-container">
          <img src={newCollection} alt="" />
        </div>
        <div className="description">
          <h3>
            {" "}
            <span>New</span> Collection
          </h3>
        </div>
      </div>
      <div className="banner">
        <div className="image-container">
          <img src={Sales} alt="" />
        </div>
        <div className="description">
          <h3>
            Spring <span>Sales %</span>
          </h3>
        </div>
      </div>
      <div className="banner">
        <div className="image-container">
          <img src={TrendySpring} alt="" />
        </div>
        <div className="description">
          <h3>
            <span>Trendy</span> Spring
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Banners;
