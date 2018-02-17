const express = require('express');
const parse = require('body-parser');
let app = express();

app.use();
app.use(parse.urlencoded({ extended: true }));
app.use(parse.json());

// routes

app.post();

app.get();

let port = 3000;

app.listen(port, function() {
  console.log(`Listening on port: ${port}`);
});