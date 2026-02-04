const searchJobsByLocation = require("../../model/repository/loker/searchJobsByLocation");

module.exports = async function searchJobsByCountyService(country, city) {
  const vulnMitigasi = /(--|)(`)/.test(country);

  if (vulnMitigasi) {
    return {
      status: "invalid",
      message: "invalid detection syntaxt not allowed",
    };
  }

  const getLocationByDb = await searchJobsByLocation();

  const filter_country_lowerCase = getLocationByDb.map((jobs) => {
    return {
      jobs_country: jobs.jobs_contry.toLowerCase(),
      jobs_city: jobs.jobs_city.toLowerCase(),
    };
  });

  const validasi = filter_country_lowerCase.map((test) => {
    const isValid = test.jobs_country === country.toLowerCase();

    if (isValid) {
      return test;
    }
  });
  return {
    status: "success",
    message: "succes get location",
    jobs: validasi,
  };
};
