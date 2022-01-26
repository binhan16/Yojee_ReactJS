import React, { useState } from "react";
import "../../../../style/Tab.css";
// import {TabContent,TabPane,Row,Col} from "reactstrap";
// import Choose from "./Choose";
// import { solution1,solution2,solution3 } from '../Data'
// import classnames from "classnames";

function Tab() {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <section className="tabs">
      <div className="container">
        <div className="row ">
          <div className="col-md-4 ">
            <button className="btn-tab">SAAS PLATFORM</button>
          </div>
          <div className="col-md-4">
            <button className="btn-tab">REDUCE COST</button>
          </div>
          <div className="col-md-4">
            <button className="btn-tab">IMPROVE VISIBILITY</button>
          </div>
        </div>
      </div>
      {/* <TabContent>
        <TabPane>
          <Row>
            <Col sm='12'>
              <Choose {...solution1}/>
            </Col>
          </Row>
        </TabPane>
        <TabPane>
          <Row>
            <Col sm="12">

            </Col>
          </Row>
        </TabPane>
      </TabContent> */}
    </section>

    
  );
}

export default Tab;
