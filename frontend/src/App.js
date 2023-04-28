import React from "react";
import { useState, useEffect } from "react";

//Local Modules
import Navigation from "./components/global/navigation";
import Shop from "./components/shop/shop";

function App() {
  const [users, setUsers] = useState([{}]);
  const [orders, setOrders] = useState([{}]);
  const [products, setProducts] = useState([{}]);

  // useEffect(() => {
  //   //Fetching Users from Schema
  //   fetch("/api/users")
  //     .then((response) => response.json())
  //     .then((data) => setUsers(data))
  //     .catch((err) => console.error(err));
  //   //Fetching ORders from Schema
  //   fetch("/api/orders")
  //     .then((response) => response.json())
  //     .then((data) => setOrders(data))
  //     .catch((err) => console.error(err));
  //   //Fetching Products from Schema
  //   fetch("/api/products")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data))
  //     .catch((err) => console.error(err));
  // }, []);

  useEffect(() => {
    //Fetching Users from Schema
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
    //Fetching ORders from Schema
    fetch("/api/orders")
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error(err));
    //Fetching Products from Schema
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Navigation />
      <Shop products={products} />
      <form method="POST" action="/test">
        <button type="submit">Submit</button>
      </form>
      <h1>{users[0].name}</h1>
      <h1>{products[0].title}</h1>
      {orders.length > 0 ? (
        orders.map((order, index) => console.log(orders))
      ) : (
        <h1>No Orders Found</h1>
      )}
    </div>
  );
}

export default App;
