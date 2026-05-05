const express = require("express");
const app = express();
const path = require("node:path");

const indexRouter = require("./routers/indexRouter");
const newRouter = require("./routers/newRouter");

//View engine
app.set("view engine", "ejs");

//Static assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

//Routes
app.get("/new", (req, res) => {
  res.render("index", { title: "New" });
});

const messages = [
  {
    title: "First message",
    message: "Hello, this is a message",
  },
  {
    title: "Hello, World!",
    message: "Hello, hello!",
  },
];

app.get("/", (req, res) => {
  res.render("index", { title: "Home", messages });
});

app.use(express.urlencoded({ extended: true }));

app.post("/new", (req, res) => {
  const title = req.body.title;
  const message = req.body.message;

  messages.push({ title, message });

  res.redirect("/");
});

app.use((req, res) => {
  res.status(404).render("404");
});

//Listen for request
const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Listening on port: ${PORT}`);
});
