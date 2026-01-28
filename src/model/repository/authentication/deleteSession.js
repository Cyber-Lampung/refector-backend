const db = require("../../../config/db.js");

module.exports = async function deleteSessionTokenDb(user_id) {
  // kode untuk menghapus session token dari database
  const [queryResult] = await db.query(
    "DELETE FROM sessions WHERE user_id = ?",
    [user_id],
  );

  if (queryResult.affectedRows > 0) {
    return true;
  } else {
    return false;
  }
};
