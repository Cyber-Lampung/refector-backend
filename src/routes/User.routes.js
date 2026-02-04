const express = require("express");
const {
  RegisterController,
} = require("../controllers/authentication/Register.controller.js");
const mitigasiSql = require("../middleware/mitigasiSql.js");
const checkEmailUsed = require("../middleware/checkEmailUsed.js");
const loginControllers = require("../controllers/authentication/login.controller.js");
const editUserController = require("../controllers/authentication/editUser.controller.js");
const logoutController = require("../controllers/authentication/logout.controller.js");
const checkUserController = require("../controllers/authentication/checkUser.controller.js");
const checkTokenHeader = require("../middleware/checkTokenHeader.js");

// initialisasi router
const router = express.Router();

// list users
router.get("/users", checkTokenHeader, (req, res, next) => {
  checkUserController(req, res, next);
});

// login
router.post("/login", mitigasiSql, (req, res, next) => {
  loginControllers(req, res, next);
});

// register
router.post("/register", mitigasiSql, (req, res, next) => {
  RegisterController(req, res, next);
});

// logout
router.post("/logout", (req, res, next) => {
  logoutController(req, res, next);
});

// edit pengguna

router.patch("/edit", (req, res, next) => {
  editUserController(req, res, next);
});

module.exports = router;
