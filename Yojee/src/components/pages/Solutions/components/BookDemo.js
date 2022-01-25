import React from "react";
import "../../../../style/BookDemo.css";

function BookDemo() {
  return (
    <section className="bookDemo gradient-purple">
      <div className=" bookDemo-body">
        <div className="container">
        <div className="row">
          <div className="col-md-8">
          <p className="bookDemo-text">
            See for yourself just how much money and time Yojee <br /> will save 
            you and your team
          </p>
          </div>
          <div className="col-md-4">
          <button className="bookDemo-btn">BOOK A DEMO</button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default BookDemo;
