const express = require("express");
const getJobsController = require("../controllers/loker/getLoker.controller.js");
const checkTokenHeader = require("../middleware/checkTokenHeader");
const filterisasiJobsController = require("../controllers/loker/filterisasiJobs.controller.js");
const searchJobsByCountryController = require("../controllers/loker/searchJobsByCountry.controller.js");
const mountAllJobsController = require("../controllers/loker/mountAllJobs.controller.js");

// initialisasi router
const router = express.Router();

// check health api loker / jobs
router.get("/health-jobs", async (req, res) => {
  return res.json({
    status: "success",
    message: "api jobs is running",
  });
});

// get all loker from API
router.get("/jobs", (req, res, next) => {
  getJobsController(req, res, next);
});

// get all jobs from db
router.get("/jobs/list", (req, res, next) => {
  // limit 50 jobs
  mountAllJobsController(req, res, next);
});

// get loker by name yang sesuai
router.get("/jobs/filter", (req, res, next) => {
  filterisasiJobsController(req, res, next);
});

router.get("/country", (req, res, next) => {
  searchJobsByCountryController(req, res, next);
});

module.exports = router;
