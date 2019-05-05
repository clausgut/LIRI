var axios = require("axios");
var fs = require("fs");
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: "2beb30788e6a4587b4c41d25d4a3d067",
    secret: "fe1a632d0f97415e87c7fbdbb479dace"
});

spotify
var URL = 'https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx' + term;

axios.get(URL).then(
    function (data) {
        var result = data.data
        console.log(result);

        var resultString = `Name: ${data.name}`;
    })
    .catch(function (err) {
        console.error('Error occurred: ' + err);
    });





module.exports = spotify;