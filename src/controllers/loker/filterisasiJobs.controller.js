const filterisasiJobsService = require("../../services/loker/filterisasiJobs.service.js");

module.exports = async function filterisasi_jobs(req, res, next) {
  const resJobsList = await filterisasiJobsService();

  if (resJobsList.status === "succes") {
    return res.status(200).json({
      status: resJobsList.status,
      message: resJobsList.message,
    });
  }
};
