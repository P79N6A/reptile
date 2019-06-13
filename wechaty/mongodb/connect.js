var mongoose = require('mongoose');
const db_url = 'mongodb://127.0.0.1:27017/wechaty'
mongoose.connect(db_url,{ useNewUrlParser: true });

var db = mongoose.connection;
console.log(0)
db.on('error' , (err) => {
    console.log('connection error',err);
})

db.on('connect' , () => {
    console.log("Mongoose connection open to " + db_url)
})


db.on('disconnected', () => {
    console.log("Mongoose connection disconnected ");
});
console.log(2)
const Schema =  mongoose.Schema;
const blogSchema  = new Schema({
    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs:  Number
    }
    // subscribe: String, // 订阅者
    // setter: String, // 设定任务者
    // content: String, // 订阅内容
    // time: String, // 定时日期
    // isLoop: Boolean, // 是否为循环定时任务
    // hasExpired: { type: Boolean, default: false }, // 判断任务是否过期
    // createdAt: { type: Date, default: Date.now },
});
module.exports = blogSchema;