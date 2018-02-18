const request = require('request');
const config = require('../src/config/config.js');

let getTranslation = (phrase, callback) => {
  let searchUrl = "https://translation.googleapis.com/language/translate/v2";
  let options = {
    url: searchUrl,
    qs: {
      q: phrase.phrase,
      source: phrase.source,
      target: phrase.target,
      key: config.API_KEY
    }

  }
  request(options, function(err, res, body) {
    if (err) throw Error;
    callback(null, JSON.parse(body));
    // if (!body) {
    //   console.log('I didnt receive anything from the googleTranslate request');
    // } else {
    //   callback(body);
    // }
  });
};

module.exports.getTranslation = getTranslation;