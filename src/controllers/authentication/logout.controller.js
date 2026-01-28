const logoutService = require("../../services/authentication/logout.service");

module.exports = async function logoutController(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    const splitAuthHeader = authHeader.split(" ")[1];

    if (!splitAuthHeader) {
      return res.status(401).json({ message: "unauthorized" });
    }

    const response = await logoutService(splitAuthHeader);
  } catch {
    return res.status(400).json({ status: "invalid", message: "bad request" });
  }
};
