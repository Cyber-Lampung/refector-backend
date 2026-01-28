const loginService = require("../../services/authentication/login.service.js");

module.exports = async function loginControllers(req, res, next) {
  try {
    const { email, password } = req.body;

    const responseService = await loginService(email, password);

    if (responseService.status === "success") {
      res.cookie("session", responseService.session, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
      });

      return res
        .status(200)
        .json({ status: "success", message: responseService.message });
    } else if (responseService.status === "invalid") {
      return res
        .status(401)
        .json({ status: "invalid", message: responseService.message });
    }
  } catch {
    return res.status(400).json({ status: "invalid", message: "bad request" });
  }
};
