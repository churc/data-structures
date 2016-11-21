///THIS WORKS - IT TAKES apped4_ah.js AND CLEANS IT UP 
////THIS CAN BE SENT TO MONGODB

var fs = require('fs');
var async = require('async');

var rawDataFile = fs.readFileSync('raw_groups1.txt');

var rawData = JSON.parse(rawDataFile);

var meetings = []; 

async.eachSeries(rawData, function(value, callback){
    var thisMeeting = new Object; 
    thisMeeting.building = value.building; 
    thisMeeting.name = value.name;
    thisMeeting.address = value.address;
    // thisMeeting.notes = value.notes;
    // thisMeeting.access = value.access; 
    for (var i=0; i < value.meetings.length; i++) {
        
        var thisIt = value.meetings[i].trim();
        
        if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
            thisMeeting.day = thisIt.substr(3, thisIt.indexOf(' ')-3);
        }
        
        if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') { 
            thisMeeting.startTime = thisIt.split(' <b>')[0].substr(-8).trim(); 
        }
        
          if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
            thisMeeting.endTime = thisIt.split(' <br>')[0].substr(-8).trim(); 
        }
        
        else if (thisIt.substr(0, 10) == '<b>Meeting') {
            thisMeeting.meetingType = thisIt.split('</b>')[1].trim(); 
        }
        
        else if (thisIt.substr(0, 10) == '<b>Special') {
            thisMeeting.specialInterest = thisIt.split('</b>')[1].trim(); 
        }
        
        if (i > 0 & thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
            meetings.push(thisMeeting);
        }
        
        if (i == value.meetings.length - 1) {
            meetings.push(thisMeeting);
        }
    }
    
    thisMeeting.notes = value.notes;
    thisMeeting.access = value.access; 
    
    callback();
});

function printIt () {
    for (var i=0; i < meetings.length; i++) {
        console.log(meetings[i]);
        console.log(meetings.length);
        fs.writeFileSync('groups1.txt', JSON.stringify(meetings));
    }
}

setTimeout(printIt, 1000); 