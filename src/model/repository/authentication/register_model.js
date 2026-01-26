const db = require("../../../config/db.js");

module.exports = async function registerModel(
  user_id,
  email,
  username,
  password,
  created_at,
) {
  // result query

  const [result] = await db.execute(
    "insert into users (user_id, email, username, password, created_at) values (?, ?, ?, ?, ?)",
    [user_id, email, username, password, created_at],
  );

  return result;
};
