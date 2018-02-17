const express = require('express');
const parse = require('body-parser');
let app = express();

app.use();
app.use(parse.urlencoded({ extended: true }));
app.use(parse.json());

// routes
app.post('/phrases', function(req, res) {
  // extract phrase submitted for translation
  // check database for phrase
    // if not in database,
      // get from google translate
      // and add to database
  // redirect user to get('/phrases')
  //
});

app.get('/phrases', function(req, res) {
  // send phrases stored in database
});

app.delete('/phrases', function(req, res) {
  // extract phrase submitted for deletion
  // search database for phrase
    // if in database,
      // delete from database
      // and send success message
    // else send error message
})

let port = 3000;

app.listen(port, function() {
  console.log(`Listening on port: ${port}`);
});