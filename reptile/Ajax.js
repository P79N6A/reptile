var http = require('http');
var querystring = require('querystring');
var url = require('url');
var superagent = require('superagent');
var axios = require('axios');

class Ajax {
    constructor(options,cookie){

    }

    LoadData(options,cookie){
        const {baseUrl,methods,params} = options;
        this.cookie = cookie || '';
        this.options = options;
        this.baseUrl = url.parse("http://crs.ied.com/" || baseUrl);
        this.type = methods.toUpperCase() || "GET";
        this.params = params? querystring.stringify(params) : '';
        this.data = null;
        return axios.get(this.baseUrl);
        // this._init();
    }

    _init(){
        
        // const {path,host = 80,port} = this.baseUrl;
        // if(this.type == 'GET' && this.params){
        //     path += '?' + this.params;
        // }
        // let requestOptions = {
        //     host,port,path,
        //     method:this.type,
        //     headers:{
        //         Cookie:this.cookie
        //     }
        // }
        // if(this.type == 'POST' && this.params){
        //     requestOptions.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        //     requestOptions.headers['Content-Length'] = contents.length;
        // }
        // console.log(requestOptions);
        // let result = http.request(requestOptions,res => {
        //     res.setEncoding('UTF-8');
        //     res.on('data', chunk => {
        //         console.log(chunk)
        //         this.data = chunk;
        //     })
        //     res.on('end', () => {
        //         return new Promise((resolve,reject) => {
        //             resolve(this.data);
        //         })
        //     })
        //     res.on('error', (err) => {
        //         console.log(err);
        //     })

        // })

        // result.on('error', function(err) {
        //     console.log(err);
        // });
    
        // //post请求，需要把请求体发送过去
        // if(this.type === 'POST' && this.params) {
        //     result.write(this.params);
        // }
    
        // result.end();
    }
}

module.exports = new Ajax();
