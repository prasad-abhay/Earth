const express = require("express");
const router = express.Router();
const {
  loginUser,
  createUser,
} = require("../controller/authController");

router.post("/login", loginUser);

router.post("/signup", (req, res) => {
  createUser(req, res);
});


module.exports = router;