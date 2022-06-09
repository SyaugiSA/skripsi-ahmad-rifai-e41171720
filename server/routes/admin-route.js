const express = require("express");
const router = express.Router();
const { Get, Add, Update, Delete } = require("../controller/admin-controller");

/* GET home page. */
router.get("/", Get);
router.post("/", Add);
router.patch("/:emailin", Update);
router.delete(":emailin", Delete);

module.exports = router;
