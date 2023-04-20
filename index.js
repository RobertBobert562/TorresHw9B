// // Load the Express package as a module
// const express = require("express");

// // Access the exported service
// const app = express();

// const bodyParser = require('body-parser');

// // Enable CORS (see https://enable-cors.org/server_expressjs.html)
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// // Load the multer package as a module
// const multer = require("multer");

// // Access the exported service
// const upload = multer();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// // Serve content of the "public" subfolder directly
// app.use(express.static("public"));
// // Serve content of the "public and css" subfolder directly
// app.use(express.static("css"));

// app.set('views', './views');
// app.set('view engine', 'ejs');

// // Return the index.html for requests to the root URL ("/")
// app.get("/", (request, response) => {
//   //response.send("Hello from Express!");
//   response.sendFile(`${__dirname}/views/index.html`);
// });

// // Return a web page for requests to "/hello"
// app.get("/views/ex1.html", (request, response) => {
//   response.sendFile(`${__dirname}/views/ex1.html`);
// });

// // Handle form data submission to the "/animals" route
// app.post("/views/ex1.html", upload.array(), (request, response) => {
//   const name = request.body.name;
//   const email = request.body.email;
//   response.send(`Thank You! ${name}, we will keep you updated at: ${email}`);
// });

// // Return a web page for requests to "/ex2"
// app.get("/views/ex2.html", (request, response) => {
//   response.sendFile(`${__dirname}/views/ex2.html`);
// });
// app.post('/views/ex2.html', (req, res) => {
//   const { name, countries } = req.body;
//   const numCountries = countries.length;
//   const message = `Thank you, ${name}! You have visited ${numCountries} countries.`;
//   res.json({ message });
// });

// // Start listening to incoming requests
// // If process.env.PORT is not defined, port number 3000 is used
// const listener = app.listen(process.env.PORT || 3000, () => {
//   console.log(`Your app is listening on port ${listener.address().port}`);
// });


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

app.post("/views/ex2.html", (req, res) => {
  const { name, countries } = req.body;
  const numCountries = countries.length;
  const message = `Thank you, ${name}! You have visited ${numCountries} countries.`;
  res.json({ message });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
