var express = require("express");
var router = express.Router();

// Get Home Page
router.get('/', (req, res) => {
  res.render('index', {title: "Home Page", isHomePage: true});
});

module.exports = router;
