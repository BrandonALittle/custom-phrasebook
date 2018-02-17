const request = require('request');
const config = require('../src/config/config.js');

let getTranslation = (phrase, callback) => {
  let searchUrl = "https://translation.googleapis.com/language/translate/v2";
  let options = {
    url: searchUrl,
    qs: {
      q: phrase.query,
      source: phrase.sourceL,
      target: phrase.targetL,
      format: 'text',
      key: config.API_KEY
    }

  }
  request(options, function(err, res, body) {
    if (err) throw Error;
    callback(body);
  });
};

module.exports.getTranslation = getTranslation;