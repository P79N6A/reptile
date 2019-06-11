#!/usr/bin/env node
const Util = require('./lib/util');
const dns = require('dns');
const EventEmit = require("events");
const path = require('path');
new Util();
dns.lookup('develop.avatar.oa.com',(err,address,family) => {
    console.log(`IP地址：${address} IPv${family}`);
})
console.log(path.extname('./lib/util.js'));

console.log(process.versions);

