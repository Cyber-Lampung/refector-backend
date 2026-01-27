const express = require("express");
const {
  RegisterController,
} = require("../controllers/authentication/Register.controller.js");
const mitigasiSql = require("../middleware/mitigasiSql.js");
const checkEmailUsed = require("../middleware/checkEmailUsed.js");

// initialisasi router
const router = express.Router();

router.post("/register", checkEmailUsed, mitigasiSql, (req, res, next) => {
  RegisterController(req, res, next);
});

module.exports = router;
