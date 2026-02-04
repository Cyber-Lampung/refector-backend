const saveJobs = require("../../model/repository/loker/saveJobs.js");

module.exports = async function getLokerService() {
  // api search jobs = /countries => searcb by country
  //api search jobs = /job/search => search by keyword, location, remote, type, size, page
  const API_KEY = "https://api.apijobs.dev/v1/job/search"; // => enpoint utama
  // const API_KEY2 = "https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=2d284a45&app_key=4d50b9dd8bcc27b5d6741478e052f68c"; // secodary endpoint

  // apikey

  const findWorkJobs = process.env.apiKeyFindWork;

  //   const API_KEY = "https://api.apijobs.dev/v1/job/search";

  // query documentasi apijobs

  const response = await fetch(API_KEY, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: process.env.apikeyApiJobs,
    },
    body: JSON.stringify({
      // param => q, location, page, size
      sort_by: "created_at",
      size: 1000,
      from: 0,
    }),
  });

  // let dataJobs;

  // for (let i = 1; i < 30; i++) {
  //   try {
  //     const API2 = await fetch(
  //       `https://api.adzuna.com/v1/api/jobs/in/search/${i}?app_id=2d284a45&app_key=dee5bfe08d625031f95e447955c69af2`,
  //       {
  //         method: "GET",
  //         headers: {
  //           accept: "application/json",
  //         },
  //       },
  //     );

  //     const list = await API2.json();
  //     dataJobs = list.results;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // let answerQueryResult;

  // dataJobs.map(async (jobsList) => {
  //   const jobs_id = jobsList.id;
  //   const jobs_title = jobsList.title;
  //   const jobs_company_name = jobsList.company.display_name;
  //   const jobs_location = jobsList.location.display_name;
  //   const jobs_created = jobsList.created;
  //   const jobs_tag = jobsList.category.tag;

  //   const jobs_subJudul = {
  //     jobs_descriptions: jobsList.description,
  //     jobs_salary_is_predicted: jobsList.salary_is_predicted,
  //     jobs_adref: jobsList.adref,
  //     jobs_url: jobsList.redirect_url,
  //     jobs_longitude: jobsList.longitude,
  //     jobs_latitude: jobsList.latitude,
  //   };

  //   const convertJsonJobs = JSON.stringify(jobs_subJudul);

  //   const responseQuery = await saveJobs(
  //     jobs_id,
  //     jobs_title,
  //     jobs_company_name,
  //     jobs_location,
  //     jobs_created,
  //     jobs_tag,
  //     convertJsonJobs,
  //   );

  //   answerQueryResult = await responseQuery;

  //   // console.log(jobs_company_name);
  // });

  const data = await response.json(); // => data api 1 next untuk ambil data jobs lagi
  // const resApi2 = await API2.json(); // => data api 2

  // save jobs
  const jobs = saveJobs(JSON.stringify(data));

  //   const resFilterJobs = await filterJobs(data.hits);
  // const allJobs = [...data.hits, ...resApi2.results];

  // const jobsList = allJobs.map((items) => {
  //   return (jobsFilter = {
  //     jobsId: items.id,
  //     titleJobs: items.title || items.role,
  //     jobsDesc: items.description || items.text,
  //     jobsSkill: items.skills_requirements || items.keywords,
  //     jobsCompanyName: items.url || items.company_name,
  //     jobsType: items.employment_type || ["remote", "full time", "hybrid"],
  //     remote: items.remote || false,
  //   });
  // });

  // const filterSakary = await regexSalary.test(data.hits.description);

  // if (filterSakary) {
  //   console.log(true);
  // }

  // if (answerQueryResult) {
  //   return {
  //     status: "succes",
  //     message: "suscces get data jobs",
  //     list: "succes save jobs in db",
  //   };
  // } else {
  //   return {
  //     status: "invalid",
  //     message: "invalid get data jobs",
  //     list: "invalid save jobs in db",
  //   };
  // }

  if (jobs) {
    return { status: "succes", message: "testing get data" };
  } else {
    return { status: "invalid", message: "invalid save jobs" };
  }
};
