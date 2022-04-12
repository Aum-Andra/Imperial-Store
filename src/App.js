import "./App.css";
import { useState } from "react";
import DHP from "./img/Dior-HP.png";
import AGCotton from "./img/AG-CottonCandy.png";
import BO from "./img/blcakOpium-ysl.png";
import DMD from "./img/Dior-MD.png";
import GucciGuilty from "./img/Gucci-Guilty.png";
import MuglerAngel from "./img/Mugler-Angel.png";
import CocoM from "./img/cocoMademoiselle-channel.png";
import AAW from "./img/alien-agarwood.png";
import CMP from "./img/channel-misaParis.png";
import CN5 from "./img/channel-no5.png";
import CV from "./img/Channel-valentino.png";
import CNC from "./img/cocoNoir-channel.png";
import DGO from "./img/dolceGannama-theOne.png";
import FA from "./img/fahrenheitDior.png";
import FG from "./img/flora-gucci.png";
import MDC from "./img/missDiorCherie.png";
import MB from "./img/MyBurberry.png";
import PRO from "./img/pacoRabanne-olympea.png";
import VBC from "./img/versace-brightCrystal.png";
import MPD from "./img/midnightPoisonDior.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ProductDetails from "./ProductDetails";

function App() {
  const allProducts = [
    {
      image: DHP,
      name: "Hypnothic Poison",
      price: "100 $",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore perspiciatis aperiam a porro. Impedit quisquam vel modi sit nesciunt!",
      id: 1,
    },
    {
      image: AGCotton,
      name: "Cotton Candy",
      price: "100 $",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore perspiciatis aperiam a porro. Impedit quisquam vel modi sit nesciunt!",
      id: 2,
    },
    {
      image: BO,
      name: "Black Opium",
      price: "100 $",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore perspiciatis aperiam a porro. Impedit quisquam vel modi sit nesciunt!",
      id: 3,
    },
    {
      image: DMD,
      name: "Miss Dior",
      price: "100 $",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore perspiciatis aperiam a porro. Impedit quisquam vel modi sit nesciunt!",
      id: 4,
    },
    {
      image: GucciGuilty,
      name: "Gucci Guilty",
      price: "100 $",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore perspiciatis aperiam a porro. Impedit quisquam vel modi sit nesciunt!",
      id: 5,
    },
    {
      image: MuglerAngel,
      name: "Angel",
      price: "100 $",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore perspiciatis aperiam a porro. Impedit quisquam vel modi sit nesciunt!",
      id: 6,
    },
    {
      image: CocoM,
      name: "Coco Mademoiselle",
      price: "100 $",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore perspiciatis aperiam a porro. Impedit quisquam vel modi sit nesciunt!",
      id: 7,
    },
    {
      image: MDC,
      name: "Miss Dior Cherie",
      price: "100 $",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore perspiciatis aperiam a porro. Impedit quisquam vel modi sit nesciunt!",
      id: 8,
    },
    {
      image: AAW,
      name: "Agarwood",
      price: "100 $",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore perspiciatis aperiam a porro. Impedit quisquam vel modi sit nesciunt!",
      id: 9,
    },
    {
      image: CMP,
      name: "Miss Paris",
      price: "100 $",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore perspiciatis aperiam a porro. Impedit quisquam vel modi sit nesciunt!",
      id: 10,
    },
    {
      image: CN5,
      name: "Channel No 5",
      price: "100 $",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore perspiciatis aperiam a porro. Impedit quisquam vel modi sit nesciunt!",
      id: 11,
    },
    {
      image: CV,
      name: "Valentino",
      price: "100 $",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore perspiciatis aperiam a porro. Impedit quisquam vel modi sit nesciunt!",
      id: 12,
    },
    {
      image: CNC,
      name: "Coco Noir",
      price: "100 $",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore perspiciatis aperiam a porro. Impedit quisquam vel modi sit nesciunt!",
      id: 13,
    },
    {
      image: DGO,
      name: "The One",
      price: "100 $",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore perspiciatis aperiam a porro. Impedit quisquam vel modi sit nesciunt!",
      id: 14,
    },
    {
      image: FA,
      name: "Fahrenheit",
      price: "100 $",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore perspiciatis aperiam a porro. Impedit quisquam vel modi sit nesciunt!",
      id: 15,
    },
    {
      image: FG,
      name: "Flora",
      price: "100 $",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore perspiciatis aperiam a porro. Impedit quisquam vel modi sit nesciunt!",
      id: 16,
    },
    {
      image: MB,
      name: "My Burberry",
      price: "100 $",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore perspiciatis aperiam a porro. Impedit quisquam vel modi sit nesciunt!",
      id: 17,
    },
    {
      image: PRO,
      name: "Olympea",
      price: "100 $",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore perspiciatis aperiam a porro. Impedit quisquam vel modi sit nesciunt!",
      id: 18,
    },

    {
      image: VBC,
      name: "Bright Crystal",
      price: "100 $",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore perspiciatis aperiam a porro. Impedit quisquam vel modi sit nesciunt!",
      id: 19,
    },
    {
      image: MPD,
      name: "Midnight Poison",
      price: "100 $",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore perspiciatis aperiam a porro. Impedit quisquam vel modi sit nesciunt!",
      id: 20,
    },
  ];

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage allProducts={allProducts} />}
          />

          <Route
            exact
            path="/:productName"
            element={<ProductDetails allProducts={allProducts} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
