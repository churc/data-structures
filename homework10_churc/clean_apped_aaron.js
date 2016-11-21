////clean_apped_aaron.js - aaron example to clean up raw data file 
///raw data file is the looped text so has all the days etc, now just a matter of cleaning up


var fs = require('fs');
var async = require('async');

var rawDataFile = fs.readFileSync('raw_groups.txt');

var rawData = JSON.parse(rawDataFile);

var meetings = []; 

async.eachSeries(rawData, function(value, callb){
    var thisMeeting = new Object; 
    thisMeeting.place = value.place; 
    thisMeeting.name = value.name;
    thisMeeting.address = value.address; 
    for (var i=0; i < value.meetings.length; i++) {
        
        var thisIt = value.meetings[i].trim();
        
        if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
            thisMeeting.day = thisIt.substr(3, thisIt.indexOf(' ')-3);
        }
        
        else if (thisIt.substr(0, 10) == '<b>Meeting') {
            thisMeeting.meetingType = thisIt; 
        }
        
        else if (thisIt.substr(0, 10) == '<b>Special') {
            thisMeeting.specialInterest = thisIt; 
        }
        
        if (i > 0 & thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
            meetings.push(thisMeeting);
        }
        
        if (i == value.meetings.length - 1) {
            meetings.push(thisMeeting);
        }
    }
    callb();
});

function printIt () {
    for (var i=0; i < meetings.length; i++) {
        console.log(meetings[i]);
    }
}

setTimeout(printIt, 1000); 