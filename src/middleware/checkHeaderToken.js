const jwt = require("jsonwebtoken");

module.exports = async function checkContentHeaader(req, res, next) {
  const verifTokenHeader = req.headers.authorization;
  const splitToken = verifTokenHeader.split(" ")[1];

  const verifToken = await jwt.verify(splitToken, process.env.secretKey);

  if (verifToken) {
    next();
  } else {
    return res.status(401).json({
      status: "invalid",
      message: "invalid get user invalid token header",
    });
  }
};
