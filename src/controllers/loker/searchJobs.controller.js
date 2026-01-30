module.exports = async function searchJobsController(req, res, next) {
  const { nameJobs } = req.body;

  const tokenHeader = req.headers["authorization"].split(" ")[1];

  if (!tokenHeader) {
    return res.status(401).json({ status: "invalid", message: "Unauthorized" });
  }

  const response = await fetch("http://localhost:5000/api/loker_list", {
    method: "POST",
  });

  const jobs = (await response).json();

  console.log(jobs);
};
