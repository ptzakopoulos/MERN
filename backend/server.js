const express = require("express");
const mongoose = require("mongoose");

//Local Modules
const userRoutes = require("./routes/user");

//Models
const User = require("./models/user");
const Orders = require("./models/orders");
const Products = require("./models/product");

const app = express();

app.use(userRoutes);

//Calling User Schema
app.get("/api/users", (req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
    });
});

//Calling Orders Schema
app.get("/api/orders", (req, res) => {
  Orders.find()
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) => {
      console.error(err);
    });
});

//Calling Produts Schema
app.get("/api/products", (req, res) => {
  Products.find()
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      console.error(err);
    });
});

mongoose
  .connect(
    "mongodb+srv://psnod:panos123@cluster0.dgofkdg.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(5000, () => {
      console.log("Server Staert at port 5000");
    });
  })
  .catch((err) => {
    console.error(err);
  });
