const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["user1", "user2", "user3", "user4"] });
});

app.listen(5000, () => {
  console.log("Server is Listening on 5000");
});
