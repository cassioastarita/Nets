const express = require("express");
const Courts = require("../models/court");

const router = express.Router();

router.get("/", (req, res) => {
  Courts.findAll().then((courts) => res.json(courts));
});

router.post("/", (req, res) => {
  const { courtName, net, toilet, water, parking, imgUrl } = req.body;

  Courts.create(courtName, net, toilet, water, parking, imgUrl).then((court) =>
    res.json(court)
  );
});

module.exports = router;
