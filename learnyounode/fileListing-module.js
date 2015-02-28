//include file system module
var fs = require('fs');

module.exports = function(directory,extension,callback){
    return {
        list : function(){
            fs.exists(directory,function(exists){
                if(exists){
                    //print out files with desired extension
                    fs.readdir(directory, function finishedReadingDirectory(err,files){
                                if(err){
                                    return console.error(err);
                                }
                                else{
                                    files.forEach(function(file){
                                        if(file.indexOf(extension, file.length - extension.length) !== -1){
                                            console.log(file);
                                        }
                                    });
                                }
                               });
                }
                else{
                    throw new Error("DIRECTORY SPECIFIED DOES NOT EXIST:"+directory);
                }
            }); 
        }
    }
}














































//check for valid command line paramters (should be $command directory extension
if(process.argv.length!==4){
    throw new Error("WRONG NUMBER OF ARGUMENTS. SHOULD BE: node command.js directory extension");
}

if(process.argv[2]===""){
    throw new Error("SPECIFY DIRECTORY");
}

if(process.argv[3]===""){
    throw new Error("SPECIFY EXTENSION");
}

var directory = process.argv[2];
var extension = "."+process.argv[3];

fs.exists(directory,function(exists){
    if(exists){
        //print out files with desired extension
        fs.readdir(directory, function finishedReadingDirectory(err,files){
                    if(err){
                        return console.error(err);
                    }
                    else{
                        files.forEach(function(file){
                            if(file.indexOf(extension, file.length - extension.length) !== -1){
                                console.log(file);
                            }
                        });
//                        for(var i=0;i<files.length;i++){
//
//                            //check if ends with
//                            if(files[i].indexOf(extension, files[i].length - extension.length) !== -1){
//                                console.log(files[i]);
//                            }
//                        }
                    }
                   });
               }
    else{
        throw new Error("DIRECTORY SPECIFIED DOES NOT EXIST:"+directory);
    }
           
});
