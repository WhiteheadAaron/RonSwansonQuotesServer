const express = require("express");
const Quote = require("../models/quote");
const router = express.Router();


router.get("/", (req, res) => {
  
  Quote.find()
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      console.error(err);
    });
});

router.post("/", (req, res, next) => {

  

  const newObj = {
    quote: req.body.quote,
    rating: [],
    ip: []
  };

  Quote.find({ quote: newObj.quote })
    .count()
    .then(count => {
      if (count === 0) {
        Quote.create(newObj)
          .then(results => {
            res.location(`${req.originalUrl}/${results.id}`);
            res.status(201).json(results);
            return results.id;
          })
          .catch(err => {
            console.error(`ERROR: ${err.message}`);
            console.error(err);
          })
      }
    });
});

router.put("/:id", (req, res, next) => {

  const id = req.params.id;

  const newObj = {
    rating: req.body.rating,
    ip: req.body.ip
  }



  return Quote.findOneAndUpdate({ _id: id }, newObj, { new: true })
    .select("rating ip")
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      console.log(err);
    })
})

module.exports = router;
