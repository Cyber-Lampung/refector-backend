const register_model = require("../../model/repository/authentication/register_model.js");
const createDateTime = require("../../utils/craeteDateTime.js");
const generateUUID = require("../../utils/generateUUID.js");
const hashPassword = require("../../utils/password.utils.js");

async function registerService(email, username, password) {
  if (!email || !username || !password) {
    return res
      .status(409)
      .json({ status: "invalid", message: "invalid register fields kosong" });
  }

  // yang dibutuhkan user

  const user_id = await generateUUID();
  const passwordHash = await hashPassword(password);
  const created_at = createDateTime();

  // kirim ini ke database

  const response = await register_model(
    user_id,
    email,
    username,
    passwordHash,
    created_at,
  );

  if (response) {
    return { status: "succes", message: "succes created user" };
  } else {
    return { status: "invalid", message: "invalid created user" };
  }
}

module.exports = registerService;
