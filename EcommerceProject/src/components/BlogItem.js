import React from "react";

const BlogItem = (props) => {
  return (
    <div className="homeBlogItem">
      <div className="card ">
        <div className="imgBx">
          <img src={props.img} alt="" />
        </div>
        <div className="content-card ">
          <div className="blog-date">
            {" "}
            <h1>{props.date}</h1> <h6>{props.title}</h6>
          </div>
          <p>{props.desc}</p>
          <button className="blog">
            Ətraflı <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
