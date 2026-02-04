const db = require("../../../config/db.js");

module.exports = async function getAllUserModel() {
  const [queryResult] = await db.query("select * from users");

  return queryResult[0];
};
