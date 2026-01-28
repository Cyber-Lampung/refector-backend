const jwt = require("jsonwebtoken");
const editUserModel = require("../../model/repository/authentication/editUserModel.js");

module.exports = async function editUserService(
  email,
  username,
  password,
  token,
) {
  // verif jwt dari token

  const verifToken = jwt.verify(token, process.env.secretKey);

  if (!verifToken) {
    return { status: "failed", message: "invalid token" };
  }

  // ambil user id dari token

  const user_id = verifToken.user_id;

  // buat penyimpaanan untuk data sementara

  const fields = [];
  const values = [];

  if (email) {
    fields.push("email = ?");
    values.push(email);
  }

  if (username) {
    fields.push("username = ?");
    values.push(username);
  }

  if (password) {
    fields.push("password = ?");
    values.push(password);
  }

  if (fields.length === 0) {
    return { status: "failed", message: "no data to update" };
  }

  // join fields menjadi string

  const fieldsString = fields.join(", ");

  // tambahkan user_id ke values
  values.push(user_id);

  // kirim query update ke database

  const responseQuery = await editUserModel(fieldsString, values);

  if (!responseQuery) {
    return { status: "failed", message: "failed to update user" };
  }

  return { status: "success", message: "user updated successfully" };
};
