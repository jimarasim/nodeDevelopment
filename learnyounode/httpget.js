var http = require('http');

//check for valid command line paramters (should be $command directory extension
if(process.argv.length!==3){
    throw new Error("WRONG NUMBER OF ARGUMENTS. SHOULD BE: node httpget.js {url}");
}

if(process.argv[2]===""){
    throw new Error("SPECIFY URL");
}

var url = process.argv[2];

http.get(url, function(res) {
  console.log("Got response status code: " + res.statusCode);
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});