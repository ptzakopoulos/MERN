import React from "react";
import "./navigation.css";

import NavigationItem from "./navigationItem/NavigationItem";

const Navigation = () => {
  const options = ["Shop", "Cart", "Orders", "Login"];

  return (
    <div className="navigation">
      {options.length > 0
        ? options.map((item, index) => (
            <NavigationItem
              key={index}
              content={item}
              path={options[index].toLowerCase()}
            />
          ))
        : console.log("No items found.")}
    </div>
  );
};

export default Navigation;
