const getAllUserService = require("../../services/authentication/getAllUser.service");

module.exports = async function getAllUser(req, res, next) {
  try {
    const { status, message, data } = await getAllUserService();

    // "succes get all user"
    if (status) {
      return res
        .status(200)
        .json({ status: "succes", message: message, data: data });
    } else {
      return res.status(404).json({ status: status, message: message });
    }
  } catch {
    return res.status(400).json({ status: "error", message: "bad request" });
  }
};
