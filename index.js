const express = require("express");
const app = express();
const port = 5000;

const cors = require("cors");
app.use(cors());

// require blogs api
const blogs = require("./data/blogs.json");

app.get("/", (req, res) => {
  res.send(`server is running on ${port} port`);
});

app.get("/blogs", (req, res) => {
  res.send(blogs);
});

app.listen(port, () => {
  console.log(`server run ${port}`);
});
