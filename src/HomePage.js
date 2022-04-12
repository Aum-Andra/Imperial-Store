import React from "react";
import Banners from "./Banners";
import HeroBox from "./HeroBox";
import NavBar from "./NavBar";
import Products from "./Products";

import Footer from "./Footer";
import Logos from "./Logos";

const HomePage = ({ allProducts }) => {
  return (
    <section id="home">
      <NavBar />
      <HeroBox />
      <Banners />
      <Products allProducts={allProducts} />
      <Logos />
      <Footer />
    </section>
  );
};

export default HomePage;
