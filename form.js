function generateForm()
{
    var fs = require("fs");
    fs.readFile("./datatypes.txt", function(text){
        var textByLine = text.split("\n");
        console.log(textByLine);
    })
}
