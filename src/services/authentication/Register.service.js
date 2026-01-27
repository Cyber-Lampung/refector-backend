const register_model = require("../../model/repository/authentication/register_model.js");
const saveSessionsModel = require("../../model/repository/authentication/saveSessions.js");
const createDateTime = require("../../utils/craeteDateTime.js");
const generateUUID = require("../../utils/generateUUID.js");
const hashPassword = require("../../utils/password.utils.js");
const createSessionService = require("./createSession.service.js");

async function registerService(email, username, password) {
  // validasi inputan user
  if (!email || !username || !password) {
    return res
      .status(409)
      .json({ status: "invalid", message: "invalid register fields kosong" });
  }

  if (password.length < 8) {
    return { status: "invalid", message: "password not strong" };
  }

  // yang dibutuhkan user
  const user_id = await generateUUID();
  const passwordHash = await hashPassword(password);
  const created_at = createDateTime.createDateTime();
  const expiresAt = createDateTime.expiresAt();

  // kirim ini ke database

  const { createSessions, sessions_id } = await createSessionService(user_id);

  const responseSaveSession = await saveSessionsModel(
    sessions_id,
    user_id,
    createSessions,
    created_at,
    expiresAt,
  );

  // console.log(responseSaveSession); => testing

  const response = await register_model(user_id, email, username, passwordHash);

  // check response hasil dari register model
  if (responseSaveSession.created & response) {
    return {
      status: "succes",
      message: "succes created user",
      data: responseSaveSession.data,
    };
  } else {
    return { status: "invalid", message: "invalid created user" };
  }
}

module.exports = registerService;
