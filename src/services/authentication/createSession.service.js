const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

module.exports = async function (user_id) {
  const sessions_id = uuidv4();

  // buat payload
  const payload = {
    user_id: user_id,
    role: "user",
  };

  const createSessions = await jwt.sign(payload, process.env.secretKey, {
    algorithm: "HS256",
    expiresIn: "7d",
  });

  return { createSessions, sessions_id };
};
