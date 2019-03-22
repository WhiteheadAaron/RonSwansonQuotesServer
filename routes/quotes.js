const express = require("express");
const Quote = require("../models/quote");
const router = express.Router();

router.get("/", (req, res) => {
  Quote.find()

    .then(results => {
      console.log(results);
      res.json(results);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/", (req, res, next) => {
  console.log(req.body);

  const newObj = {
    quote: req.body.quote,
    rating: [],
    ip: []
  };

  Quote.find({ quote: newObj.quote })
    .count()
    .then(count => {
      if (count === 0) {
        Quote.create(newObj);
      }
    });
});

module.exports = router;
