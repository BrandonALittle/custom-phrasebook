const express = require('express');
const db = require('../database/index.js');
const parse = require('body-parser');
const googleTrans = require('../helpers/googleTranslate.js');
const cors = require ('cors');
let app = express();

app.use(cors());
app.use(express.static(__dirname + '/../client/dist/'));
app.use(parse.urlencoded({ extended: true }));
app.use(parse.json());

// routes
app.post('/phrases', function(req, res) {
  let phrase = req.body;// extract phrase submitted for translation
  // console.log('Phrase submitted for search [server-index]: ', phrase);
  // db.save(phrase);
  googleTrans.getTranslation(phrase, function(err, result) {
    if (err) throw Error;
    let text = result.data.translations[0].translatedText;
    console.log(text);
    let remadePhrase = {
      phrase: phrase.phrase,
      targetL: phrase.target,
      sourceL: phrase.source,
      translatedText: text
    };
    db.save(remadePhrase);
    // db.find(phrase, function(err, result) {
    //   console.log(result);
    // });
  });
  // db.fetchPhrases(phrase, function(err, results) {// check database for phrase
  //   if (err) throw Error;
  //   if (!results.length) {// if not in database,
  //     googleTrans(phrase, function(err, result) {// get from google translate
  //       if (err) throw Error;
  //       db.save(result);// and add to database
  //     });
  //   }
  // });
  // redirect user to get('/phrases') //TODO//
});

app.get('/phrases', function(req, res) {
  db.fetchPhrases(function(err, results) {
    if (err) throw Error;
    res.send(results);
  });// send phrases stored in database
});

app.delete('/phrases', function(req, res) {
  let phrase = req.body.query;// extract phrase submitted for deletion
  db.remove(phrase);
  res.end();
})

let port = 3000;

app.listen(port, function() {
  console.log(`Listening on port: ${port}`);
});