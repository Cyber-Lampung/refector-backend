const crypto = require("crypto");

module.exports = async function generateToken() {
  const token = await crypto.randomBytes(3).toString("hex");

  return token;
};
