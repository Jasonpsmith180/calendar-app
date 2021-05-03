const path = require("path");
const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;
const exphbs = require("express-handlebars");

const session = require("express-session");

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {
    expires: 60 * 1000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));

const moment = require("moment");
const express = require("express");
const path = require("path");
const app = express();
const Year = require("./assets/js/year.json");
const exphbs = require('express-handlebars');
const port = process.env.PORT || 3000;

app.use(express.static("assets"));
app.use(express.static(path.join(__dirname, "assets")));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

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
