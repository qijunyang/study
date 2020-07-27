var express = require('express');
var app = express();

app.get("/api/user", (req, res) => {
  res.send("this is user");
});
app.get("/api/book", (req, res) => {
  res.send("this is book");
});

app.listen(8080);