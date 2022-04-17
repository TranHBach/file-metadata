const path = require("path");
const express = require("express");

const app = express();
const multer = require("multer");
app.set("view engine", "ejs");
app.set("views", "views");


app.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, GET, POST, PUT, PATCH, DELETE",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  next();
});
app.use(multer().single("upfile"));

app.use("/api/fileanalyse", (req, res, next) => {
  return res.json({name: req.file.originalname, type: req.file.mimetype, size: req.file.size})
});

app.use("/", (req, res, next) => {
  return res.render("index");
});

app.listen(process.env.PORT || 3000);
