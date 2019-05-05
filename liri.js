var axios = require("axios");
var fs = require("fs");
var Spotify = require('node-spotify-api');

var spotifyone = new Spotify({
    id: "2beb30788e6a4587b4c41d25d4a3d067",
    secret: "fe1a632d0f97415e87c7fbdbb479dace"
});

var spotify = function () {
    this.findSong = function (term) {
        var URL = 'https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx' + term;

        axios.get(URL).then(
            function (response) {
                var result = response.data
                console.log(result);
                console.log(response);
                var resultString = `Name: ${data.name}`;

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

                );
            }
        );

    }
};


module.exports = spotify;