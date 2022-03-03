import React, { Component } from "react";
import data2 from "./data/data2";

class Brends extends Component {
  render() {
    return (
      <div>
        <section className="brend_sec">
          <h3>Brendlər</h3>
          <div className="line"></div>
          <div className="brend_content">
            <div className="row">
              {data2.brends.map((item, index) => {
                return (
                  <div className="col col-lg-2 col-md-3 col-sm-4">
                    <img src={item.img} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Brends;
