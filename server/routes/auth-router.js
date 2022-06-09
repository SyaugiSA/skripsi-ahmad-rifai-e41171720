const express = require("express");
const router = express.Router();
const { Login, Register, Logout } = require("../controller/auth-controller");

/* GET home page. */
router.post("/login", Login);
router.post("register", Register);
router.post("logout", Logout);

module.exports = router;
