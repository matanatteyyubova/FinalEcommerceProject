import React, { Component } from "react";
import BlogItem from "../components/BlogItem";
import data4 from "../components/data/blogpagedata";
import blogimg from "../assets/img/blogimg.jpg";

class Blog extends Component {
  render() {
    return (
      <div>
        <img src={blogimg} alt="" />
        <div className="blog-img-text text-center">
          <h1>BLOQ</h1>
          <p>Mağaza / Bloq</p>
        </div>
        <div className="blogpage">
          <div className="row">
            {data4.blogPageData.map((item, index) => {
              return (
                <BlogItem
                  img={item.img}
                  date={item.date}
                  title={item.title}
                  desc={item.desc}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
