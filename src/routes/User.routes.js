const express = require("express");
const {
  RegisterController,
} = require("../controllers/authentication/Register.controller.js");
const mitigasiSql = require("../middleware/mitigasiSql.js");

// initialisasi router
const router = express.Router();

router.post("/register", mitigasiSql, (req, res, next) => {
  RegisterController(req, res, next);
});

module.exports = router;
