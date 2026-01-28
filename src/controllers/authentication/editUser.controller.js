const editUserService = require("../../services/authentication/editUser.service.js");

module.exports = async function editUserController(req, res, next) {
  try {
    const headerToken = req.headers["authorization"];
    const token = headerToken.split(" ")[1];

    // ambil data edit dari body

    const { email, username, password } = req.body;

    // kirim ke edit service
    const response = await editUserService(email, username, password, token);

    if (response.status === "success") {
      return res
        .status(200)
        .json({ status: "success", message: response.message });
    } else {
      return res
        .status(400)
        .json({ status: "failed", message: response.message });
    }
  } catch {
    return res.status(400).json({ status: "invalid", message: "bad request" });
  }
};
