function mitigasiSql(req, res, next) {
  // create regex sql injection

  const regexSqlInjection = /(-`#=&%-)/;

  const { email, username, password } = req.body;

  if (
    regexSqlInjection.test(email) ||
    regexSqlInjection.test(username) ||
    regexSqlInjection.test(password)
  ) {
    return res
      .status(403)
      .json({ status: "invalid", message: "invalid terdeteksi sql injection" });
  }

  next();
}

module.exports = mitigasiSql;
