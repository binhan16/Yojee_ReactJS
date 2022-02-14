import React, { Component } from "react";
// import { TabContent, TabPane, Row, Col } from "reactstrap";
import "../../../../assets/scss/layout/_tab.scss";

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = { changeTab: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      changeTab: !prevState.changeTab,
    }));
  }

  render() {
    return (
      <section className="tab">
        {/* <div className="container">
          <div className="row ">
            <div className="col-md-4 ">
              <button className="tab__btn">SAAS PLATFORM</button>
            </div>
            <div className="col-md-4">
              <button className="tab__btn">REDUCE COST</button>
            </div>
            <div className="col-md-4">
              <button className="tab__btn">IMPROVE VISIBILITY</button>
            </div>
          </div>
        </div> */}
        <div className="container">
          <div className="row ">
            <div className="col-md-4">
              <div
                onClick={this.handleClick}
                className={
                  this.state.changeTab ? "tab__btn" : "tab__btn--active"
                }
              >
                SAAS PLATFORM
              </div>
            </div>
            <div className="col-md-4">
              <div
                onClick={this.handleClick}
                className={
                  this.state.changeTab ? "tab__btn" : "tab__btn--active"
                }
              >
                REDUCE COST
              </div>
            </div>
            <div className="col-md-4">
              <div
                onClick={this.handleClick}
                className={
                  this.state.changeTab ? "tab__btn" : "tab__btn--active"
                }
              >
                IMPROVE VISIBILITY
              </div>
            </div>
            {/* <Col md="4">
              <TabPane
                onClick={this.handleClick}
                className={this.state.changeTab ? "tab__btn" : "tab__btn--active"}
              >
                REDUCE COST
              </TabPane>
            </Col>

            <Col md="4">
              <TabPane
                onClick={this.handleClick}
                className={this.state.changeTab ? "tab__btn" : "tab__btn--active"}
              >
                IMPROVE VISIBILITY
              </TabPane>
            </Col> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Tab;

// import React, { useState } from "react";
// import "../../../../assets/scss/bootstrap/_tab.scss";
// import { TabContent, TabPane, Row, Col } from "reactstrap";
// import Choose from "./Choose";
// import { solution1, solution2, solution3 } from "../Data";
// // import classnames from "classnames";

// function Tab() {
//   const [click, setClick] = useState(false);
//   const [activeTab, setActiveTab] = useState("1");

//   const handleClick = () => setClick(!click);

//   const toggle = (tab) => {
//     if (activeTab !== tab) setActiveTab(tab);
//   };

// }

// export default Tab;
