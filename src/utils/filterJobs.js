module.exports = async function filterJobs(jobs) {
  const text =
    jobs.title +
    " "(jobs.descriptions || "") +
    " "(jobs.website || "").tolowercase();

  console.log(text);
};
