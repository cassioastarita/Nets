const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const router = express.Router();

router.get("/", (req, res) => {
  User.findAll().then((users) => res.json(users));
});

router.post("/", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const passwordDigest = bcrypt.hashSync(
    password,
    bcrypt.genSaltSync(10),
    null
  );

  User.create(name, email, passwordDigest).then((userName) =>
    res.json(userName)
  );
});
module.exports = router;
