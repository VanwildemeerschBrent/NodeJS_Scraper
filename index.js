const rp  =require('request-promise');
const $ = require('cheerio');
const presidentsParse = require('./parsePresidents');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

rp(url)
.then((html)=>{
    const presidentsArr = [];
    for (let i = 0; i < $('big > a', html).length;i++){
            presidentsArr.push($('big > a',html)[i].attribs.href);
    }
    console.log(presidentsArr);
    return Promise.all(
        presidentsArr.map(function(url){
            let parse = presidentsParse('https://en.wikipedia.org' + url);
            console.log(parse);
            return 
        })
    );
})
.then(function (presidents){
    console.log(presidents)
})
.catch((error)=>{
    console.log('error',error);
})