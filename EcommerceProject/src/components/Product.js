import React from "react";
import ProductItem from "./ProductItem";
import data from "./data/dataproduct";
import { useTranslation } from "react-i18next";


const Product = () => {
  const { t } = useTranslation();
  return (
    <section className="product"  data-aos="fade-up"
    data-aos-duration="3000">
      <div className="product1-text">
        <div className="title-box">
          <h2 id="product-name" className="product-name">
            <span>{t('text35')}</span> {t('text351')}
          </h2>
        </div>
        <div className="line"></div>
        <button>{t('text36')}</button>
      </div>
      <div className="row g-1">
     
        {data.productData.map((item, index) => {
          return (
            <ProductItem
              img={item.img}
              title={t(item.title)}
              desc={item.desc}
              price={item.price}
              item={item}
              to={item.to}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Product;
