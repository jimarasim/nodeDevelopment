//include file system module
var flm = require('./fileListing-module.js');

//check for valid command line paramters (should be $command directory extension
if(process.argv.length!==4){
    throw new Error("WRONG NUMBER OF ARGUMENTS. COMMAND: node fileListing-main.js {directory path} {extension}");
}

if(process.argv[2]===""){
    throw new Error("SPECIFY DIRECTORY");
}

if(process.argv[3]===""){
    throw new Error("SPECIFY EXTENSION");
}

var directory = process.argv[2];
var extension = "."+process.argv[3];

flm(directory,extension,function(err,files){console.log(files);});

