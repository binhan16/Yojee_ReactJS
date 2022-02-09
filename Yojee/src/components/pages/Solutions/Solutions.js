import React, { useState } from "react";
import Tab from "./components/Tab";
import Choose from "./components/Choose";
import BookDemo from "./components/BookDemo";
import data from "./components/Data.json";

function Solutions() {
  const [changeTab, setChangeTab] = useState(false);
  

  const handleClick = () => {
    setChangeTab((changeTab) => !changeTab);
  };

  const renderTab = () => {
    const tabContent = data;
    return tabContent.map((item) => (
      <div
        key={item}
        className="tab"
        onClick={handleClick(tabContent.solution)}
      ></div>
    ));
  };

  return (
    <>
      <Tab className={changeTab ? "tab__btn" : "tab__btn--active"}>
        {changeTab && renderTab()}
      </Tab>
      <Choose />
      <BookDemo />
    </>
  );
}

export default Solutions;
