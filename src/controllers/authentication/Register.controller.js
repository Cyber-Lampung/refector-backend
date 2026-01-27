const registerService = require("../../services/authentication/Register.service.js");

async function RegisterController(req, res, next) {
  const { email, username, password } = req.body;

  const { status, message } = await registerService(email, username, password);

  if (status) {
    return res.status(201).json({ status: "succes", message });
  } else {
    return res.status(204).json({ status: "invalid", message });
  }
}

module.exports = { RegisterController };
