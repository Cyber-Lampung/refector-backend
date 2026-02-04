const db = require("../../../config/db.js");

module.exports = async function mountAllJobsModel() {
  const [responseQuery] = await db.query("select * from jobs limit 50");

  if (responseQuery[0]) {
    return responseQuery;
  }
};
