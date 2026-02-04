const db = require("../../../config/db.js");

module.exports = async function saveJobs(jobs_testing) {
  const [resultQuery] = await db.query(
    "insert into jobs_testing (jobs_testing_id, jobs_testing, created_at) values (1, ?, NOW())",
    [jobs_testing],
  );

  if (resultQuery.affectedRows > 0) {
    return true;
  } else {
    return false;
  }
};
