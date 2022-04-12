import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faCcPaypal } from "@fortawesome/free-brands-svg-icons";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="about">
        <h1>About</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          officia minima quos, numquam dolor id. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Reiciendis officia minima quos, numquam
          dolor id.
        </p>
        <div className="icons">
          <FontAwesomeIcon className="icon" icon={faCcVisa} />
          <FontAwesomeIcon className="icon" icon={faCcPaypal} />
          <FontAwesomeIcon className="icon" icon={faCcMastercard} />
          <FontAwesomeIcon className="icon" icon={faCreditCard} />
        </div>
        <div className="icon-pair">
          <FontAwesomeIcon className="lock-icon" icon={faLock} />
          <p>Secure online payment</p>
        </div>
      </div>

      <div className="informations">
        <h1>Informations</h1>
        <ul>
          <li>About us</li>
          <li>Contact us</li>
          <li>Term & Condtitions</li>
          <li>Return & Exchange</li>
          <li>Shipping & Delivery</li>
          <li>Private Policy</li>
        </ul>
      </div>
      <div className="contact">
        <h1>Contact</h1>
        <div className="adress">
          <FontAwesomeIcon icon={faLocationDot} />
          <p>Adress : XYZ,Craiova,Romania,Zip Code:200769</p>
        </div>
        <div className="phone-nr">
          <FontAwesomeIcon icon={faSquarePhone} />
          <p>Phone : 0760 123 888</p>
        </div>
        <div className="mail">
          <FontAwesomeIcon icon={faEnvelope} />
          <p>E-mail : imperialStore@yahoo.com</p>
        </div>
        <div className="social">
          <FontAwesomeIcon className="icon" icon={faFacebook} />
          <FontAwesomeIcon className="icon" icon={faInstagram} />
          <FontAwesomeIcon className="icon" icon={faTwitter} />
          <FontAwesomeIcon className="icon" icon={faYoutube} />
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
