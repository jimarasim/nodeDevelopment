//print out command line arguments
//console.log(process.argv);

//add all command line arguments together
var total=0;
for(var i=2;i<process.argv.length;i++){
    
    //convert argv string parameter to number and add it to the total
    total+=parseInt(process.argv[i]);
    
    
}

console.log(total);

