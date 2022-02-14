import React from "react";
import "../../assets/scss/bootstrap/_carousel.scss";
import { Link } from "react-router-dom";

function Carousel() {
  return (
    <section className="carousel container">
      <div className="row">
        <div className="carousel-content col-12 col-sm-8 ">
          <div className="carousel__text ">
            <h1 className="carousel__heading">See the world flow</h1>
            <p>
              Gain full visibility on your logistics operations, manage your
              partners and scale your business
            </p>
          </div>
          <div className="carousel__button">
            <h4>Chose your solutions:</h4>
            <ul className=" row list-unstyled">
              <li>
                <Link to="/solutions">
                  <button className="btn__chose ">
                    <span>All-in-one SaaS Platform</span>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/solutions">
                  <button className="btn__chose ">
                    <span>Reduce Cost</span>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/solutions">
                  <button className="btn__chose ">
                    <span>Improve Visibility</span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="carousel__image col-12 col-sm-4 ">
          <img src="./image/Business logistics.png" />
        </div>
      </div>
    </section>
  );
}

export default Carousel;
