import React from "react";
import "../../style/Amount.css";

function Amount({ headline, description, buttonLabel2, buttonLabel3, p2, p3 }) {
  return (
    <>
      <div className="amount">
        <div className="top-background" />
        <div className="amount-body">
          <h1>{headline}</h1>
          <p className="title">{description}</p>
          <div className="container">
            <ul className="row">
              <li className=" col-md-4 ">
                <div className="amount-circle">
                  <h3 className="amount-text">
                    4 <br /> out of 10
                  </h3>
                </div>
                <div className="amount-descript">
                  <p>
                    Top logistics providers <br /> powered by Yojee <br />
                    technolog
                  </p>
                </div>
              </li>
              <li className=" col-md-4 ">
                <div className="amount-circle">
                  <h3 className="amount-text">{buttonLabel2}</h3>
                </div>
                <div className="amount-descript">
                  <p>{p2}</p>
                </div>
              </li>
              <li className=" col-md-4 ">
                <div className="amount-circle">
                  <h3 className="amount-text">{buttonLabel3}</h3>
                </div>
                <div className="amount-descript">
                  <p>{p3}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-background" />
      </div>
    </>
  );
}

export default Amount;
