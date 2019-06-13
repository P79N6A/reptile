const { Wechaty, Friendship, config, log } = require('wechaty')
const Qrterminal = require('qrcode-terminal');
const bot = new Wechaty({ name: 'WechatEveryDay', profile: config.default.DEFAULT_PROFILE, });
const model = require('./mongodb/baseModel.js');
class WechatyBase {
    constructor(){
        this.Emit = {
            login:this.login
        }
        this._init();
    }

    _init(){
        for(var emit in this.Emit){
            bot.on(emit,this.Emit[emit]);
        }
        bot.start().then(() => {
            console.log("登录微信")
        }).catch(err => {
            console.log(err);
        })
    }

    async login(){
        console.log(111);
    }
}

