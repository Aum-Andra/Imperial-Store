import React from "react";
import dgLogo from "./img/d&gLogo.png";
import ckLogo from "./img/ckLogo.png";
import dLogo from "./img/diorLogo.png";
import cLogo from "./img/channelLogo.png";
import gLogo from "./img/gucciLogo.png";
const Logos = () => {
  return (
    <section id="logos">
      <img src={dgLogo} alt="Dolce & Gabanna Logo" />
      <img src={ckLogo} alt="Calvin Klein Logo" />
      <img src={dLogo} alt="Dior Logo" />
      <img src={cLogo} alt="Channel Logo" />
      <img src={gLogo} alt="Gucci Logo" />
    </section>
  );
};

export default Logos;
