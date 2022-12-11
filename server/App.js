const express = require("express");
const multer = require("multer");
const cors = require("cors");
const mysql = require("mysql");
const fs = require("fs");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_siperum",
});

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server has been starting at port " + PORT);
});
app.use(cors());
app.use(express.static("public"));

const storage = multer.diskStorage({
  destination: "./public/images",
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage }).single("file");

app.get("/", (req, res) => {
  pool.query("SELECT * FROM users", (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(result);
  });
});
app.post("/", (req, res) => {
  upload(req, res, (err) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email + password);
    let sql = `SELECT * FROM users WHERE email = "${email}" AND password = "${password}"  `;
    pool.query(sql, (err, result) => {
      if (err) throw err;
      return res.status(200).json(result[0]);
    });
  });
});
