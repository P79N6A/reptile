const api = require('./api.js');
const axios = require('axios');

axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    // 网络错误,4xx,5xx,统一转化为resolve为对应format{code,errmsg}
    const st = error.response.status
    if (st >= 400 && st < 599 && st != 502 ) {
        error.response.dataOrigin = error.response.data
        error.response.data = {
            'code': -99999,
            'message': `status error: ${st}`,
            'result': null
        }
        return Promise.resolve(error.response)
    } else {
        return Promise.reject(new Error(error))
    }
});
axios.defaults.baseURL = "";


const ajaxGet = function (url, params = {},suffix = '1') {
    let requ= request;
    return new Promise((resolve, reject) => {
        axios.get(requ[url || url],{
            params: params
        }).then(response => {
            resolve(response.data);
        }).catch(err => {
            reject(err);
        })
    })
}
module.exports = ajaxGet;