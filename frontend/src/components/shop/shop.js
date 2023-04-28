import React from "react";

import ShopItem from "./shopItem/ShopItem";

import "./shop.css";

const Shop = (props) => {
  console.log(props.products[0].title);

  return (
    <div className="shop-container">
      {props.products.length
        ? props.products.map((item, index) => {
            return (
              <ShopItem
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                description={item.description}
              />
            );
          })
        : console.log("")}
    </div>
  );
};

export default Shop;
