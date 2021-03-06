var request = require("request"); // npm install request
var async = require("async"); // npm install async


//exports.FindByKeyWord = function (req, res, next) {

// SETTING ENVIRONMENT VARIABLES (in Linux): 
// export NEW_VAR="Content of NEW_VAR variable"
// printenv | grep NEW_VAR
//enter api key
var apiKey = process.env.GMAKEY;
// console.log(apiKey)

var meetingsData = [];
var addresses = ["63+Fifth+Ave+New+York+NY", "16+E+16th+St+New+York,+NY","2+W+13th+St,+New+York+NY"];

// var addresses = ["63 Fifth Ave New York NY"];

// eachSeries in the async module iterates over an array and operates on each item in the array in series

//async allows us to use a lot of methods to wrk on a collection in series
async.eachSeries(addresses, function(value, callback) {
    //  var apiRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address='+ value+'+1&key=apiKey';

    //tried google maps in a variable: 
    //var google = require('https://maps.googleapis.com/maps/api/geocode/json?address=');   

    //tried using single address in the apiRequest:
    var apiRequest = ('https://maps.googleapis.com/maps/api/geocode/json?address=' + value + '1&key=' + apiKey);

    var thisMeeting = new Object();
    // this is very ephemeral because inside a function so have to push it to this meeting array
    //otherwise the object would be gone

    thisMeeting.address = value;
    request(apiRequest, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                //thisMeeting.latLong = JSON.parse(body).results[0].geometry.location;

                thisMeeting.latLng = JSON.parse(body).results[0].geometry.location;
                console.log(thisMeeting)
                meetingsData.push(thisMeeting);

            }
            else {
                throw error;
            }
            //setTimeout - slow this down so not 50 requests per sec - done it at 2 secs per address - 6 secs in all
            setTimeout(callback, 2000);
        },
        function() {
            console.log(meetingsData);
        });
});