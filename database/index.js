const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/phrasebook');

let phraseSchema = mongoose.Schema({
  phrase: String,
  sourceL: String,
  targetL: String,
  translatedText: String
});

let Phrase = mongoose.model('Phrase', phraseSchema);

let save = (translation) => { // save phrase to database
  Phrase.create(translation, function(err, newPhrase) {
    if (err) return handleError(err);
    console.log('db line 16: ', newPhrase);
    console.log('Phrase added to database!');
  });
}

let find = (translation) => {
  Phrase.find(translation) , function(err, docs) {
    if (err) return handleError(err);
    callback(!!docs);
  }
};

let remove = (translation) => { // delete phrase from database

};

let fetchPhrases = (callback) => { // return all phrases from database
  Phrase.find({}, function(err, phrases) {
    if (err) throw Error;
    callback(null, phrases);
  });
};

module.exports.save = save;
module.exports.remove = remove;
module.exports.fetchPhrases = fetchPhrases;