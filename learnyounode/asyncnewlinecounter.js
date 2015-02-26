var fs = require('fs');
fs.readFile(process.argv[2], function finishedReading(error,buffer){
            if(error){
                return console.error(error);
            }
            else{
                var bufferArray = buffer.toString().split("\n");
                console.log(bufferArray.length-1);
            }
        });
