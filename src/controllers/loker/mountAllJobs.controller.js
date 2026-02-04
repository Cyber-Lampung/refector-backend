const mountAllJobsService = require("../../services/loker/mountAllJobs.service.js");

module.exports = async function mountAllJobsController(req, res, next) {
  const resServiceMount = await mountAllJobsService();

  return res.status(200).json({
    status: "succes",
    message: "success get data jobs",
    jobs_length: resServiceMount.length,
    list: resServiceMount,
  });
};
