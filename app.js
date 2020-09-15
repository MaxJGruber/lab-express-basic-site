const express = require("express");
const app = express();
const hbs = require("hbs");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/works", (req, res) => {
  res.render("works");
});

app.get("/photo-gallery", (req, res) => {
  res.render("photo-gallery");
});

app.listen(8888, () => {
  console.log(`Server is running at http://localhost:8888`);
});
