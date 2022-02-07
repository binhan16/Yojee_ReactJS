import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronRight } from "react-icons/fa";
import "./Navbar.css";
import { Dropdown } from "react-bootstrap";
// import Dropdown from './Dropdown'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //   const onMouseEnter = () => {
  //       if (window.innerWidth < 960) {
  //           setDropdown(false);
  //       } else {
  //           setDropdown(true);
  //       }
  //   };

  //   const onMouseLeave = () => {
  //     if (window.innerWidth < 960) {
  //         setDropdown(false);
  //     } else {
  //         setDropdown(false);
  //     }
  // };

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
            {/* <li className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
              <Link
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <Dropdown />
                <FaChevronRight className="nav-icon d-none" />
              </Link>
              <FaChevronRight className="nav-icon d-none" />
              {dropdown && <Dropdown/>}
            </li> */}

            <li className="nav-item">
              <Dropdown>
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  <Dropdown.Toggle>Our Software</Dropdown.Toggle>
                </Link>
                <FaChevronRight className="nav-icon d-none" />

                <Dropdown.Menu>
                  <Dropdown.Item href="/solvingchallenges">
                    Solving Challenges
                  </Dropdown.Item>
                  <Dropdown.Item href="/features">Features</Dropdown.Item>
                  <Dropdown.Item href="/pricing">Pricing</Dropdown.Item>
                  <Dropdown.Item href="#/api">API</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Industry
                <FaChevronRight className="nav-icon d-none" />
              </Link> 
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
          </ul>

          <ul className={click ? "nav-menu1 active" : "nav-menu1 "}>
            <li className="nav-item ">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
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
