const db = require("../../../config/db.js");

async function registerModel(user_id, email, username, password, created_at) {
  // console.log(user_id, email, username, password, created_at);
  // result query
  const [queryResult] = await db.query(
    "insert into users (user_id, email, username, password, created_at) values (?, ?, ?, ?, NOW())",
    [user_id, email, username, password, created_at],
  );

  if (queryResult.affectedRows > 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = registerModel;
