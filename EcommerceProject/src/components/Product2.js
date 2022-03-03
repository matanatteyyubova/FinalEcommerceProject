import React, { Component } from "react";
import ProductItem2 from "./ProductItem2";
import data2 from "./data/dataproduct2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

const Responsive = () => {
  const { t } = useTranslation();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="product2" data-aos="fade-up" data-aos-duration="3000">
      <div className="product2-text ">
        <div className="title-box">
          <h2 className=" product2-title">
            {" "}
            {t("text46")} <span id="product-name"> {t("text461")}</span>{" "}
          </h2>
        </div>
        <div className="line"></div>
      </div>
      <Slider {...settings}>
        {data2.productData2.map((item, index) => {
          return (
            <ProductItem2
              img={item.img}
              title={t(item.title)}
              desc={item.desc}
              price={item.price}
              item={item}
              key={index}
            />
          );
        })}
      </Slider>
    </div>
  );
};
export default Responsive;
