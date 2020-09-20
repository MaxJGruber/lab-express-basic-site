const express = require("express");
const app = express();
const hbs = require("hbs");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
  res.render("home", { css: ["styles"] });
});

app.get("/about", (req, res) => {
  res.render("about", { css: ["styles"] });
});

app.get("/works", (req, res) => {
  res.render("works");
});

app.get("/photo-gallery", (req, res) => {
  res.render("gallery", {
    imgs: [
      "DG1.jpg",
      "DG2.jpg",
      "DG3.jpg",
      "DG4.jpg",
      "DG5.jpg",
      "DG6.jpg",
      "DG7.jpg",
      "DG8.jpg",
      "DG9.jpg",
    ],
    css: ["styles"],
  });
});

app.listen(8888, () => {
  console.log(`Server is running at http://localhost:8888`);
});
