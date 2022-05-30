import React from "react";
import DHP from "./img/Dior-HP.png";
import AGCotton from "./img/AG-CottonCandy.png";
import BO from "./img/blcakOpium-ysl.png";
import DMD from "./img/Dior-MD.png";
import GucciGuilty from "./img/Gucci-Guilty.png";
import MuglerAngel from "./img/Mugler-Angel.png";
import GucciB from "./img/cocoMademoiselle-channel.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const HeroBox = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  const heroboxProducts = [
    {
      title: "Dior Hypnothic Poison",
      image: DHP,
      id: 1,
    },
    {
      title: "Cotton Candy",
      image: AGCotton,
      id: 2,
    },
    {
      title: "Gucci Guilty",
      image: GucciGuilty,
      id: 3,
    },
    {
      title: "Miss Dior",
      image: DMD,
      id: 4,
    },
    {
      title: "Black Opium",
      image: BO,
      id: 5,
    },
    {
      title: "Coco Mademoiselle",
      image: GucciB,
      id: 6,
    },
    {
      title: "Mugler - Angel",
      image: MuglerAngel,
      id: 7,
    },
  ];

  const handleChangeRight = () => {
    if (currentProduct > heroboxProducts.length - 2 || currentProduct === -2) {
      setCurrentProduct(0);
    } else {
      setCurrentProduct(currentProduct + 1);
    }
  };

  const handleChangeLeft = () => {
    if (currentProduct > heroboxProducts.length - 2 || currentProduct === -0) {
      setCurrentProduct(0);
    } else {
      setCurrentProduct(currentProduct - 1);
    }
  };
  return (
    <section id="herobox">
      <div className="content">
        <div className="info">
          <div className="arrow-buttons">
            <button onClick={handleChangeLeft}>
              <FontAwesomeIcon className="  arrow-left" icon={faArrowLeft} />
            </button>
            <button onClick={handleChangeRight}>
              <FontAwesomeIcon className=" arrow-right" icon={faArrowRight} />
            </button>
          </div>
          <div className="info-description">
            <h1>{heroboxProducts[currentProduct].title}</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
              dolore illo hic repellendus rerum accusamus doloremque fugit
              laboriosam consectetur sit!
            </p>
          </div>
        </div>
        <div className="hero-photo">
          <img src={heroboxProducts[currentProduct].image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroBox;
