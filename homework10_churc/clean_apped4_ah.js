// // ///THIS WORKS FOR ALL TEN TXT FILES - IT TAKES apped4_ah.js AND CLEANS IT UP 
// // ////GO TO clean_apped6_ah.js TO INSERT RESULTING TXT FILES INTO MONGO


// // ////CLEANING & ADDING ADDRESS 2 ///////
var fs = require('fs');
var async = require('async');


//////////FOR GROUPS1 TXT FILE
/////
var rawDataFile = fs.readFileSync('raw_groups1.txt');

var rawData = JSON.parse(rawDataFile);

var meetings = []; 

async.eachSeries(rawData, function(value, callback){
    var thisMeeting = new Object; 
    thisMeeting.building = value.building; 
    thisMeeting.name = value.name;
    thisMeeting.address1 = value.address1;
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
    
    thisMeeting.address2 = value.address2;
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



////////////////

// ///FOR GROUPS2 TXT FILE
// var rawDataFile = fs.readFileSync('raw_groups2.txt');

// var rawData = JSON.parse(rawDataFile);

// var meetings = []; 

// async.eachSeries(rawData, function(value, callback){
//     var thisMeeting = new Object; 
//     thisMeeting.building = value.building; 
//     thisMeeting.name = value.name;
//     thisMeeting.address1 = value.address1;
//     // thisMeeting.notes = value.notes;
//     // thisMeeting.access = value.access; 
//     for (var i=0; i < value.meetings.length; i++) {
        
//         var thisIt = value.meetings[i].trim();
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.day = thisIt.substr(3, thisIt.indexOf(' ')-3);
//         }
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') { 
//             thisMeeting.startTime = thisIt.split(' <b>')[0].substr(-8).trim(); 
//         }
        
//           if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.endTime = thisIt.split(' <br>')[0].substr(-8).trim(); 
//         }
        
//         else if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingType = thisIt.split('</b>')[1].trim(); 
//         }
        
//         else if (thisIt.substr(0, 10) == '<b>Special') {
//             thisMeeting.specialInterest = thisIt.split('</b>')[1].trim(); 
//         }
        
//         if (i > 0 & thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             meetings.push(thisMeeting);
//         }
        
//         if (i == value.meetings.length - 1) {
//             meetings.push(thisMeeting);
//         }
//     }
    
//     thisMeeting.address2 = value.address2;
//     thisMeeting.notes = value.notes;
//     thisMeeting.access = value.access; 
    
//     callback();
// });

// function printIt () {
//     for (var i=0; i < meetings.length; i++) {
//         console.log(meetings[i]);
//         console.log(meetings.length);
//         fs.writeFileSync('groups2.txt', JSON.stringify(meetings));
//     }
// }

// setTimeout(printIt, 1000); 



// ///FOR GROUPS3 TXT FILE
// var rawDataFile = fs.readFileSync('raw_groups3.txt');

// var rawData = JSON.parse(rawDataFile);

// var meetings = []; 

// async.eachSeries(rawData, function(value, callback){
//     var thisMeeting = new Object; 
//     thisMeeting.building = value.building; 
//     thisMeeting.name = value.name;
//     thisMeeting.address1 = value.address1;
//     // thisMeeting.notes = value.notes;
//     // thisMeeting.access = value.access; 
//     for (var i=0; i < value.meetings.length; i++) {
        
//         var thisIt = value.meetings[i].trim();
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.day = thisIt.substr(3, thisIt.indexOf(' ')-3);
//         }
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') { 
//             thisMeeting.startTime = thisIt.split(' <b>')[0].substr(-8).trim(); 
//         }
        
//           if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.endTime = thisIt.split(' <br>')[0].substr(-8).trim(); 
//         }
        
//         else if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingType = thisIt.split('</b>')[1].trim(); 
//         }
        
//         else if (thisIt.substr(0, 10) == '<b>Special') {
//             thisMeeting.specialInterest = thisIt.split('</b>')[1].trim(); 
//         }
        
//         if (i > 0 & thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             meetings.push(thisMeeting);
//         }
        
//         if (i == value.meetings.length - 1) {
//             meetings.push(thisMeeting);
//         }
//     }
    
//     thisMeeting.address2 = value.address2;
//     thisMeeting.notes = value.notes;
//     thisMeeting.access = value.access; 
    
//     callback();
// });

// function printIt () {
//     for (var i=0; i < meetings.length; i++) {
//         console.log(meetings[i]);
//         console.log(meetings.length);
//         fs.writeFileSync('groups3.txt', JSON.stringify(meetings));
//     }
// }

// setTimeout(printIt, 1000); 



// ///FOR GROUPS4 TXT FILE
// var rawDataFile = fs.readFileSync('raw_groups4.txt');

// var rawData = JSON.parse(rawDataFile);

// var meetings = []; 

// async.eachSeries(rawData, function(value, callback){
//     var thisMeeting = new Object; 
//     thisMeeting.building = value.building; 
//     thisMeeting.name = value.name;
//     thisMeeting.address1 = value.address1;
//     // thisMeeting.notes = value.notes;
//     // thisMeeting.access = value.access; 
//     for (var i=0; i < value.meetings.length; i++) {
        
//         var thisIt = value.meetings[i].trim();
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.day = thisIt.substr(3, thisIt.indexOf(' ')-3);
//         }
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') { 
//             thisMeeting.startTime = thisIt.split(' <b>')[0].substr(-8).trim(); 
//         }
        
//           if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.endTime = thisIt.split(' <br>')[0].substr(-8).trim(); 
//         }
        
//         else if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingType = thisIt.split('</b>')[1].trim(); 
//         }
        
//         else if (thisIt.substr(0, 10) == '<b>Special') {
//             thisMeeting.specialInterest = thisIt.split('</b>')[1].trim(); 
//         }
        
//         if (i > 0 & thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             meetings.push(thisMeeting);
//         }
        
//         if (i == value.meetings.length - 1) {
//             meetings.push(thisMeeting);
//         }
//     }
    
//     thisMeeting.address2 = value.address2;
//     thisMeeting.notes = value.notes;
//     thisMeeting.access = value.access; 
    
//     callback();
// });

// function printIt () {
//     for (var i=0; i < meetings.length; i++) {
//         console.log(meetings[i]);
//         console.log(meetings.length);
//         fs.writeFileSync('groups4.txt', JSON.stringify(meetings));
//     }
// }

// setTimeout(printIt, 1000); 



// ///FOR GROUPS 5 TXT FILE
// var rawDataFile = fs.readFileSync('raw_groups5.txt');

// var rawData = JSON.parse(rawDataFile);

// var meetings = []; 

// async.eachSeries(rawData, function(value, callback){
//     var thisMeeting = new Object; 
//     thisMeeting.building = value.building; 
//     thisMeeting.name = value.name;
//     thisMeeting.address1 = value.address1;
//     // thisMeeting.notes = value.notes;
//     // thisMeeting.access = value.access; 
//     for (var i=0; i < value.meetings.length; i++) {
        
//         var thisIt = value.meetings[i].trim();
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.day = thisIt.substr(3, thisIt.indexOf(' ')-3);
//         }
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') { 
//             thisMeeting.startTime = thisIt.split(' <b>')[0].substr(-8).trim(); 
//         }
        
//           if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.endTime = thisIt.split(' <br>')[0].substr(-8).trim(); 
//         }
        
//         else if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingType = thisIt.split('</b>')[1].trim(); 
//         }
        
//         else if (thisIt.substr(0, 10) == '<b>Special') {
//             thisMeeting.specialInterest = thisIt.split('</b>')[1].trim(); 
//         }
        
//         if (i > 0 & thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             meetings.push(thisMeeting);
//         }
        
//         if (i == value.meetings.length - 1) {
//             meetings.push(thisMeeting);
//         }
//     }
    
//     thisMeeting.address2 = value.address2;
//     thisMeeting.notes = value.notes;
//     thisMeeting.access = value.access; 
    
//     callback();
// });

// function printIt () {
//     for (var i=0; i < meetings.length; i++) {
//         console.log(meetings[i]);
//         console.log(meetings.length);
//         fs.writeFileSync('groups5.txt', JSON.stringify(meetings));
//     }
// }

// setTimeout(printIt, 1000); 

//////

// ///FOR GROUPS 6 TXT FILE
// var rawDataFile = fs.readFileSync('raw_groups6.txt');

// var rawData = JSON.parse(rawDataFile);

// var meetings = []; 

// async.eachSeries(rawData, function(value, callback){
//     var thisMeeting = new Object; 
//     thisMeeting.building = value.building; 
//     thisMeeting.name = value.name;
//      thisMeeting.address1 = value.address1;
//     // thisMeeting.notes = value.notes;
//     // thisMeeting.access = value.access; 
//     for (var i=0; i < value.meetings.length; i++) {
        
//         var thisIt = value.meetings[i].trim();
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.day = thisIt.substr(3, thisIt.indexOf(' ')-3);
//         }
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') { 
//             thisMeeting.startTime = thisIt.split(' <b>')[0].substr(-8).trim(); 
//         }
        
//           if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.endTime = thisIt.split(' <br>')[0].substr(-8).trim(); 
//         }
        
//         else if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingType = thisIt.split('</b>')[1].trim(); 
//         }
        
//         else if (thisIt.substr(0, 10) == '<b>Special') {
//             thisMeeting.specialInterest = thisIt.split('</b>')[1].trim(); 
//         }
        
//         if (i > 0 & thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             meetings.push(thisMeeting);
//         }
        
//         if (i == value.meetings.length - 1) {
//             meetings.push(thisMeeting);
//         }
//     }
    
//     thisMeeting.address2 = value.address2;
//     thisMeeting.notes = value.notes;
//     thisMeeting.access = value.access; 
    
//     callback();
// });

// function printIt () {
//     for (var i=0; i < meetings.length; i++) {
//         console.log(meetings[i]);
//         console.log(meetings.length);
//         fs.writeFileSync('groups6.txt', JSON.stringify(meetings));
//     }
// }

// setTimeout(printIt, 1000); 

// ///FOR GROUPS 7 TXT FILE
// var rawDataFile = fs.readFileSync('raw_groups7.txt');

// var rawData = JSON.parse(rawDataFile);

// var meetings = []; 

// async.eachSeries(rawData, function(value, callback){
//     var thisMeeting = new Object; 
//     thisMeeting.building = value.building; 
//     thisMeeting.name = value.name;
//     thisMeeting.address1 = value.address1;
//     // thisMeeting.notes = value.notes;
//     // thisMeeting.access = value.access; 
//     for (var i=0; i < value.meetings.length; i++) {
        
//         var thisIt = value.meetings[i].trim();
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.day = thisIt.substr(3, thisIt.indexOf(' ')-3);
//         }
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') { 
//             thisMeeting.startTime = thisIt.split(' <b>')[0].substr(-8).trim(); 
//         }
        
//           if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.endTime = thisIt.split(' <br>')[0].substr(-8).trim(); 
//         }
        
//         else if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingType = thisIt.split('</b>')[1].trim(); 
//         }
        
//         else if (thisIt.substr(0, 10) == '<b>Special') {
//             thisMeeting.specialInterest = thisIt.split('</b>')[1].trim(); 
//         }
        
//         if (i > 0 & thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             meetings.push(thisMeeting);
//         }
        
//         if (i == value.meetings.length - 1) {
//             meetings.push(thisMeeting);
//         }
//     }
    
//     thisMeeting.address2 = value.address2;
//     thisMeeting.notes = value.notes;
//     thisMeeting.access = value.access; 
    
//     callback();
// });

// function printIt () {
//     for (var i=0; i < meetings.length; i++) {
//         console.log(meetings[i]);
//         console.log(meetings.length);
//         fs.writeFileSync('groups7.txt', JSON.stringify(meetings));
//     }
// }

// setTimeout(printIt, 1000); 


// //FOR GROUPS 8 TXT FILE
// var rawDataFile = fs.readFileSync('raw_groups8.txt');

// var rawData = JSON.parse(rawDataFile);

// var meetings = []; 

// async.eachSeries(rawData, function(value, callback){
//     var thisMeeting = new Object; 
//     thisMeeting.building = value.building; 
//     thisMeeting.name = value.name;
//     thisMeeting.address1 = value.address1;
//     // thisMeeting.notes = value.notes;
//     // thisMeeting.access = value.access; 
//     for (var i=0; i < value.meetings.length; i++) {
        
//         var thisIt = value.meetings[i].trim();
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.day = thisIt.substr(3, thisIt.indexOf(' ')-3);
//         }
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') { 
//             thisMeeting.startTime = thisIt.split(' <b>')[0].substr(-8).trim(); 
//         }
        
//           if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.endTime = thisIt.split(' <br>')[0].substr(-8).trim(); 
//         }
        
//         else if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingType = thisIt.split('</b>')[1].trim(); 
//         }
        
//         else if (thisIt.substr(0, 10) == '<b>Special') {
//             thisMeeting.specialInterest = thisIt.split('</b>')[1].trim(); 
//         }
        
//         if (i > 0 & thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             meetings.push(thisMeeting);
//         }
        
//         if (i == value.meetings.length - 1) {
//             meetings.push(thisMeeting);
//         }
//     }
    
//     thisMeeting.address2 = value.address2;
//     thisMeeting.notes = value.notes;
//     thisMeeting.access = value.access; 
    
//     callback();
// });

// function printIt () {
//     for (var i=0; i < meetings.length; i++) {
//         console.log(meetings[i]);
//         console.log(meetings.length);
//         fs.writeFileSync('groups8.txt', JSON.stringify(meetings));
//     }
// }

// setTimeout(printIt, 1000);





// //FOR GROUPS 9 TXT FILE
// var rawDataFile = fs.readFileSync('raw_groups9.txt');

// var rawData = JSON.parse(rawDataFile);

// var meetings = []; 

// async.eachSeries(rawData, function(value, callback){
//     var thisMeeting = new Object; 
//     thisMeeting.building = value.building; 
//     thisMeeting.name = value.name;
//     thisMeeting.address1 = value.address1;
//     // thisMeeting.notes = value.notes;
//     // thisMeeting.access = value.access; 
//     for (var i=0; i < value.meetings.length; i++) {
        
//         var thisIt = value.meetings[i].trim();
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.day = thisIt.substr(3, thisIt.indexOf(' ')-3);
//         }
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') { 
//             thisMeeting.startTime = thisIt.split(' <b>')[0].substr(-8).trim(); 
//         }
        
//           if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.endTime = thisIt.split(' <br>')[0].substr(-8).trim(); 
//         }
        
//         else if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingType = thisIt.split('</b>')[1].trim(); 
//         }
        
//         else if (thisIt.substr(0, 10) == '<b>Special') {
//             thisMeeting.specialInterest = thisIt.split('</b>')[1].trim(); 
//         }
        
//         if (i > 0 & thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             meetings.push(thisMeeting);
//         }
        
//         if (i == value.meetings.length - 1) {
//             meetings.push(thisMeeting);
//         }
//     }
    
//     thisMeeting.address2 = value.address2;
//     thisMeeting.notes = value.notes;
//     thisMeeting.access = value.access; 
    
//     callback();
// });

// function printIt () {
//     for (var i=0; i < meetings.length; i++) {
//         console.log(meetings[i]);
//         console.log(meetings.length);
//         fs.writeFileSync('groups9.txt', JSON.stringify(meetings));
//     }
// }

// setTimeout(printIt, 1000); 





/////FOR GROUPS 10 TXT FILE
// var rawDataFile = fs.readFileSync('raw_groups10.txt');

// var rawData = JSON.parse(rawDataFile);

// var meetings = []; 


//  async.eachSeries(rawData, function(value, callback){
//     var thisMeeting = new Object; 
//     thisMeeting.building = value.building; 
//     thisMeeting.name = value.name;
//     thisMeeting.address1 = value.address1;

//     for (var i=0; i < value.meetings.length; i++) {
        
//         var thisIt = value.meetings[i].trim();
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.day = thisIt.substr(3, thisIt.indexOf(' ')-3);
//         }
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') { 
//             thisMeeting.startTime = thisIt.split(' <b>')[0].substr(-8).trim(); 
//         }
        
//           if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.endTime = thisIt.split(' <br>')[0].substr(-8).trim(); 
//         }
        
//         else if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingType = thisIt.split('</b>')[1].trim(); 
//         }
        
//         else if (thisIt.substr(0, 10) == '<b>Special') {
//             thisMeeting.specialInterest = thisIt.split('</b>')[1].trim(); 
//         }
        
//         if (i > 0 & thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             meetings.push(thisMeeting);
//         }
        
//         if (i == value.meetings.length - 1) {
//             meetings.push(thisMeeting);
//         }
       
//     }
//         thisMeeting.address2 = value.address2;
//         thisMeeting.notes = value.notes;
//         thisMeeting.access = value.access; 
        
//         callback();
// });
  
//   function printIt () {
//     for (var i=0; i < meetings.length; i++) {
//         console.log(meetings[i]);
//         console.log(meetings.length);
//         fs.writeFileSync('groups10.txt', JSON.stringify(meetings));
//     }
// }

// setTimeout(printIt, 2000); 