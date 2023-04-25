const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const multer = require("multer");
const upload = multer();

app.use(express.static("public"));
app.use(express.static("css"));

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

app.get("/views/ex1.html", (request, response) => {
  response.sendFile(`${__dirname}/views/ex1.html`);
});

app.post("/views/ex1.html", upload.array(), (request, response) => {
  const name = request.body.name;
  const email = request.body.email;
  response.send(`Thank You! ${name}, we will keep you updated at: ${email}`);
});

app.get("/views/ex2.html", (request, response) => {
  response.sendFile(`${__dirname}/views/ex2.html`);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Initialize array of articles
const articles = [];

// Get the maximum article ID among existing articles
const getMaxArticleId = () => {
  if (articles.length === 0) {
    return 0;
  }
  return Math.max(...articles.map((article) => article.id));
};

// Add a new article
app.post("/articles", (req, res) => {
  const newArticle = {
    id: getMaxArticleId() + 1,
    title: req.body.title,
    content: req.body.content,
  };
  articles.push(newArticle);
  res.json({ id: newArticle.id, title: newArticle.title });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
