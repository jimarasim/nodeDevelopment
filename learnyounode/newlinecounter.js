var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var bufferArray = buffer.toString().split("\n");
console.log(bufferArray.length-1);