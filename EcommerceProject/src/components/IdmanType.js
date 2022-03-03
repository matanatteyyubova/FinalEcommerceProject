import React, { Component } from "react";
import data4 from "../components/data/idmantypedata";
import IdmanTypeItem from "./IdmanTypeItem";

class IdmanType extends Component {
  render() {
    return (
      <div className="idmanType-sec">
        <div className="idmantype-text">
          <h2 className="text-center">Mağaza</h2>
          <p className="text-center">
            Mağaza <i class="fa-solid fa-angle-right"></i> İdaman növləri
          </p>
        </div>
        <div className="row g-4">
          {data4.idmanTypeData.map((item, index) => {
            return (
              <IdmanTypeItem
                img={item.img}
                title={item.title}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default IdmanType;
