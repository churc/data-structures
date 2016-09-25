//Correct code to parse addresses and get lat long for each address

var request = require('request'); // npm install request
var async = require('async'); // npm install async
var fs = require('fs');


// SETTING ENVIRONMENT VARIABLES (in Linux): 
// in terminal: export NEW_VAR="Content of NEW_VAR variable" (Linux variable in the server)
// printenv | grep NEW_VAR (retrieving the variable)
// export GMAKEY='apiKey'
// printenv | grep GMAKEY (to double check if you've successfully stored your Key)

var apiKey = process.env.GMAKEY;

var meetingsData = [];
var address = [];

var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/meetingsArray.txt"));

//reformat address for google api
for (var i = 0; i < addresses.length; i++) {
    address.push(addresses[i].substring(addresses[i].indexOf(',')).concat(', New York, NY').split(' ').join('+'));
}

//console.log(address);

// eachSeries in the async module iterates over an array and operates on each item in the array in series
// in order not to break the 50 request / second rule

async.eachSeries(address, function(value, callback) {

    var apiRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + value + '&key=' + apiKey;
    var thisMeeting = new Object;

    thisMeeting.address = value;

    request(apiRequest, function(err, resp, body) {

        if (err) {
            throw err;
        }
        else {
            thisMeeting.latLong = JSON.parse(body).results[0].geometry.location;
        }
        meetingsData.push(thisMeeting);
    });

    setTimeout(callback, 2000);

}, function() {
    console.log(meetingsData);

    fs.writeFileSync('/home/ubuntu/workspace/meetings.txt', JSON.stringify(meetingsData));
});