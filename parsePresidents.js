
const rp = require('request-promise');
const $ = require('cheerio');

const potusParse = function (url) {
    return rp(url)
        .then(function (html) {
            console.log($('h1',html))
        })
        .catch(function (err) {
            //handle error
        });
};

module.exports = potusParse;