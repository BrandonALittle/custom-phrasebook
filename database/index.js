const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/phrasebook');

let phraseSchema = mongoose.schema({
  phrase: String,
  sourceL: String,
  targetL: String,
  translatedText: String
});

let Phrase = mongoose.model('phrase', phraseSchema);

let save = (translation) => {

};

let remove = (translation) => {

};

let fetchPhrases = (callback) => {

};