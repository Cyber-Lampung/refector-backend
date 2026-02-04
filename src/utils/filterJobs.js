module.exports = async function filterJobs(jobs) {
  const jobTypeRegex = {
    fulltime: /\b(full[\s-]?time|permanent)\b/i,
    parttime: /\b(part[\s-]?time)\b/i,
    freelance: /\b(freelance|contractor)\b/i,
    contract: /\b(contract|fixed[\s-]?term)\b/i,
    remote: /\b(remote|work from home|wfh)\b/i,
    salary: /Salary/,
  };

  const result = [];

  for (const [type, regex] of Object.entries(jobTypeRegex)) {
    if (regex.test(jobs)) result.push(type);
  }

  return result.length ? result : ["unknown"];
};
