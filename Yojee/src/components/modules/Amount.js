import React from "react";
import './../../assets/scss/bootstrap/_amount.scss';

function Amount({ headline, description, buttonLabel2, buttonLabel3, p2, p3 }) {
  return (
    <>
      <div className="amount">
        <div className="top-background" />
        <div className="amount__body">
          <h1>{headline}</h1>
          <p className="title">{description}</p>
          <div className="container">
            <ul className="row">
              <li className=" col-md-4 ">
                <div className="amount__circle">
                  <h3 className="amount__circle--text">
                    4 <br /> out of 10
                  </h3>
                </div>
                <div className="amount__descript">
                  <p>
                    Top logistics providers <br /> powered by Yojee <br />
                    technolog
                  </p>
                </div>
              </li>
              <li className=" col-md-4 ">
                <div className="amount__circle">
                  <h3 className="amount__circle--text">{buttonLabel2}</h3>
                </div>
                <div className="amount__descript">
                  <p>{p2}</p>
                </div>
              </li>
              <li className=" col-md-4 ">
                <div className="amount__circle">
                  <h3 className="amount__circle--text">{buttonLabel3}</h3>
                </div>
                <div className="amount__descript">
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
