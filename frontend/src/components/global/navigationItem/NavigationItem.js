import React from "react";
import "./NavigationItem.css";

const NavigationItem = (item) => {
  return (
    <div className="nav-item">
      <a href={`/${item.path}`}>{item.content}</a>
    </div>
  );
};

export default NavigationItem;
