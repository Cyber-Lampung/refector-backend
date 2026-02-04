const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const token = require("../utils/generateToken.js");
dotenv.config();

module.exports = async function nodemailerConfig(email) {
  const tokenVerif = token();

  const transport = nodemailer.createTransport({
    service: "gmail",
    port: process.env.port_sntp,
    auth: {
      user: process.env.host_sntp,
      pass: process.env.googlePasswordApp,
    },
  });

  const send = await transport.sendMail({
    from: process.env.host_sntp,
    to: email,
    subject: "verifikasi token keamanan aplikasi jobs search",
    text: `berikut adalah token untuk verifikasi akun anda : ${tokenVerif} `,
  });

  if (send.messageId) {
    return true;
  } else {
    return false;
  }
};
