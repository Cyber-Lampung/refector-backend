const filterJobs = require("../../utils/filterJobs.js");

module.exports = async function getLokerService() {
  // api search jobs = /countries => searcb by country
  //api search jobs = /job/search => search by keyword, location, remote, type, size, page
  const API_KEY = "https://api.apijobs.dev/v1/job/search";
  const API_KEY2 = "https://findwork.dev/api/jobs/ ";

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

  const API2 = await fetch(API_KEY2, {
    method: "GET",
    headers: {
      Authorization: "Token a2db2eef822dce4c2590fd961decece29b0128b9",
    },
  });

  const data = await response.json(); // => data api 1
  const resApi2 = await API2.json(); // => data api 2

  const allJobs = [...data, ...resApi2];

  //   const resFilterJobs = await filterJobs(data.hits);

  return { status: "succes", message: "suscces get data jobs", data: resApi2 };
};
