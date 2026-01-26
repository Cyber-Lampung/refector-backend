const registerService = require("../../services/authentication/Register.service.js");

async function RegisterController(req, res, next) {
  const { email, username, password } = req.body;

  const responseService = await registerService(email, username, password);

  console.log(responseService);
}

module.exports = { RegisterController };
