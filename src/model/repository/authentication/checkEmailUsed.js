const db = require("../../../config/db.js");

module.exports = async function checkEmailUsedModel(email) {
  const [resultQuery] = await db.execute(
    "select email from users where email = ?",
    [email],
  );

  if (resultQuery[0]) {
    return true;
  } else {
    return false;
  }
};
