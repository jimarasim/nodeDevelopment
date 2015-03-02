//include file system module
var flm = require('./listingmodule.js');
var directory="";
var extension="";

//check for valid command line paramters (should be $command directory extension
if(process.argv.length!==4){
    throw new Error("WRONG NUMBER OF ARGUMENTS. COMMAND: node fileListing-main.js {directory path} {extension}");
}

if(process.argv[2]===""){
    throw new Error("SPECIFY DIRECTORY");
}
else{
    directory = process.argv[2];
}

if(process.argv[3]===""){
    throw new Error("SPECIFY EXTENSION");
}
else{
    extension = process.argv[3];
}

//use fileListing-module.js 
flm.list(directory,extension,function(err,files){
    if(err){
        return console.error(err);
    }
    else{
        
        files.forEach(function(file){
            console.log(file);

        });
    }
});
