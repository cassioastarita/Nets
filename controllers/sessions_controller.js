const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", (req, res) => {
  const { email, password } = req.body;
  User.findByEmail(email).then((user) => {
    if (user) {
      const isValidPassword = bcrypt.compareSync(
        password,
        user.password_digest
      );
      if (isValidPassword) {
        // login
        req.session.userId = user.id;
        res.json({ userName: user.name });
      } else {
        // If either user doesn't exist or the password is wrong
        res.status(422).json({ message: "invalid email or password" });
      }
    } else {
      // If either user doesn't exist or the password is wrong
      res.status(422).json({ message: "invalid email or password" });
    }
  });
});


// Logout
router.get('/logout', (req, res) => {
// remove the req.user property and clear the login session
req.logout();
console.log('logged out')
// destroy session data
req.session = null;
// redirect to homepage
res.redirect('/');
});

module.exports = router;
