// declarar constante express
const express = require("express");
// declarar constante app
const app = express();
// declarar constante port
const port = 3000;

// definir caminho para a pasta public
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// definir view engine ejs
app.set("view engine", "ejs");

// middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Página Principal
app.get("/", (req, res) => {
  res.render("index");
});

// Primeira Parte
app.get("/01-conceitos-fundamentais", (req, res) => {
  res.render("01-conceitos-fundamentais");
});
app.get("/02-construcao-de-layout", (req, res) => {
  res.render("02-construcao-de-layout");
});
app.get("/03-flexbox", (req, res) => {
  res.render("03-flexbox");
});
app.get("/04-grid", (req, res) => {
  res.render("04-grid");
});
app.get("/05-customizar-tailwind", (req, res) => {
  res.render("05-customizar-tailwind");
});

// Projetos Práticos
app.get("/01-spotify", (req, res) => {
  res.render("01-spotify");
});
app.get("/02-facebook", (req, res) => {
  res.render("02-facebook");
});
app.get("/01-spotify", (req, res) => {
  res.render("01-spotify");
});

// Segunda Parte
app.get("/01-espacamento-e-alinhamento-flex", (req, res) => {
  res.render("01-espacamento-e-alinhamento-flex");
});
app.get("/02-espacamento-e-alinhamento-grid", (req, res) => {
  res.render("02-espacamento-e-alinhamento-grid");
});
app.get("/03-padding-margin", (req, res) => {
  res.render("03-padding-margin");
});
app.get("/04-tipografia", (req, res) => {
  res.render("04-tipografia");
});
app.get("/05-backgrounds", (req, res) => {
  res.render("05-backgrounds");
});

app.get("/01-bordas", (req, res) => {
  res.render("01-bordas");
});

app.get("/01-dark-mode", (req, res) => {
  res.render("01-dark-mode");
});
app.get("/02-forms", (req, res) => {
  res.render("02-forms");
});

app.listen(port, () => console.log("Server running on port " + port));
