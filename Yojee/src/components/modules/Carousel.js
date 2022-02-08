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
            <p className="font-weight-bold">
              Gain full visibility on your logistics operations, manage your
              partners <br /> and scale your business
            </p>
          </div>
          <div className="carousel__button">
            <p>Chose your solutions:</p>
            <ul className=" row    list-unstyled">
              <li>
                <Link to="/solutions">
                  <button className="btn__chose btn-1 mr-3">
                    <span>ALL-IN-ONE SAAS PLATFORM</span>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/solutions">
                  <button className="btn__chose btn-2 mr-3">
                    <span>REDUCE COST</span>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/solutions">
                  <button className="btn__chose btn-1 mr-3">
                    <span>IMPROVE VISIBILITY</span>
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
