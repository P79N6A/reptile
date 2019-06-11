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
        console.log(result)
    }
}   
module.exports = Analyse;