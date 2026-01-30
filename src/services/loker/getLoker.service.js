const filterJobs = require("../../utils/filterJobs.js");

module.exports = async function getLokerService() {
  // api search jobs = /countries => searcb by country
  //api search jobs = /job/search => search by keyword, location, remote, type, size, page
  const API_KEY = "https://api.apijobs.dev/v1/job/search";

  //   const API_KEY = "https://api.apijobs.dev/v1/job/search";

  // query documentasi apijobs

  const response = await fetch(API_KEY, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: process.env.apikey,
    },
    body: JSON.stringify({
      // param => q, location, page, size
      size: 50,
    }),
  });

  const data = await response.json();

  //   const resFilterJobs = await filterJobs(data.hits);

  return { status: "succes", message: "suscces get data jobs", data: data };
};
