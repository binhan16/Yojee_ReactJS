import React, { useState } from "react";
import "../../../../assets/scss/bootstrap/_tab.scss";
import { TabContent, TabPane, Row, Col } from "reactstrap";
import Choose from "./Choose";
import { solution1, solution2, solution3 } from "../Data";
// import classnames from "classnames";

function Tab() {
  const [click, setClick] = useState(false);
  const [activeTab, setActiveTab] = useState("1");

  const handleClick = () => setClick(!click);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

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
      <TabContent className="container">
        <Row>
          <Col md="4">
            <TabPane
              onClick={handleClick}
              className={click ? "tab__btn" : "tab__btn--active"}
            >
              SAAS PLATFORM
            </TabPane>
          </Col>
          <Col md="4">
            <TabPane
              onClick={handleClick}
              className={click ? "tab__btn" : "tab__btn--active"}
            >
              REDUCE COST
            </TabPane>
          </Col>

          <Col md="4">
            <TabPane
              onClick={handleClick}
              className={click ? "tab__btn" : "tab__btn--active"}
            >
              IMPROVE VISIBILITY
            </TabPane>
          </Col>
        </Row>
      </TabContent>
    </section>
  );
}

export default Tab;
