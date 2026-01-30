const bcrypt = require("bcrypt");
const crypto = require("crypto");
const loginModel = require("../../model/repository/authentication/loginModel.js");
const getTokenSessionActive = require("../../model/repository/authentication/getTokenSessionActive.js");
const createSessionService = require("./createSession.service.js");
const updateSession = require("../../model/repository/authentication/updateSession.js");

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
    // jika tidak ada sesion active, buat session baru

    const createNewSession = await createSessionService(user_id);

    const session_id = createNewSession.sessions_id;
    const hashSessionsToken = crypto
      .createHash("sha256")
      .digest("hex", createNewSession.createSessions);

    // save new session to database

    const sessionUpdate = await updateSession(
      session_id,
      user_id,
      hashSessionsToken,
    );

    if (sessionUpdate) {
      return {
        status: "success",
        message: "Login successful",
        session: createNewSession.createSessions,
      };
    } else {
      return { status: "invalid", message: "Failed to create session" };
    }
  }

  // verif password and return response

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
