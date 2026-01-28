const db = require("../../../config/db.js");

module.exports = async function saveSessionsModel(
  sessions_id,
  user_id,
  createSessions,
) {
  // console.log(sessions_id, user_id, createSessions, created_at, expiresAt); => testing

  const [queryResult] = await db.query(
    "INSERT INTO sessions (session_id, user_id, session_token, created_at, expires_at) VALUES (?, ?, ?, NOW(), DATE_ADD(NOW(), INTERVAL 7 DAY))",
    [sessions_id, user_id, createSessions],
  );

  if (queryResult.affectedRows > 0) {
    return { created: true, data: createSessions };
  } else {
    return { created: false, data: [] };
  }
};
