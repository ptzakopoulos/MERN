import React from "react";
import "./ShopItem.css";

const ShopItem = (props) => {
  return (
    <div className="shop-item-container">
      <h1 className="title">{props.title}</h1>
      <img src={props.imageUrl} alt="This is a fwtografia" />
      <div className="details">
        <div className="price">{props.price}</div>
        <div className="more-details">
          <p className="description">{props.description}</p>
        </div>
        <div className="buttons">
          <a className="add-top-cart" href="/">
            Add To Cart
          </a>
          <a className="details" href="/">
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
