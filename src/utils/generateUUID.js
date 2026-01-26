const { v4: uuidv4 } = require("uuid");

async function generateUUID() {
  const uuid = await uuidv4();

  return uuid;
}

module.exports = generateUUID;
