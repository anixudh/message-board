var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "ani",
    added: new Date(),
  },
  {
    text: "Good day!",
    user: "rudh",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Message" });
});

router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.message,
    user: req.body.authorName,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
