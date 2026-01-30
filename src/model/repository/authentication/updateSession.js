const db = require("../../../config/db.js");

module.exports = async function updateSession(
  session_id,
  user_id,
  sessions_token_hash,
) {
  const [queryResult] = await db.query(
    "insert into sessions (session_id, user_id, session_token, created_at, expires_at, used) values (?, ?, ?, now(), date_add(now(), interval 7 day), 1)",
    [session_id, user_id, sessions_token_hash],
  );

  if (queryResult.affectedRows > 0) {
    return true;
  } else {
    return false;
  }
};
