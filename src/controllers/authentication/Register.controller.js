const registerService = require("../../services/authentication/Register.service.js");

async function RegisterController(req, res, next) {
  const { email, username, password } = req.body;

  const { status, messagse, data } = await registerService(
    email,
    username,
    password,
  );

  if (status) {
    res.cookie("session", data, {
      httpOnly: true,
      secure: true,
      sameSite: "lax" || "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({ status: status, message });
  } else {
    return res.status(204).json({ status: status, message });
  }
}

module.exports = { RegisterController };
