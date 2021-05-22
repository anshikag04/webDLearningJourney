const fs = require('fs')

let file = fs.readFileSync(__dirname + '/sometext.txt')

console.log(file.toString());