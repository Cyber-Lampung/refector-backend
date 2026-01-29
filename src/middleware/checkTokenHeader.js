const jwt = require("jsonwebtoken");

module.exports = async function checkTokenHJeader(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    const splitAuthHeader = authHeader.split(" ")[1];

    const verifTokenHeder = await jwt.verify(
      splitAuthHeader,
      process.env.secretKey,
    );

    if (!verifTokenHeder) {
      return res
        .status(401)
        .json({ status: "invalid", message: "unauthorized" });
    }

    next();
  } catch {
    return res
      .status(409)
      .json({ status: "invalid", message: "token invalid" });
  }
};
