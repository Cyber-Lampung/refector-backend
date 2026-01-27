const checkEmailUsedService = require("../services/authentication/checkEmailUsed.service");

module.exports = async function checkEmailUsed(req, res, next) {
  const { email } = req.body;

  const { status, message } = await checkEmailUsedService(email);

  if (status === "invalid") {
    return res.status(403).json({ status: "invalid", message: message });
  } else {
    next();
  }
};
