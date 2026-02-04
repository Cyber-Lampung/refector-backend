const db = require("../../config/db.js");
const saveJobsNew = require("../../model/repository/loker/saveJobsNew.js");

// ini untuk filterisasi jobs dan normalisasi dan optimasi query di dalam databse
module.exports = async function filtersisasiJobs() {
  const getJobsInDb = await db.query("select jobs_testing from jobs_testing");

  const jobs = getJobsInDb[0][0].jobs_testing.hits;

  let resQuery;

  jobs.map(async (jobsList) => {
    const jobs_id = jobsList.id;
    const jobs_title = jobsList.title;
    const jobs_contry = jobsList.country;
    const jobs_city = jobsList.city;
    const jobs_region = jobsList.region;
    const jobs_created = jobsList.created_at;
    const jobs_publish_at = jobsList.published_at;
    const jobs_logo_company = jobsList.hiring_organization_logo;
    const jobs_name_hiring = jobsList.hiring_organization_name;

    const extra_jobs_desc = {
      jobs_descriptions: jobsList.description,
      jobs_url: jobsList.url,
      jobs_website: jobsList.website,
    };

    // const convertJobsExtraJsonStringify = JSON.stringify(extra_jobs_desc);

    const allJobsData = [
      {
        jobs_id,
        jobs_title,
        jobs_contry,
        jobs_city,
        jobs_region,
        jobs_created,
        jobs_publish_at,
        jobs_logo_company,
        jobs_name_hiring,
        extra_jobs_desc,
      },
    ];

    const resQuerySaveJobs = await saveJobsNew(allJobsData);

    if (resQuerySaveJobs === true) {
      resQuery = true;
    } else {
      resQuery = false;
    }
  });

  if (resQuery === true) {
    return {
      status: "succes",
      message: "succes save data in db",
    };
  } else {
    return {
      status: "invalid",
      message: "invalid save data in db",
    };
  }
};
