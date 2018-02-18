const express = require('express');
const db = require('../database/index.js');
const parse = require('body-parser');
const googleTrans = require('../helpers/googleTranslate.js');
const cors = require ('cors');
const path = require ('path');
let app = express();

app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.static(__dirname + '/../client/src/components'));
app.use(express.static(__dirname + '/../client/src/data'));
app.use(express.static(__dirname + '/../client/src/services'));
app.use(parse.urlencoded({ extended: true }));
app.use(parse.json());

// routes
app.post('/phrases', function(req, res) {
  let phrase = req.body;// extract phrase submitted for translation
  console.log('Phrase submitted for search [server-index]: ', phrase);
  // db.save(phrase);
  db.lookFor(phrase, function(err, result) {
    if (err) throw Error;
    if (result === 0) {
      googleTrans.getTranslation(phrase, function(err, result) {
        if (err) throw Error;
        let text = result.data.translations[0].translatedText;
        let remadePhrase = {
          phrase: phrase.phrase,
          targetL: phrase.target,
          sourceL: phrase.source,
          translatedText: text
        };
        db.save(remadePhrase);
        res.redirect('/phrases');
      });
    } else {
      res.redirect('/phrases');
    }
  });
});

app.get('/phrases', function(req, res) {
  db.fetchPhrases(function(err, results) {
    console.log('server.js line 45, get request returns : ', results);
    if (err) throw Error;
    res.send(results);
  });// send phrases stored in database
});

app.delete('/phrases', function(req, res) {
  let phrase = req.body;
  db.remove(phrase);
})

let port = 3000;

app.listen(port, function() {
  console.log(`Listening on port: ${port}`);
});