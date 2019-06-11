
const Ajax = require('./Ajax');
class GetData {
    constructor(){
        this.index = 0;
        this.totalPages = 5;
        this.data = [0];
        this.baseUrl = 'http://www.jianshu.com/c/NEt52a?order_by=commented_at&page=';
    }
    getList(callback){
        // this.index++;
        let arr = [];
        for(var i = 0; i < 1; i++){
            arr.push(this.load(++this.index))
        }
        var promises = Promise.all(arr);
        promises.then(res =>{
            console.log(res);
            this.data = this.data.concat(res); 
            callback(this.data);
            // if(this.index < this.totalPages){
            //     this.getList();
            // }else {
            //     callback && callback 
            // }
        })
    }
    load(index){
        return new Promise((resolve,reject) => {
            Ajax.LoadData({
                baseUrl: this.baseUrl + index,
                methods: 'get'
            })
        })
    }
}
var GetDatas = new GetData(); 
module.exports = new Promise((resolve,reject) => {
    GetDatas.getList((data) =>{
        resolve(data);
    })
})
