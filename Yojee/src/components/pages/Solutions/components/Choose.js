import React from "react";
import "../../../../assets/scss/bootstrap/_choose.scss";

function Choose({
  heading,
  title1,
  title2,
  title3,
  title4,
  title5,
  descript1,
  descript2,
  descript3,
  descript4,
  descript5,
}) {
  return (
    <div className="choose ">
      <div className="card__heading">
        <h1>{heading}</h1>
      </div>
      <div className="card__body">
        <div className="card__title">
          <h3>{title1}</h3>
          <p>{descript1}</p>
        </div>
        <div className="card__title">
          <h3>{title2}</h3>
          <p>{descript2}</p>
        </div>
        <div className="card__title">
          <h3>{title3}</h3>
          <p>{descript3}</p>
        </div>
        <div className="card__title">
          <h3>{title4}</h3>
          <p>{descript4}</p>
        </div>
        <div className="card__title">
          <h3>{title5}</h3>
          <p>{descript5}</p>
        </div>
      </div>
    </div>
  );
}

export default Choose;
