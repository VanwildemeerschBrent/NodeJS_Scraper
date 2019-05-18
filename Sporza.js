const rp = require('request-promise');
const $ = require('cheerio');
const puppeteer = require('puppeteer');
const url = 'https://www.sporza.be';

puppeteer
    .launch()
    .then((browser)=>{
        return browser.newPage()
    })
    .then((newPage)=>{
      return  newPage.goto(url)
            .then(()=>{
                return newPage.content();
            });
    })
    .then((html)=>{
        $('.vrt-title',html).each(function(){
            console.log($(this).text())
        })
    })
    .catch((error)=>console.log(error));
