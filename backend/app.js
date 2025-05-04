const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const usersController = require("./app/user/user.controller");

const app = express(); // Pindahkan ini ke atas sebelum pemanggilan app.use

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Menyajikan file statis dari folder public dan frontend
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Routing API
app.use("/", usersController);

// Menangani permintaan lainnya dengan mengembalikan index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

module.exports = app;
