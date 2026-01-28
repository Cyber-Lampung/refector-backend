const bcrypt = require("bcrypt");
const loginModel = require("../../model/repository/authentication/loginModel.js");
const getTokenSessionActive = require("../../model/repository/authentication/getTokenSessionActive.js");

module.exports = async function loginService(email, password) {
  // validasi input
  if (!email || !password) {
    return { status: "invalid", message: "Email and password are required" };
  }

  // proses login (misalnya, cek di database)
  const responseQuery = await loginModel(email);

  if (!responseQuery) {
    return { status: "invalid", message: "Email not found" };
  }

  const user_id = responseQuery.user_id;

  // check session active dari user_id
  const resposeSessionActive = await getTokenSessionActive(user_id);

  // console.log(resposeSessionActive);

  // check session active user
  if (!resposeSessionActive) {
    return { status: "invalid", message: "user not registered" };
  }
  // verif password dan return response

  const passwordCompare = await bcrypt.compare(
    password,
    responseQuery.password,
  );

  if (responseQuery && passwordCompare) {
    return {
      status: "success",
      message: "Login successful",
      session: resposeSessionActive,
    };
  } else {
    return { status: "invalid", message: "Incorrect password" };
  }
};
