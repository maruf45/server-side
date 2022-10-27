const express = require("express");
const app = express();
const port = 5000;

const cors = require("cors");
app.use(cors());

// require blogs api
const blogs = require("./data/blogs.json");

// require categories api
const categories = require("./data/categories.json");
const course = require("./data/course.json");
const faq = require('./data/faq.json')
app.get("/", (req, res) => {
  res.send(`server is running on ${port} port`);
});

app.get("/blogs", (req, res) => {
  res.send(blogs);
});

app.get("/faq", (req, res) => {
  res.send(faq);
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  if (id === "7") {
    res.send(course);
  } else {
    const selectedCategory = course.filter((c) => c.category_id === id);
    res.send(selectedCategory);
  }
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = course.find((c) => c.id === id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log(`server run ${port}`);
});
