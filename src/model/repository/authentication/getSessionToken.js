const db = require("../../../config/db.js");

module.exports = async function getSessionTokenFromDb(user_id) {
  const [queryResult] = await db.query(
    "SELECT * FROM sessions WHERE user_id = ?",
    [user_id],
  );

  console.log(queryResult);

  return queryResult[0].session_token;
};
