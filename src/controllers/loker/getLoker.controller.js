const getLokerService = require("../../services/loker/getLoker.service.js");

module.exports = async function getJobsController(req, res, next) {
  try {
    const resGetLokerServices = await getLokerService();

    if (resGetLokerServices.status === "succes") {
      return res.status(200).json({
        status: "succes",
        message: "succes get data jobs",
        jobs: resGetLokerServices.data,
      });
    } else {
      return res
        .status(404)
        .json({ status: "invalid", message: "invalid get data jobs" });
    }
  } catch (error) {
    return error;
  }
};
