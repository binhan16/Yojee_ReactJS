import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronRight } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <div className="navbar-main ">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="./image/Logo.png" alt="logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/oursoftware"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Our Software
              </Link>
              <FaChevronRight className="nav-icon d-none" />
              <ul>
                  <li>API</li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                to="/industry"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Industry
              </Link>
              <FaChevronRight className="nav-icon d-none" />
            </li>
            <li className="nav-item">
              <Link
                to="/resources"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
          </ul>

          <ul className={click ? "nav-menu1 active" : "nav-menu1 "}>
            <li className="nav-item ">
              <Link
                to="/oursoftware"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                to="/industry"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Send SG
              </Link>
            </li>
            <div className="nav-btn ">
              {button ? (
                <Link to="/sign-up">
                  <button className="btn-demo">DEMO</button>
                </Link>
              ) : (
                <Link to="/sign-up" onClick={closeMobileMenu}>
                  <button className="btn-demo">DEMO</button>
                </Link>
              )}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
