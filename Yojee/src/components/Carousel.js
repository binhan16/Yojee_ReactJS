import React from "react";
import "./Carousel.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Carousel() {
  return (

    <section className="carousel container">
      <div className="row">
        <div className="carousel-content col-12 col-sm-7 ">
          <div className="carousel-text ">
            <h1 className="font-weight-bold">See the world flow</h1>
            <p className="font-weight-bold">
              Gain full visibility on your logistics operations, manage your
              partners <br /> and scale your business
            </p>
          </div>
          <div className="carousel-button">
            <p>Chose your solutions:</p>
            <ul className=" row" >
                <li className="col-12 col-sm-4 ">
                  <button className="btn-chose btn-1">
                    <span>ALL-IN-ONE SAAS PLATFORM</span>
                  </button>
                </li>
                <li className="col-12 col-sm-4">
                  <button className="btn-chose btn-2">
                    <span>REDUCE COST</span>
                  </button>
                </li>
                <li className="col-12 col-sm-4">
                  <button className='btn-chose btn-1'>
                    <span>IMPROVE VISIBILITY</span>
                  </button>
                </li>
            </ul>
          </div>
        </div>
        <div className="carousel-image col-12 col-sm-5 ">
          <img src="./image/Business logistics.png" />
        </div>
      </div>
    </section>
  );
}

export default Carousel;
