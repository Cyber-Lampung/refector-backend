const db = require("../../../config/db.js");

module.exports = async function searchLocationInDb() {
  const [responseQuery] = await db.query("select * from jobs");

  return responseQuery;
};
