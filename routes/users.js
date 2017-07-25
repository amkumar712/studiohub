var express = require("express");
var router = express.Router();

// Register
router.get("/register", (req, res) => {
  res.render('register', {title: "Register", isHomePage: false});
});

// Login
router.get("/login", (req, res) => {
  res.render('login', {title: "Login", isHomePage: false});
});

module.exports = router;
