const getLokerService = require("../../services/loker/getLokerFromApi.service.js");

module.exports = async function getJobsController(req, res, next) {
  try {
    const resGetLokerServices = await getLokerService();

    if (resGetLokerServices.status === "succes") {
      return res.status(200).json({
        status: "succes",
        message: "succes get data jobs",
        list: resGetLokerServices.list,
      });
    } else {
      return res
        .status(404)
        .json({ status: "invalid", message: "invalid get data jobs" });
    }
  } catch (error) {
    return res.status(400).json({ status: "invalid", error: error.code });
  }
};
