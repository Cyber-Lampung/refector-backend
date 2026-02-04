const getAllUserModel = require("../../model/repository/authentication/getAllUser.js");

module.exports = async function getAllUserService() {
  const responseQuery = await getAllUserModel();

  return {
    status: "succes",
    message: "succes get data",
    data: responseQuery,
  };
};
