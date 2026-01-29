const db = require("../../../config/db.js");

module.exports = async function getAllUserList() {
  const [resultQuery] = await db.query("SELECT * FROM users");

  return {
    status: "success",
    data: resultQuery,
  };
};
