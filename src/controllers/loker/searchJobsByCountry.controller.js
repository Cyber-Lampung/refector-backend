const searchJobsByCountyServiceService = require("../../services/loker/searchJobsByCountyService.service");

module.exports = async function searchJobsByCountyController(req, res, next) {
  try {
    const { country, city } = req.body;

    if (!country) {
      return res
        .status(400)
        .json({ status: "invalid", message: "invalid country is not value" });
    }

    const resService = await searchJobsByCountyServiceService(country, city);

    if (resService.status === "invalid") {
      return res
        .status(400)
        .json({ status: resService.status, message: resService.message });
    }

    if (resService.status === "success") {
      return res.status(200).json({
        status: resService.status,
        message: resService.message,
        jobs: resService.jobs,
      });
    } else {
      return res
        .status(404)
        .json({ status: "invalid", message: "invalid location not found" });
    }
  } catch (error) {
    return res.status(500).json({ status: "invalid", message: error.code });
  }
};
