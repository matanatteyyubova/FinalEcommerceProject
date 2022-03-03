import React from "react";

const IdmanTypeItem = (props) => {
  return (
    <div className="col col-lg-2 col-md-3 col-sm-4">
      <div className="card  pb-5 ">
        <img src={props.img} className="card-img-top" alt="err" />
        <i class="fa-solid fa-magnifying-glass"></i>
        <div className="card-body text-center ">
          <h5 className="card-title">{props.title}</h5>
        </div>
      </div>
    </div>
  );
};

export default IdmanTypeItem;
