const rp = require('request-promise');
const $ = require('cheerio');
const puppeteer = require('puppeteer');
const yahooFinanceRequest = require("./yahooFinance");

const url =
    "http://eoddata.com/symbols.aspx"

let arrStockSymbols = []
puppeteer
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
    .then((html)=>{
        $('table.quotes>tbody>tr[class]>td>a',html).each(function(){
            if($(this).text()!==''){
                return arrStockSymbols.push({
                    name: '',
                    symbol: $(this).text()
                });
            }
        });

    })
    .then(()=>{
        return Promise.all(
            arrStockSymbols.map(function(obj){
                return yahooFinanceRequest('https://finance.yahoo.com/quote/'+obj.symbol,obj.symbol);
            })
        )
    })
    .catch((error)=>console.log('Error',error));