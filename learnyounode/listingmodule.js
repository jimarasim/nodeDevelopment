//include file system module
var fs = require('fs');

module.exports = {
    list : function(directory,extension,callback){

        fs.exists(directory,function(exists){
            if(exists){
                //print out files with desired extension
                fs.readdir(directory, function finishedReadingDirectory(err,files){
                    if(err){
                        callback("DIRECTORY SPECIFIED DOES NOT EXIST:"+err,"");
                        return;
                    }
                    else{
                            //add a period to extension
                            extension = "."+extension;
                            
                            //declare return data array to find files with the desired extension
                            var filesWithExtension=new Array();

                            //for each file in the directory listing
                            for(var i=0;i<files.length;i++) {
                                //check if the file has the desired extension
                                if(files[i].indexOf(extension, files[i].length - extension.length) !== -1){
                                    console.log(files[i]+"---------------");
                                    filesWithExtension.push(files[i]);
                                }
                            }

                            //send return data array to caller
                            callback("",filesWithExtension);
                            return;
                    }
                });
            }
            else{
                callback("DIRECTORY SPECIFIED DOES NOT EXIST:"+directory,"");
                return;
            }
        });
    }
};