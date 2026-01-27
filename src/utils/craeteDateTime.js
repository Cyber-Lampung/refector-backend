function createDateTime() {
  const now = new Date();

  const date = now.toISOString().slice(0, 19).replace("T", " ");

  return date;
}

module.exports = createDateTime;
