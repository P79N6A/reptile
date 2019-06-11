const cmd = require("node-cmd");
const fs = require('fs');
const readline = require('readline');
data = JSON.parse(fs.readFileSync('./package.json'))

class UpdateVersion {
    constructor(){
        this.version = data.version;
        this.name = data.name;
        this.rl = readline.createInterface({
            input:process.stdin,
            output:process.stdout
        })
        console.log(`当前${this.name}版本号：${this.version}`);
        this.init();
    }

    async init(){
        let result = this.getCode(await this.rquestion("是否更新为下一版本：（Y/N）"));
        if(!result){
            console.log("你终止了更新");
            process.exit(1);
        }
        let q = await this.rquestion("请输入下一版本要设置的版本号：");
        if(!q){
            let num = this.version.split('.');
            num[num.length-1]++;
            this.version = num.join('.');
            console.log(`检测到您没有输入版本号，将为您自动添加为：${this.version}`);
            data.version = this.version;
            fs.writeFileSync('./package.json',JSON.stringify(data,"","\t"));
            console.log(`开始打包${this.name}项目`);
            let res = await this.setBuild('npm run build --report');
            this.rl.close();
            console.log(res);
        }
    }

    async setBuild(query){
        console.log(query);
        return new Promise((resolve,reject) => {
           cmd.get(query,(err,data) =>{
               console.log(err,data);
                !err ? resolve(data) : reject(err);
           })
        })
    }
    async rquestion(query){
        return new Promise(resolve => {
            this.rl.question(query,answer => {
                answer = answer.trim();
                resolve(answer || false)
            })
        })
    }

    getCode(code){
        return code ? code.toLowerCase() === 'y' : code;
    }
}


module.exports = UpdateVersion;