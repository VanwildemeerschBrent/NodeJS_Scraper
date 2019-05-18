const rp = require("request-promise");
const $ = require("cheerio");
const puppeteer = require("puppeteer");
const url = "https://finance.yahoo.com/quote/";



const parseStockSymbol = function(url){
  return  puppeteer
        .launch()
        .then((browser) => {
            return browser.newPage()
        })
        .then((newPage) => {
            return newPage.goto(url)
                .then(() => {
                    return newPage.content();
                });
        })
        .then((html) => {
            console.log($('h1',html))
        })
}


module.exports = parseStockSymbol;