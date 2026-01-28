const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const getSessionTokenFromDb = require("../../model/repository/authentication/getSessionToken.js");
const deleteSessionTokenDb = require("../../model/repository/authentication/deleteSession.js");

module.exports = async function logoutService(token) {
  // verifikasi token di sini (misalnya dengan memeriksa di database atau cache)
  const isTokenValid = await jwt.verify(token, process.env.secretKey);

  if (!isTokenValid) {
    return { status: "invalid", message: "unauthorized" };
  }

  const user_id = isTokenValid.user_id;

  // ambil token dalam db
  const tokenDb = await getSessionTokenFromDb(user_id);
  console.log(tokenDb);

  // veifikasi token apakah sama dengan yang di db
  const validasiTokenDb = crypto.createHash("sha256").digest("hex", token);

  const validateSession = tokenDb === validasiTokenDb;

  if (!validateSession) {
    return { status: "invalid", message: "token is not modified" };
  }

  // hapus token dari database atau tandai sebagai tidak valid
  // Misalnya, jika Anda menyimpan token di database, Anda dapat menghapusnya di sini

  const resDeleteSession = await deleteSessionTokenDb(user_id);

  //   console.log(resDeleteSession);
};
