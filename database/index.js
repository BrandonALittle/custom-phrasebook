const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/phrasebook');

let phraseSchema = mongoose.schema({
  phrase: String,
  sourceL: String,
  targetL: String,
  translatedText: String
});

let Phrase = mongoose.model('phrase', phraseSchema);

let save = (translation) => { // save phrase to database

};

let remove = (translation) => { // delete phrase from database

};

let fetchPhrases = (callback) => { // return all phrases from database

};