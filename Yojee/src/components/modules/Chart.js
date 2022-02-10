import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../../assets/scss/bootstrap/_chart.scss";

export default class Chart extends Component {
  state = {
    imgActive: "./image/chart.png",
  };

  changeImageChart = (image) => {
    const mapping = {
      image1: "./image/chart.png",
      image2: "./image/chart2.png",
      image3: "./image/chart3.png",
      image4: "./image/chart4.png",
      image5: "./image/chart5.png",
      image6: "./image/chart6.png",
    };

    const imgActive = mapping[image];

    this.setState({ imgActive });
  };

  render() {
    return (
      <>
        <div className="chart">
          <p className="chart__heading">
            Automate your operations with delivery
            <br /> management software
          </p>
          <div className="container ">
            <div className="row">
              <div id="picture" className="chart__left col-sm-7 col-12">
                <img src={this.state.imgActive} />
                <br />
                <p>
                  Get real-time ETA based on the drivers location while keeping{" "}
                  <br /> your customers informed and dramatically reduces
                  customer{" "}
                </p>
              </div>
              <div className="chart__right col-sm-5 col-12">
                <div className="chart__right--item ">
                  <div className="chart-text">
                    <div className="chart-icon">
                      <Link onClick={() => this.changeImageChart("image1")}>
                        <img src="./image/slick01.png" />
                      </Link>
                    </div>
                    <div className="chart-content">
                      <p>Route Planning and Route Optimisation</p>
                    </div>
                  </div>
                </div>
                <div className="chart__right--item ">
                  <div className="chart-text ">
                    <div className="chart-icon">
                      <Link onClick={() => this.changeImageChart("image2")}>
                        <img src="./image/slick02.png" />
                      </Link>
                    </div>
                    <div className="chart-content">
                      <p>Live Tracking</p>
                    </div>
                  </div>
                </div>
                <div className="chart__right--item ">
                  <div className="chart-text">
                    <div className="chart-icon">
                      <Link onClick={() => this.changeImageChart("image3")}>
                        <img src="./image/slick03.png" />
                      </Link>
                    </div>
                    <div className="chart-content">
                      <p>Driver App</p>
                    </div>
                  </div>
                </div>
                <div className="chart__right--item ">
                  <div className="chart-text">
                    <div className="chart-icon">
                      <Link onClick={() => this.changeImageChart("image4")}>
                        <img src="./image/slick04.png" />
                      </Link>
                    </div>
                    <div className="chart-content">
                      <p>Manage your partners/vendors</p>
                    </div>
                  </div>
                </div>
                <div className="chart__right--item ">
                  <div className="chart-text">
                    <div className="chart-icon">
                      <Link onClick={() => this.changeImageChart("image5")}>
                        <img src="./image/slick05.png" />
                      </Link>
                    </div>
                    <div className="chart-content">
                      <p>Easy-to-use API</p>
                    </div>
                  </div>
                </div>
                <div className="chart__right--item ">
                  <div className="chart-text">
                    <div className="chart-icon">
                      <Link onClick={() => this.changeImageChart("image6")}>
                        <img src="./image/slick06.png" />
                      </Link>
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
          <div className="btn ">
            <button className="btn__find">FIND OUT MORE</button>
          </div>
        </div>
      </>
    );
  }
}
