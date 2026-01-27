const db = require("../../../config/db.js");

module.exports = async function saveSessionsModel(
  sessions_id,
  user_id,
  createSessions,
  created_at,
  expiresAt,
) {
  // console.log(sessions_id, user_id, createSessions, created_at, expiresAt); => testing

  const [queryResult] = await db.query(
    "INSERT INTO sessions (session_id, user_id, session_token, created_at, expires_at) VALUES (?, ?, ?, ?, ?)",
    [sessions_id, user_id, createSessions, created_at, expiresAt],
  );

  if (queryResult.affectedRows > 0) {
    return { created: true, data: createSessions };
  } else {
    return { created: false, data: [] };
  }
};
