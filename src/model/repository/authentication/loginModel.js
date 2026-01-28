const db = require("../../../config/db.js");

module.exports = async function loginModel(email) {
  const [rowsEamilCheck] = await db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
  );

  if (rowsEamilCheck[0]) {
    return rowsEamilCheck[0];
  } else {
    return false;
  }
};
