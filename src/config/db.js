const mysql2 = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();

const db = mysql2.createPool({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.PORT_MYSQL,
  database: process.env.DATABASE,
  waitForConnections: true, // Tambahkan ini agar aplikasi menunggu koneksi tersedia
  queueLimit: true,
  connectionLimit: 10,
  timezone: "Asia/Jakarta",
  dateStrings: true,
});

module.exports = db;
