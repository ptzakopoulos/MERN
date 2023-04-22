import React from "react";
import { useState, useEffect } from "react";
import Test from "./components/testComponent";

function App() {
  const [backEndData, setBackEndData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackEndData(data);
        console.log(data);
        console.log(backEndData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const testArray = [];
  const names = ["Panos", "Giannis", "Xristos", "Aleksandros"];
  for (let i = 0; i < 4; i++) {
    testArray[i] = <Test name={names[i]} />;
  }

  return (
    <div>
      {typeof backEndData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backEndData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
      {names.length > 0
        ? names.map((e, index) => <Test key={index} name={e} />)
        : console.log("sks")}
    </div>
  );
}

export default App;
