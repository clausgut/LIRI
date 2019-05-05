var spotify = require("./liri");
var fs = require("fs");

var liri = new spotify();

var term = process.argv.slice(3).join(" ");

 if(!term){
     term = "song";
 }
// if(!)