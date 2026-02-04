const mountAllJobsModel = require("../../model/repository/loker/mountAllJob.js");

module.exports = async function mountAllJobs() {
  const responseQuery = await mountAllJobsModel();

  return responseQuery;
};
