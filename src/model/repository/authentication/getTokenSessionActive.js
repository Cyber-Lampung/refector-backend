const db = require("../../../config/db.js");

module.exports = async function getTokenSessionActive(user_id) {
  // console.log(user_id);
  const [rowGetSessionActive] = await db.query(
    "SELECT session_token FROM sessions WHERE user_id = ?",
    [user_id],
  );

  // console.log(rowGetSessionActive[0]);

  if (rowGetSessionActive[0]) {
    return rowGetSessionActive[0];
  } else {
    return false;
  }
};
