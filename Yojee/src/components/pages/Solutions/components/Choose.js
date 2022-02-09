import React, { Component} from "react";
import data from "./Data.json";


export default class Choose extends Component {
  state = {
    content: data,
  };

  render() {
    return (
          <div >
            {this.state.content.map((item) => (
              <div key={item.solution} className="choose col-sm-12">
                <div className="card__heading">
                  <h1>{item.heading}</h1>
                </div>
                <div className="card__body">
                  <div className="card__title">
                    <h3>{item.title1}</h3>
                    <p>{item.descript1}</p>
                  </div>
                  <div className="card__title">
                    <h3>{item.title2}</h3>
                    <p>{item.descript2}</p>
                  </div>
                  <div className="card__title">
                    <h3>{item.title3}</h3>
                    <p>{item.descript3}</p>
                  </div>
                  <div className="card__title">
                    <h3>{item.title4}</h3>
                    <p>{item.descript4}</p>
                  </div>
                  <div className="card__title">
                    <h3>{item.title5}</h3>
                    <p>{item.descript5}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
       
    );
  }
}

