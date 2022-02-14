import React from "react";
import "../../../../assets/scss/layout/_bookDemo.scss";
import { Link } from "react-router-dom";

function BookDemo() {
  return (
    <section className="bookDemo gradient-purple">
      <div className=" bookDemo__body">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <p className="bookDemo__text">
                See for yourself just how much money and time Yojee <br /> will
                save you and your team
              </p>
            </div>
            <div className="col-md-4">
              <Link to="/sign-up">
                <button className="bookDemo__btn">BOOK A DEMO</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookDemo;
