const mysql2 = require("mysql2");

const db = mysql2.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.PORT_MYSQL,
  database: process.env.DATABASE,
  waitForConnections: true, // Tambahkan ini agar aplikasi menunggu koneksi tersedia
  queueLimit: true,
  connectionLimit: 10,
});

module.exports = db;
