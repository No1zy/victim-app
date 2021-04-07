const fs = require("fs");

require('child_process').spawn('cp', ['node_modules/evil', 'hoge'])

let text = fs.readFileSync("node_modules/evil", {encoding: 'utf-8'});
console.log(text);

console.log('OK')
