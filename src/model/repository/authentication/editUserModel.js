const db = require("../../../config/db.js");

module.exports = async function editUserModel(fieldsString, values) {
  const [result] = await db.query(
    `UPDATE users SET ${fieldsString} WHERE user_id = ?`,
    values,
  );

  if (result.affectedRows === 0) {
    return null;
  }

  return {
    status: "success",
    message: "user updated successfully",
  };
};
