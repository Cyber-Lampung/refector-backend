const jwt = require("jsonwebtoken");
const getAllUserList = require("../../model/repository/authentication/getUserList.js");
// const dotenv = require("dotenv");
// dotenv.config();

module.exports = async function checkUserService(splitAuthHeader) {
  // verif token header
  const verifTokenHeder = await jwt.verify(
    splitAuthHeader,
    process.env.secretKey,
  );

  // send verifikasi token header jika gagal
  if (!verifTokenHeder) {
    return {
      status: "failed",
      message: "invalid token",
    };
  }

  const responseQuery = await getAllUserList();

  if (responseQuery.status === "success") {
    return {
      status: "success",
      message: "user found",
      data: responseQuery.data,
    };
  }
};
