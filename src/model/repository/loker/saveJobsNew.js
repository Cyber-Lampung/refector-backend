const db = require("../../../config/db.js");

module.exports = async function saveNewJobs(allJobsData) {
  const values = allJobsData.map((job) => [
    job.jobs_id,
    job.jobs_title,
    job.jobs_contry,
    job.jobs_city,
    job.jobs_region,
    job.jobs_created,
    job.jobs_publish_at,
    job.jobs_logo_company,
    job.jobs_name_hiring,
    JSON.stringify(job.extra_jobs_desc),
  ]);

  const sql =
    "insert ignore into jobs (jobs_id, jobs_title, jobs_contry, jobs_city, jobs_region, jobs_created, jobs_publish_at, jobs_logo_company, jobs_name_hiring, extra_jobs_desc) values ?";

  const [queryResult] = await db.query(sql, [values]);

  if (queryResult.affectedRows > 0) {
    return true;
  } else {
    return false;
  }
};
