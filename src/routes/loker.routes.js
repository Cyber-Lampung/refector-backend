const express = require("express");
const getJobsController = require("../controllers/loker/getLoker.controller.js");
const checkTokenHeader = require("../middleware/checkTokenHeader");
const searchJobsController = require("../controllers/loker/searchJobs.controller.js");

// initialisasi router
const router = express.Router();

// router.get("/loker", async (req, res) => {
//   const data = await fetch
// });

// get all loker
router.get("/loker_list", checkTokenHeader, async (req, res, next) => {
  getJobsController(req, res, next);
});

// get loker by name yang sesuai
router.post("/search_jobs", (req, res, next) => {
  searchJobsController(req, res, next);
});

module.exports = router;
