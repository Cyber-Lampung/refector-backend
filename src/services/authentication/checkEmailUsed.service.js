const checkEmailUsed = require("../../model/repository/authentication/checkEmailUsed");

module.exports = async function checkEmailUsedService(email) {
  const response = await checkEmailUsed(email);

  if (response) {
    return { status: "invalid", message: "email is used" };
  } else {
    return { status: "succes", message: "email not used" };
  }
};
