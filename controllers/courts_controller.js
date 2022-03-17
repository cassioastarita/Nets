const express = require("express");
const Courts = require("../models/court");

const router = express.Router();

router.get("/", (req, res) => {
  Courts.findAll().then((courts) => res.json(courts));
});

router.post("/", (req, res) => {
  const { courtName, net, toilet, water, parking, imgUrl, coordinates } =
    req.body;
  console.log(coordinates);
  Courts.create(
    courtName,
    net,
    toilet,
    water,
    parking,
    imgUrl,
    coordinates
  ).then((court) => res.json(court));
});

module.exports = router;
