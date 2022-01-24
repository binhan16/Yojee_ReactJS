import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../../style/Chart.css";

function Chart() {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const settings = {
    dots: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
  };

  return (
    <>
      <div className="chart">
        <p>
          Automate your operations with delivery
          <br /> management software
        </p>
        <div className="container ">
          <div className="row">
            <div id="picture" className="chart-left col-sm-7 col-12">
              <Slider {...settings}>
                <div>
                  <img src="./image/chart.png" />
                </div>
                <div>
                  <img src="./image/chart2.png" />
                </div>
                <div>
                  <img src="./image/chart3.png" />
                </div>
                <div>
                  <img src="./image/chart4.png" />
                </div>
                <div>
                  <img src="./image/chart5.png" />
                </div>
                <div>
                  <img src="./image/chart2.png" />
                </div>
              </Slider>
              <br />
              <p>
                Get real-time ETA based on the drivers location while keeping{" "}
                <br /> your customers informed and dramatically reduces customer{" "}
              </p>
            </div>
            <div className="chart-right col-sm-5 col-12">
              <div className="chart-item ">
                <div className="chart-text ">
                  <div className="chart-icon">
                    <img src="./image/slick01.png" />
                  </div>
                  <div className="chart-content">
                    <p>Route Planning and Route Optimisation</p>
                  </div>
                </div>
              </div>
              <div className="chart-item ">
                <div className="chart-text ">
                  <div className="chart-icon">
                    <img src="./image/slick02.png" />
                  </div>
                  <div className="chart-content">
                    <p>Live Tracking</p>
                  </div>
                </div>
              </div>
              <div className="chart-item ">
                <div className="chart-text">
                  <div className="chart-icon">
                    <img src="./image/slick03.png" />
                  </div>
                  <div className="chart-content">
                    <p>Driver App</p>
                  </div>
                </div>
              </div>
              <div className="chart-item ">
                <div className="chart-text">
                  <div className="chart-icon">
                    <img src="./image/slick04.png" />
                  </div>
                  <div className="chart-content">
                    <p>Manage your partners/vendors</p>
                  </div>
                </div>
              </div>
              <div className="chart-item ">
                <div className="chart-text">
                  <div className="chart-icon">
                    <img src="./image/slick05.png" />
                  </div>
                  <div className="chart-content">
                    <p>Easy-to-use API</p>
                  </div>
                </div>
              </div>
              <div className="chart-item ">
                <div className="chart-text">
                  <div className="chart-icon">
                    <img src="./image/slick06.png" />
                  </div>
                  <div className="chart-content">
                    <p>Analytics and Reporting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <Link to="/" onClick={closeMobileMenu}>
          <button className="btn-find">FIND OUT MORE</button>
        </Link>
      </div>
    </>
  );
}

export default Chart;
