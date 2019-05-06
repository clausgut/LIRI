var axios = require("axios");
var fs = require("fs");
var spotify = require('node-spotify-api');
var db = require("db");
var spotifyone = new Spotify({
    id: process.env.ID,
    secret: process.env.SECRET,
});
var spotify = spotify(options);
inquirer.prompt([

    {
        type: "input",
        name: "userInput",
        message: "Which location or landmark would you like to geocode?"
    }

    // After the prompt, store the user's response in a variable called location.
]).then(function (search) {


    // var spotify = function () {
    //     this.findSong = function (term) {
    //         var URL = 'https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx' + term;

    //         axios.get(URL).then(
    //             function (response) {
    spotify.music(search.userInput, function (err, data) {
        var result = response.data;
        var resultString = `Name: ${data.name}`;

        console.log(JSON.stringify(data, null, 2));
        
        //                 console.log(result);
        //                 console.log(response);
        

        // .catch (function (err) {
        //         console.error('Error occurred: ' + err);


        fs.appendFile("log.txt", 'Song:' + resultString, function (err) {
            if (err) {
                return err;
            }
            else {
                console.log(resultString);
                console.log("File was logged")
            }
        }

        )

    });
