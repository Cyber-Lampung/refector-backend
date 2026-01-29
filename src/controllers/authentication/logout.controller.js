const logoutService = require("../../services/authentication/logout.service");

module.exports = async function logoutController(req, res, next) {
  try {
    // ambil header authorization
    const authHeader = req.headers.authorization;
    const splitAuthHeader = authHeader.split(" ")[1];

    if (!splitAuthHeader) {
      return res.status(401).json({ message: "unauthorized" });
    }

    const response = await logoutService(splitAuthHeader);

    if (response.status === "success") {
      return res.status(200).json({
        status: "success",
        message: response.message,
      });
    } else if (response.status === "failed") {
      return res.status(401).json({
        status: "invalid",
        message: response.message,
      });
    } else {
      return res.status(409).json({
        status: "failed",
        message: response.message,
      });
    }
  } catch {
    return res.status(400).json({ status: "invalid", message: "bad request" });
  }
};
