const User = require("../models/user");

exports.postTest = (req, res, next) => {
  console.log("Worked!");
  const userName = "Panos";
  User.find()
    .then((user) => {
      const newName = user.find((e) => e.name === userName);
      console.log(newName.name);
    })
    .then(() => {
      res.redirect("/");
    });
};

exports.getShop = (req, res, next) => {
  console.log(user);
  res.redirect("/");
};
