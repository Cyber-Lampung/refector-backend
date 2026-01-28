function Time() {
  function createDateTime() {
    const now = new Date();

    const date = new Date(
      now.toLocaleString("sv-SE", { timeZone: "Asia/Jakarta" }),
    )
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

    return date;
    // console.log(date);
  }

  function expiresAt() {
    const ex = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      .toLocaleString("sv-SE", { timeZone: "Asia/Jakarta" })
      .slice(0, 19)
      .replace("T", " ");

    return ex;
  }

  return { createDateTime, expiresAt };
}

module.exports = Time;
