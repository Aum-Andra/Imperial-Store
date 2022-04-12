import React from "react";
import logo from "./img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const NavBar = () => {
  const [searchField, setSearchField] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleSearchField = () => {
    setSearchField(true);
  };
  return (
    <nav>
      <div className="mobileNav">
        <div className="itemsNav">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" height="80px" />
            </Link>
          </div>
          <div className="search">
            {searchField === false ? (
              <div className="icons">
                <FontAwesomeIcon
                  className="icon"
                  onClick={handleSearchField}
                  icon={faMagnifyingGlass}
                />
              </div>
            ) : (
              <div className="form-icons">
                <form>
                  <FontAwesomeIcon
                    className="closeBtnSF"
                    onClick={() => setSearchField(false)}
                    icon={faXmark}
                  />
                  <input type="text" placeholder="Search for a perfume" />
                  <button className="btn">Search</button>
                </form>
              </div>
            )}
            <FontAwesomeIcon className="icon" icon={faUser} />

            <FontAwesomeIcon className="icon" icon={faBagShopping} />
          </div>

          {menu === false ? (
            <FontAwesomeIcon
              className="menu"
              onClick={() => setMenu(true)}
              icon={faBars}
            />
          ) : (
            <div className="products-mobile">
              <FontAwesomeIcon
                className="closeBtn"
                onClick={() => setMenu(false)}
                icon={faXmark}
              />
              <Link to="/">
                <h1>Home</h1>
              </Link>

              <a href="#Products">
                <h1>All Products</h1>
              </a>
              <a href="#footer">
                <h1>Contact</h1>
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="wideScreenView">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" height="80px" />
            mperial
          </Link>
        </div>
        <div className="products">
          <Link to="/">
            <h1>Home</h1>
          </Link>

          <a href="#Products">
            <h1>All Products</h1>
          </a>
          <a href="#footer">
            <h1>Contact</h1>
          </a>
        </div>
        <div className="search">
          {searchField === false ? (
            <div className="icons">
              <FontAwesomeIcon
                className="icon"
                onClick={handleSearchField}
                icon={faMagnifyingGlass}
              />
            </div>
          ) : (
            <div className="form-icons">
              <form>
                <FontAwesomeIcon
                  className="closeBtn"
                  onClick={() => setSearchField(false)}
                  icon={faXmark}
                />
                <input type="text" placeholder="Search for a perfume" />
                <button className="btn">Search</button>
              </form>
            </div>
          )}
          <FontAwesomeIcon className="icon" icon={faUser} />
          <FontAwesomeIcon className="icon" icon={faBagShopping} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
