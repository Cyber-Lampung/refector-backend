function createDateTime() {
  const date = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });

  return date;
}

module.exports = createDateTime;
