const moment = require("moment");
const express = require("express");
const path = require("path");
const app = express();
const Year = require("./assets/js/year.json");
const port = process.env.PORT || 3000;

app.use(express.static("assets"));
app.use(express.static(path.join(__dirname, "assets")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/calendar", function (req, res) {
  res.sendFile(path.join(__dirname, "/assets/pages/calendar.html"));
});

app.get("/appointments", function (req, res) {
  res.sendFile(path.join(__dirname, "/assets/pages/appointments.html"));
});

app.post("/credentials", function (req, res) {
  res.sendFile(path.join(__dirname, "/assets/pages/creds.html"));
});

app.get("/list", function (req, res) {
  res.sendFile(path.join(__dirname, "/assets/pages/list.html"));
});
////////////////////////////////
app.listen(port, function () {
  console.log("Listening");
});
