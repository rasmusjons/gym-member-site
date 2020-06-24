const express = require("express");
const app = express();
const port = 3002;

app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  response.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

  next();
});

app.post("/users", function(req, res) {
  console.log(req.data);
  res.send();
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
