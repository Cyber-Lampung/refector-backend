const checkUserService = require("../../services/authentication/checkUser.service");

module.exports = async function checkUserController(req, res, next) {
  try {
    // ambil header authorization
    const authHeader = req.headers.authorization;
    const splitAuthHeader = authHeader.split(" ")[1];

    // check split header apakah di edit atau tidak
    if (!splitAuthHeader) {
      return res
        .status(401)
        .json({ status: "invalid", message: "unauthorized" });
    }

    // balikan status, message dan data user
    const response = await checkUserService(splitAuthHeader);

    // check response 404 status jika tidak success
    if (response.status !== "success") {
      return res.status(404).json({
        status: "failed",
        message: response.message,
      });
    }

    // return 200 jika berhasil
    return res.status(200).json({
      status: "success",
      message: response.message,
      data: response.data,
    });
    // console.log(response);
  } catch {
    return res.status(400).json({ status: "invalid", message: "bad request" });
  }
};
