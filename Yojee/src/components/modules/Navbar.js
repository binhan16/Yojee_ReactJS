import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronRight } from "react-icons/fa";
import Dropdown from './Dropdown'
// import Submenu from './Submenu'
import "../../style/Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  // const handleOpenSubMenu=()=>{
  //   if(!<Dropdown/>){
  //     setClick()
  //   }
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
            <li className="nav-item">
              <Link
                className="nav-links"
                to="/oursoftware"
              >
                <Dropdown />
                <FaChevronRight className="nav-icon d-none" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-links"
                to="/industry"
              >
                Industry
                <FaChevronRight className="nav-icon d-none" />
              </Link> 
            </li>
            <li className="nav-item">
              <Link
                className="nav-links"
                to="/resources"
              >
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" >
                About
              </Link>
            </li>
          </ul>

          <ul className={click ? "nav-menu-bottom active" : "nav-menu-bottom "}>
          <li className="nav-item ">
              <Link
                className="nav-links"
                
              >
                Contact
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-links"
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
