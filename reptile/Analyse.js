var fs = require("fs");
var cheerio = require('cheerio');
const GetData = require('./GetData');
class Analyse {
    constructor(){
        this.init();
    }
    loadEl(){

    }
    async init(){
        let result = await GetData;
        var $ = cheerio.load(result[0]);
        const text = $('#user_confirmsource').text();
        console.log(text)
    }
}   
module.exports = Analyse;