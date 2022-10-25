const express = require("express");
const app = express();
const port = 5000;

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send(`server is running on ${port} port`);
});

app.listen(port, () => {
  console.log(`server run ${port}`);
});
