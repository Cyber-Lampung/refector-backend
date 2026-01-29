const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const getSessionTokenFromDb = require("../../model/repository/authentication/getSessionToken.js");
const deleteSessionTokenDb = require("../../model/repository/authentication/deleteSession.js");

module.exports = async function logoutService(token) {
  // verifikasi token di sini (misalnya dengan memeriksa di database atau cache)
  const isTokenValid = await jwt.verify(token, process.env.secretKey);

  // jika token tidak valid
  if (!isTokenValid) {
    return { status: "invalid", message: "unauthorized" };
  }

  // ambil user_id dari token
  const user_id = isTokenValid.user_id;

  // ambil token dalam db
  const tokenDb = await getSessionTokenFromDb(user_id);

  // console.log(tokenDb);

  // veifikasi token apakah sama dengan yang di db
  const validasiTokenDb = crypto.createHash("sha256").digest("hex", token);

  const validateSession = tokenDb === validasiTokenDb;

  // jika vaidateSession false maka unauthorized
  if (!validateSession) {
    return { status: "invalid", message: "unauthorized" };
  }

  // hapus session token di db

  const resDeleteSession = await deleteSessionTokenDb(user_id);

  if (resDeleteSession) {
    return { status: "success", message: "logout successful" };
  } else {
    return { status: "failed", message: "logout failed" };
  }

  //   console.log(resDeleteSession);
};
