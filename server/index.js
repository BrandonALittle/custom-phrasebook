const express = require('express');
const db = require('../database.index.js');
const parse = require('body-parser');
const googleTrans = require('../helpers/googleTranslate.js');
let app = express();

// app.use();
app.use(parse.urlencoded({ extended: true }));
app.use(parse.json());

// routes
app.post('/phrases', function(req, res) {
  let phrase = req.body.query;// extract phrase submitted for translation
  db.fetchPhrases(phrase, function(err, results) {// check database for phrase
    if (err) throw Error;
    if (!results.length) {// if not in database,
      googleTrans(phrase, function(err, result) {// get from google translate
        db.save(result);// and add to database
      });
    }
  });
  // redirect user to get('/phrases') //TODO//
});

app.get('/phrases', function(req, res) {
  let phrases = db.fetchPhrases();// send phrases stored in database
});

app.delete('/phrases', function(req, res) {
  let phrase = req.body.query;// extract phrase submitted for deletion
  db.fetchPhrase(// search database for phrase
    // if in database,
      // delete from database
      // and send success message
    // else send error message
})

let port = 3000;

app.listen(port, function() {
  console.log(`Listening on port: ${port}`);
});