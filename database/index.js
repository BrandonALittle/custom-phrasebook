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
  });
}

let lookFor = (translation, callback) => {
  console.log(translation);
  Phrase.find({phrase: translation.phrase} , function(err, docs) {
    if (err) throw Error;
    callback(null, docs.length);
  });
};

let remove = (translation, callback) => { // delete phrase from database
  let deletion = {phrase: translation.phrase, targetL: translation.targetL};
  Phrase.remove(deletion, function(err, result) {
    if (err) throw Error;
    callback();
  });

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
module.exports.lookFor = lookFor;