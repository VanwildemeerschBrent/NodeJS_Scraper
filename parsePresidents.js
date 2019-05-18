const rp = require('request-promise');
const $ = require('cheerio');


const presidentParse = function (url){
    rp(url)
        .then((html) => {
            return {
                name: $('.firstHeading', html).text(),
                birthDay: $('.bday', html).text()
            }
        })
        .catch((error) => {
            console.log('Error', error);
        });
}


module.exports= presidentParse;