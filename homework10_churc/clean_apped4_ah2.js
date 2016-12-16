/////CLEANED UP clean_apped4_ah.js 
// // ///THIS WORKS IT TAKES apped4_ah.js AND CLEANS IT UP 
// // ////AFTER clean_apped4_ah2.js GO TO clean_apped6_ah.js TO INSERT RESULTING TXT FILES INTO MONGO
/////////GO TO class3geo.js TO GET LAT LONG FOR THE TXT FILE ADDRESSES


// // // ////CLEANING & ADDING ADDRESS 2 ///////
//////24 HOURS and DOW NUMBERS


var fs = require('fs');
var async = require('async');

///////////////THIS WORKS - NEED TO COPY THIS FOR EACH AREA

////////// TXT FILE 1
var rawDataFile = fs.readFileSync('/home/ubuntu/workspace/raw_groups1.txt');

var rawData = JSON.parse(rawDataFile);

var meetings = []; 

var dayQuery1 = [];

var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

async.eachSeries(rawData, function(value, callback){
    var thisMeeting = new Object; 
    thisMeeting.building = value.building; 
    thisMeeting.name = value.name;
    thisMeeting.address1 = value.address1;
    thisMeeting.borough = "Manhattan";
    thisMeeting.details = value.notes;
    thisMeeting.access = value.access;
    
 
    for (var i=0; i < value.meetings.length; i++) {
        
        var thisIt = value.meetings[i].trim();
        
        if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
            thisMeeting.day = thisIt.substr(3, thisIt.indexOf(' ')-3);
        }
        
///////////THIS WORKS TO TAKE S OFF DOW AND GET NUMBER FOR EACH DAY  
        if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
            dayQuery1 = thisIt.substr(3, thisIt.indexOf(' ')-4);
            thisMeeting.dayQuery = weekdays.indexOf(dayQuery1);
        }
        
////////THIS WORKS for START TIME ////TO 24 HOURS
        if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') { 
            thisMeeting.startTime = thisIt.split(' <b>')[0].substr(-8).trim(); 
            thisMeeting.startTime1 = thisIt.split(' <b>')[0].substr(-8).trim().split(":")[0]; 
            thisMeeting.startTime2 = thisIt.split(' <b>')[0].substr(-8).trim().split(" ")[0].split(":")[1]; 
            thisMeeting.startTimeM = thisIt.split(' <b>')[0].substr(-8).trim().split(" ")[1];
            if(thisMeeting.startTimeM ==='PM'){  
            ///parseInt converts string to number
                 thisMeeting.hourQuery = parseInt(thisMeeting.startTime1)+12;
             }
             else {
                  thisMeeting.hourQuery = thisMeeting.startTime1;
             }
            thisMeeting.startHr = thisMeeting.hourQuery + ":" + thisMeeting.startTime2;
        }
        
          if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
            thisMeeting.endTime = thisIt.split(' <br>')[0].substr(-8).trim(); 
            thisMeeting.endTime1 = thisIt.split(' <br>')[0].substr(-8).trim().split(":")[0]; 
            thisMeeting.endTime2 = thisIt.split(' <br>')[0].substr(-8).trim().split(" ")[0].split(":")[1]; 
            thisMeeting.endTimeM = thisIt.split(' <br>')[0].substr(-8).trim().split(" ")[1]; 
              if(thisMeeting.endTimeM ==='PM'){  
                  ///parseInt converts string to number
                 thisMeeting.endTime3 = parseInt(thisMeeting.endTime1)+12;
             }
             else {
                  thisMeeting.endTime3 = thisMeeting.endTime1;
             }
              thisMeeting.endHr = thisMeeting.endTime3 + ":" + thisMeeting.endTime2;
          }
        
/////THIS WORKS TO GET SHORT meetingType
        if (thisIt.substr(0, 10) == '<b>Meeting') {
            thisMeeting.meetingTypeLong = thisIt.split('</b>')[1].trim(); 
        }
        
        if (thisIt.substr(0, 10) == '<b>Meeting') {
            thisMeeting.meetingType = thisIt.split('</b>')[1].trim().split(" =")[0]; 
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
    
    callback();
});

function printIt () {
    for (var i=0; i < meetings.length; i++) {
        console.log(meetings[i]);
        console.log(meetings.length);
        fs.writeFileSync('/home/ubuntu/workspace/groups1.txt', JSON.stringify(meetings));
    }
}

setTimeout(printIt, 1000); 



////////TXT FILE 2
// //////////////////////////////////////////////
// var rawDataFile = fs.readFileSync('/home/ubuntu/workspace/raw_groups2.txt');

// var rawData = JSON.parse(rawDataFile);

// var meetings = []; 

// var dayQuery1 = [];

// var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// async.eachSeries(rawData, function(value, callback){
//     var thisMeeting = new Object; 
//     thisMeeting.building = value.building; 
//     thisMeeting.name = value.name;
//     thisMeeting.address1 = value.address1;
//     thisMeeting.borough = "Manhattan";
//     thisMeeting.details = value.notes;
//     thisMeeting.access = value.access;
    
 
//     for (var i=0; i < value.meetings.length; i++) {
        
//         var thisIt = value.meetings[i].trim();
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.day = thisIt.substr(3, thisIt.indexOf(' ')-3);
//         }
        
// ///////////THIS WORKS TO TAKE S OFF DOW AND GET NUMBER FOR EACH DAY  
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             dayQuery1 = thisIt.substr(3, thisIt.indexOf(' ')-4);
//             thisMeeting.dayQuery = weekdays.indexOf(dayQuery1);
//         }
        
// ////////THIS WORKS for START TIME ////TO 24 HOURS
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') { 
//             thisMeeting.startTime = thisIt.split(' <b>')[0].substr(-8).trim(); 
//             thisMeeting.startTime1 = thisIt.split(' <b>')[0].substr(-8).trim().split(":")[0]; 
//             thisMeeting.startTime2 = thisIt.split(' <b>')[0].substr(-8).trim().split(" ")[0].split(":")[1]; 
//             thisMeeting.startTimeM = thisIt.split(' <b>')[0].substr(-8).trim().split(" ")[1];
//             if(thisMeeting.startTimeM ==='PM'){  
//             ///parseInt converts string to number
//                  thisMeeting.hourQuery = parseInt(thisMeeting.startTime1)+12;
//              }
//              else {
//                   thisMeeting.hourQuery = thisMeeting.startTime1;
//              }
//             thisMeeting.startHr = thisMeeting.hourQuery + ":" + thisMeeting.startTime2;
//         }
        
//           if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.endTime = thisIt.split(' <br>')[0].substr(-8).trim(); 
//             thisMeeting.endTime1 = thisIt.split(' <br>')[0].substr(-8).trim().split(":")[0]; 
//             thisMeeting.endTime2 = thisIt.split(' <br>')[0].substr(-8).trim().split(" ")[0].split(":")[1]; 
//             thisMeeting.endTimeM = thisIt.split(' <br>')[0].substr(-8).trim().split(" ")[1]; 
//               if(thisMeeting.endTimeM ==='PM'){  
//                   ///parseInt converts string to number
//                  thisMeeting.endTime3 = parseInt(thisMeeting.endTime1)+12;
//              }
//              else {
//                   thisMeeting.endTime3 = thisMeeting.endTime1;
//              }
//               thisMeeting.endHr = thisMeeting.endTime3 + ":" + thisMeeting.endTime2;
//           }
        
// /////THIS WORKS TO GET SHORT meetingType
//         if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingTypeLong = thisIt.split('</b>')[1].trim(); 
//         }
        
//         if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingType = thisIt.split('</b>')[1].trim().split(" =")[0]; 
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
//   }
    
//     thisMeeting.address2 = value.address2;
    
//     callback();
// });

// function printIt () {
//     for (var i=0; i < meetings.length; i++) {
//         console.log(meetings[i]);
//         console.log(meetings.length);
//         fs.writeFileSync('/home/ubuntu/workspace/groups2.txt', JSON.stringify(meetings));
//     }
// }

// setTimeout(printIt, 1000); 


// ///////TXT FILE 3

// // //////////////////////////////////////////////
// var rawDataFile = fs.readFileSync('/home/ubuntu/workspace/raw_groups3.txt');

// var rawData = JSON.parse(rawDataFile);

// var meetings = []; 

// var dayQuery1 = [];

// var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// async.eachSeries(rawData, function(value, callback){
//     var thisMeeting = new Object; 
//     thisMeeting.building = value.building; 
//     thisMeeting.name = value.name;
//     thisMeeting.address1 = value.address1;
//     thisMeeting.borough = "Manhattan";
//     thisMeeting.details = value.notes;
//     thisMeeting.access = value.access;
    
 
//     for (var i=0; i < value.meetings.length; i++) {
        
//         var thisIt = value.meetings[i].trim();
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.day = thisIt.substr(3, thisIt.indexOf(' ')-3);
//         }
        
// ///////////THIS WORKS TO TAKE S OFF DOW AND GET NUMBER FOR EACH DAY  
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             dayQuery1 = thisIt.substr(3, thisIt.indexOf(' ')-4);
//             thisMeeting.dayQuery = weekdays.indexOf(dayQuery1);
//         }
        
// ////////THIS WORKS for START TIME ////TO 24 HOURS
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') { 
//             thisMeeting.startTime = thisIt.split(' <b>')[0].substr(-8).trim(); 
//             thisMeeting.startTime1 = thisIt.split(' <b>')[0].substr(-8).trim().split(":")[0]; 
//             thisMeeting.startTime2 = thisIt.split(' <b>')[0].substr(-8).trim().split(" ")[0].split(":")[1]; 
//             thisMeeting.startTimeM = thisIt.split(' <b>')[0].substr(-8).trim().split(" ")[1];
//             if(thisMeeting.startTimeM ==='PM'){  
//             ///parseInt converts string to number
//                  thisMeeting.hourQuery = parseInt(thisMeeting.startTime1)+12;
//              }
//              else {
//                   thisMeeting.hourQuery = thisMeeting.startTime1;
//              }
//             thisMeeting.startHr = thisMeeting.hourQuery + ":" + thisMeeting.startTime2;
//         }
        
//           if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.endTime = thisIt.split(' <br>')[0].substr(-8).trim(); 
//             thisMeeting.endTime1 = thisIt.split(' <br>')[0].substr(-8).trim().split(":")[0]; 
//             thisMeeting.endTime2 = thisIt.split(' <br>')[0].substr(-8).trim().split(" ")[0].split(":")[1]; 
//             thisMeeting.endTimeM = thisIt.split(' <br>')[0].substr(-8).trim().split(" ")[1]; 
//               if(thisMeeting.endTimeM ==='PM'){  
//                   ///parseInt converts string to number
//                  thisMeeting.endTime3 = parseInt(thisMeeting.endTime1)+12;
//              }
//              else {
//                   thisMeeting.endTime3 = thisMeeting.endTime1;
//              }
//               thisMeeting.endHr = thisMeeting.endTime3 + ":" + thisMeeting.endTime2;
//           }
        
// /////THIS WORKS TO GET SHORT meetingType
//         if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingTypeLong = thisIt.split('</b>')[1].trim(); 
//         }
        
//         if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingType = thisIt.split('</b>')[1].trim().split(" =")[0]; 
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
//   }
    
//     thisMeeting.address2 = value.address2;
    
//     callback();
// });

// function printIt () {
//     for (var i=0; i < meetings.length; i++) {
//         console.log(meetings[i]);
//         console.log(meetings.length);
//         fs.writeFileSync('/home/ubuntu/workspace/groups3.txt', JSON.stringify(meetings));
//     }
// }

// setTimeout(printIt, 1000); 


// ///////TXT FILE 4

// //////////////////////////////////////////////
// var rawDataFile = fs.readFileSync('/home/ubuntu/workspace/raw_groups4.txt');

// var rawData = JSON.parse(rawDataFile);

// var meetings = []; 

// var dayQuery1 = [];

// var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// async.eachSeries(rawData, function(value, callback){
//     var thisMeeting = new Object; 
//     thisMeeting.building = value.building; 
//     thisMeeting.name = value.name;
//     thisMeeting.address1 = value.address1;
//     thisMeeting.borough = "Manhattan";
//     thisMeeting.details = value.notes;
//     thisMeeting.access = value.access;
    
 
//     for (var i=0; i < value.meetings.length; i++) {
        
//         var thisIt = value.meetings[i].trim();
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.day = thisIt.substr(3, thisIt.indexOf(' ')-3);
//         }
        
// ///////////THIS WORKS TO TAKE S OFF DOW AND GET NUMBER FOR EACH DAY  
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             dayQuery1 = thisIt.substr(3, thisIt.indexOf(' ')-4);
//             thisMeeting.dayQuery = weekdays.indexOf(dayQuery1);
//         }
        
// ////////THIS WORKS for START TIME ////TO 24 HOURS
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') { 
//             thisMeeting.startTime = thisIt.split(' <b>')[0].substr(-8).trim(); 
//             thisMeeting.startTime1 = thisIt.split(' <b>')[0].substr(-8).trim().split(":")[0]; 
//             thisMeeting.startTime2 = thisIt.split(' <b>')[0].substr(-8).trim().split(" ")[0].split(":")[1]; 
//             thisMeeting.startTimeM = thisIt.split(' <b>')[0].substr(-8).trim().split(" ")[1];
//             if(thisMeeting.startTimeM ==='PM'){  
//             ///parseInt converts string to number
//                  thisMeeting.hourQuery = parseInt(thisMeeting.startTime1)+12;
//              }
//              else {
//                   thisMeeting.hourQuery = thisMeeting.startTime1;
//              }
//             thisMeeting.startHr = thisMeeting.hourQuery + ":" + thisMeeting.startTime2;
//         }
        
//           if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.endTime = thisIt.split(' <br>')[0].substr(-8).trim(); 
//             thisMeeting.endTime1 = thisIt.split(' <br>')[0].substr(-8).trim().split(":")[0]; 
//             thisMeeting.endTime2 = thisIt.split(' <br>')[0].substr(-8).trim().split(" ")[0].split(":")[1]; 
//             thisMeeting.endTimeM = thisIt.split(' <br>')[0].substr(-8).trim().split(" ")[1]; 
//               if(thisMeeting.endTimeM ==='PM'){  
//                   ///parseInt converts string to number
//                  thisMeeting.endTime3 = parseInt(thisMeeting.endTime1)+12;
//              }
//              else {
//                   thisMeeting.endTime3 = thisMeeting.endTime1;
//              }
//               thisMeeting.endHr = thisMeeting.endTime3 + ":" + thisMeeting.endTime2;
//           }
        
// /////THIS WORKS TO GET SHORT meetingType
//         if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingTypeLong = thisIt.split('</b>')[1].trim(); 
//         }
        
//         if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingType = thisIt.split('</b>')[1].trim().split(" =")[0]; 
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
//   }
    
//     thisMeeting.address2 = value.address2;
    
//     callback();
// });

// function printIt () {
//     for (var i=0; i < meetings.length; i++) {
//         console.log(meetings[i]);
//         console.log(meetings.length);
//         fs.writeFileSync('/home/ubuntu/workspace/groups4.txt', JSON.stringify(meetings));
//     }
// }

// setTimeout(printIt, 1000); 

// /////TXT FILE 5

// //////////////////////////////////////////////
// var rawDataFile = fs.readFileSync('/home/ubuntu/workspace/raw_groups5.txt');

// var rawData = JSON.parse(rawDataFile);

// var meetings = []; 

// var dayQuery1 = [];

// var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// async.eachSeries(rawData, function(value, callback){
//     var thisMeeting = new Object; 
//     thisMeeting.building = value.building; 
//     thisMeeting.name = value.name;
//     thisMeeting.address1 = value.address1;
//     thisMeeting.borough = "Manhattan";
//     thisMeeting.details = value.notes;
//     thisMeeting.access = value.access;
    
 
//     for (var i=0; i < value.meetings.length; i++) {
        
//         var thisIt = value.meetings[i].trim();
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.day = thisIt.substr(3, thisIt.indexOf(' ')-3);
//         }
        
// ///////////THIS WORKS TO TAKE S OFF DOW AND GET NUMBER FOR EACH DAY  
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             dayQuery1 = thisIt.substr(3, thisIt.indexOf(' ')-4);
//             thisMeeting.dayQuery = weekdays.indexOf(dayQuery1);
//         }
        
// ////////THIS WORKS for START TIME ////TO 24 HOURS
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') { 
//             thisMeeting.startTime = thisIt.split(' <b>')[0].substr(-8).trim(); 
//             thisMeeting.startTime1 = thisIt.split(' <b>')[0].substr(-8).trim().split(":")[0]; 
//             thisMeeting.startTime2 = thisIt.split(' <b>')[0].substr(-8).trim().split(" ")[0].split(":")[1]; 
//             thisMeeting.startTimeM = thisIt.split(' <b>')[0].substr(-8).trim().split(" ")[1];
//             if(thisMeeting.startTimeM ==='PM'){  
//             ///parseInt converts string to number
//                  thisMeeting.hourQuery = parseInt(thisMeeting.startTime1)+12;
//              }
//              else {
//                   thisMeeting.hourQuery = thisMeeting.startTime1;
//              }
//             thisMeeting.startHr = thisMeeting.hourQuery + ":" + thisMeeting.startTime2;
//         }
        
//           if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.endTime = thisIt.split(' <br>')[0].substr(-8).trim(); 
//             thisMeeting.endTime1 = thisIt.split(' <br>')[0].substr(-8).trim().split(":")[0]; 
//             thisMeeting.endTime2 = thisIt.split(' <br>')[0].substr(-8).trim().split(" ")[0].split(":")[1]; 
//             thisMeeting.endTimeM = thisIt.split(' <br>')[0].substr(-8).trim().split(" ")[1]; 
//               if(thisMeeting.endTimeM ==='PM'){  
//                   ///parseInt converts string to number
//                  thisMeeting.endTime3 = parseInt(thisMeeting.endTime1)+12;
//              }
//              else {
//                   thisMeeting.endTime3 = thisMeeting.endTime1;
//              }
//               thisMeeting.endHr = thisMeeting.endTime3 + ":" + thisMeeting.endTime2;
//           }
        
// /////THIS WORKS TO GET SHORT meetingType
//         if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingTypeLong = thisIt.split('</b>')[1].trim(); 
//         }
        
//         if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingType = thisIt.split('</b>')[1].trim().split(" =")[0]; 
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
//   }
    
//     thisMeeting.address2 = value.address2;
    
//     callback();
// });

// function printIt () {
//     for (var i=0; i < meetings.length; i++) {
//         console.log(meetings[i]);
//         console.log(meetings.length);
//         fs.writeFileSync('/home/ubuntu/workspace/groups5.txt', JSON.stringify(meetings));
//     }
// }

// setTimeout(printIt, 1000); 

// //////TXT FILE 6

// //////////////////////////////////////////////
// var rawDataFile = fs.readFileSync('/home/ubuntu/workspace/raw_groups6.txt');

// var rawData = JSON.parse(rawDataFile);

// var meetings = []; 

// var dayQuery1 = [];

// var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// async.eachSeries(rawData, function(value, callback){
//     var thisMeeting = new Object; 
//     thisMeeting.building = value.building; 
//     thisMeeting.name = value.name;
//     thisMeeting.address1 = value.address1;
//     thisMeeting.borough = "Manhattan";
//     thisMeeting.details = value.notes;
//     thisMeeting.access = value.access;
    
 
//     for (var i=0; i < value.meetings.length; i++) {
        
//         var thisIt = value.meetings[i].trim();
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.day = thisIt.substr(3, thisIt.indexOf(' ')-3);
//         }
        
// ///////////THIS WORKS TO TAKE S OFF DOW AND GET NUMBER FOR EACH DAY  
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             dayQuery1 = thisIt.substr(3, thisIt.indexOf(' ')-4);
//             thisMeeting.dayQuery = weekdays.indexOf(dayQuery1);
//         }
        
// ////////THIS WORKS for START TIME ////TO 24 HOURS
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') { 
//             thisMeeting.startTime = thisIt.split(' <b>')[0].substr(-8).trim(); 
//             thisMeeting.startTime1 = thisIt.split(' <b>')[0].substr(-8).trim().split(":")[0]; 
//             thisMeeting.startTime2 = thisIt.split(' <b>')[0].substr(-8).trim().split(" ")[0].split(":")[1]; 
//             thisMeeting.startTimeM = thisIt.split(' <b>')[0].substr(-8).trim().split(" ")[1];
//             if(thisMeeting.startTimeM ==='PM'){  
//             ///parseInt converts string to number
//                  thisMeeting.hourQuery = parseInt(thisMeeting.startTime1)+12;
//              }
//              else {
//                   thisMeeting.hourQuery = thisMeeting.startTime1;
//              }
//             thisMeeting.startHr = thisMeeting.hourQuery + ":" + thisMeeting.startTime2;
//         }
        
//           if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.endTime = thisIt.split(' <br>')[0].substr(-8).trim(); 
//             thisMeeting.endTime1 = thisIt.split(' <br>')[0].substr(-8).trim().split(":")[0]; 
//             thisMeeting.endTime2 = thisIt.split(' <br>')[0].substr(-8).trim().split(" ")[0].split(":")[1]; 
//             thisMeeting.endTimeM = thisIt.split(' <br>')[0].substr(-8).trim().split(" ")[1]; 
//               if(thisMeeting.endTimeM ==='PM'){  
//                   ///parseInt converts string to number
//                  thisMeeting.endTime3 = parseInt(thisMeeting.endTime1)+12;
//              }
//              else {
//                   thisMeeting.endTime3 = thisMeeting.endTime1;
//              }
//               thisMeeting.endHr = thisMeeting.endTime3 + ":" + thisMeeting.endTime2;
//           }
        
// /////THIS WORKS TO GET SHORT meetingType
//         if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingTypeLong = thisIt.split('</b>')[1].trim(); 
//         }
        
//         if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingType = thisIt.split('</b>')[1].trim().split(" =")[0]; 
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
//   }
    
//     thisMeeting.address2 = value.address2;
    
//     callback();
// });

// function printIt () {
//     for (var i=0; i < meetings.length; i++) {
//         console.log(meetings[i]);
//         console.log(meetings.length);
//         fs.writeFileSync('/home/ubuntu/workspace/groups6.txt', JSON.stringify(meetings));
//     }
// }

// setTimeout(printIt, 1000); 

// /////TXT FILE 7

// //////////////////////////////////////////////
// var rawDataFile = fs.readFileSync('/home/ubuntu/workspace/raw_groups7.txt');

// var rawData = JSON.parse(rawDataFile);

// var meetings = []; 

// var dayQuery1 = [];

// var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// async.eachSeries(rawData, function(value, callback){
//     var thisMeeting = new Object; 
//     thisMeeting.building = value.building; 
//     thisMeeting.name = value.name;
//     thisMeeting.address1 = value.address1;
//     thisMeeting.borough = "Manhattan";
//     thisMeeting.details = value.notes;
//     thisMeeting.access = value.access;
    
 
//     for (var i=0; i < value.meetings.length; i++) {
        
//         var thisIt = value.meetings[i].trim();
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.day = thisIt.substr(3, thisIt.indexOf(' ')-3);
//         }
        
// ///////////THIS WORKS TO TAKE S OFF DOW AND GET NUMBER FOR EACH DAY  
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             dayQuery1 = thisIt.substr(3, thisIt.indexOf(' ')-4);
//             thisMeeting.dayQuery = weekdays.indexOf(dayQuery1);
//         }
        
// ////////THIS WORKS for START TIME ////TO 24 HOURS
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') { 
//             thisMeeting.startTime = thisIt.split(' <b>')[0].substr(-8).trim(); 
//             thisMeeting.startTime1 = thisIt.split(' <b>')[0].substr(-8).trim().split(":")[0]; 
//             thisMeeting.startTime2 = thisIt.split(' <b>')[0].substr(-8).trim().split(" ")[0].split(":")[1]; 
//             thisMeeting.startTimeM = thisIt.split(' <b>')[0].substr(-8).trim().split(" ")[1];
//             if(thisMeeting.startTimeM ==='PM'){  
//             ///parseInt converts string to number
//                  thisMeeting.hourQuery = parseInt(thisMeeting.startTime1)+12;
//              }
//              else {
//                   thisMeeting.hourQuery = thisMeeting.startTime1;
//              }
//             thisMeeting.startHr = thisMeeting.hourQuery + ":" + thisMeeting.startTime2;
//         }
        
//           if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.endTime = thisIt.split(' <br>')[0].substr(-8).trim(); 
//             thisMeeting.endTime1 = thisIt.split(' <br>')[0].substr(-8).trim().split(":")[0]; 
//             thisMeeting.endTime2 = thisIt.split(' <br>')[0].substr(-8).trim().split(" ")[0].split(":")[1]; 
//             thisMeeting.endTimeM = thisIt.split(' <br>')[0].substr(-8).trim().split(" ")[1]; 
//               if(thisMeeting.endTimeM ==='PM'){  
//                   ///parseInt converts string to number
//                  thisMeeting.endTime3 = parseInt(thisMeeting.endTime1)+12;
//              }
//              else {
//                   thisMeeting.endTime3 = thisMeeting.endTime1;
//              }
//               thisMeeting.endHr = thisMeeting.endTime3 + ":" + thisMeeting.endTime2;
//           }
        
// /////THIS WORKS TO GET SHORT meetingType
//         if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingTypeLong = thisIt.split('</b>')[1].trim(); 
//         }
        
//         if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingType = thisIt.split('</b>')[1].trim().split(" =")[0]; 
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
//   }
    
//     thisMeeting.address2 = value.address2;
    
//     callback();
// });

// function printIt () {
//     for (var i=0; i < meetings.length; i++) {
//         console.log(meetings[i]);
//         console.log(meetings.length);
//         fs.writeFileSync('/home/ubuntu/workspace/groups7.txt', JSON.stringify(meetings));
//     }
// }

// setTimeout(printIt, 1000); 

// ////TXT FILE 8

// //////////////////////////////////////////////
// var rawDataFile = fs.readFileSync('/home/ubuntu/workspace/raw_groups8.txt');

// var rawData = JSON.parse(rawDataFile);

// var meetings = []; 

// var dayQuery1 = [];

// var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// async.eachSeries(rawData, function(value, callback){
//     var thisMeeting = new Object; 
//     thisMeeting.building = value.building; 
//     thisMeeting.name = value.name;
//     thisMeeting.address1 = value.address1;
//     thisMeeting.borough = "Manhattan";
//     thisMeeting.details = value.notes;
//     thisMeeting.access = value.access;
    
 
//     for (var i=0; i < value.meetings.length; i++) {
        
//         var thisIt = value.meetings[i].trim();
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.day = thisIt.substr(3, thisIt.indexOf(' ')-3);
//         }
        
// ///////////THIS WORKS TO TAKE S OFF DOW AND GET NUMBER FOR EACH DAY  
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             dayQuery1 = thisIt.substr(3, thisIt.indexOf(' ')-4);
//             thisMeeting.dayQuery = weekdays.indexOf(dayQuery1);
//         }
        
// ////////THIS WORKS for START TIME ////TO 24 HOURS
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') { 
//             thisMeeting.startTime = thisIt.split(' <b>')[0].substr(-8).trim(); 
//             thisMeeting.startTime1 = thisIt.split(' <b>')[0].substr(-8).trim().split(":")[0]; 
//             thisMeeting.startTime2 = thisIt.split(' <b>')[0].substr(-8).trim().split(" ")[0].split(":")[1]; 
//             thisMeeting.startTimeM = thisIt.split(' <b>')[0].substr(-8).trim().split(" ")[1];
//             if(thisMeeting.startTimeM ==='PM'){  
//             ///parseInt converts string to number
//                  thisMeeting.hourQuery = parseInt(thisMeeting.startTime1)+12;
//              }
//              else {
//                   thisMeeting.hourQuery = thisMeeting.startTime1;
//              }
//             thisMeeting.startHr = thisMeeting.hourQuery + ":" + thisMeeting.startTime2;
//         }
        
//           if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.endTime = thisIt.split(' <br>')[0].substr(-8).trim(); 
//             thisMeeting.endTime1 = thisIt.split(' <br>')[0].substr(-8).trim().split(":")[0]; 
//             thisMeeting.endTime2 = thisIt.split(' <br>')[0].substr(-8).trim().split(" ")[0].split(":")[1]; 
//             thisMeeting.endTimeM = thisIt.split(' <br>')[0].substr(-8).trim().split(" ")[1]; 
//               if(thisMeeting.endTimeM ==='PM'){  
//                   ///parseInt converts string to number
//                  thisMeeting.endTime3 = parseInt(thisMeeting.endTime1)+12;
//              }
//              else {
//                   thisMeeting.endTime3 = thisMeeting.endTime1;
//              }
//               thisMeeting.endHr = thisMeeting.endTime3 + ":" + thisMeeting.endTime2;
//           }
        
// /////THIS WORKS TO GET SHORT meetingType
//         if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingTypeLong = thisIt.split('</b>')[1].trim(); 
//         }
        
//         if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingType = thisIt.split('</b>')[1].trim().split(" =")[0]; 
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
//   }
    
//     thisMeeting.address2 = value.address2;
    
//     callback();
// });

// function printIt () {
//     for (var i=0; i < meetings.length; i++) {
//         console.log(meetings[i]);
//         console.log(meetings.length);
//         fs.writeFileSync('/home/ubuntu/workspace/groups8.txt', JSON.stringify(meetings));
//     }
// }

// setTimeout(printIt, 1000); 

// ////TXT FILE 9

// //////////////////////////////////////////////
// var rawDataFile = fs.readFileSync('/home/ubuntu/workspace/raw_groups9.txt');

// var rawData = JSON.parse(rawDataFile);

// var meetings = []; 

// var dayQuery1 = [];

// var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// async.eachSeries(rawData, function(value, callback){
//     var thisMeeting = new Object; 
//     thisMeeting.building = value.building; 
//     thisMeeting.name = value.name;
//     thisMeeting.address1 = value.address1;
//     thisMeeting.borough = "Manhattan";
//     thisMeeting.details = value.notes;
//     thisMeeting.access = value.access;
    
 
//     for (var i=0; i < value.meetings.length; i++) {
        
//         var thisIt = value.meetings[i].trim();
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.day = thisIt.substr(3, thisIt.indexOf(' ')-3);
//         }
        
// ///////////THIS WORKS TO TAKE S OFF DOW AND GET NUMBER FOR EACH DAY  
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             dayQuery1 = thisIt.substr(3, thisIt.indexOf(' ')-4);
//             thisMeeting.dayQuery = weekdays.indexOf(dayQuery1);
//         }
        
// ////////THIS WORKS for START TIME ////TO 24 HOURS
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') { 
//             thisMeeting.startTime = thisIt.split(' <b>')[0].substr(-8).trim(); 
//             thisMeeting.startTime1 = thisIt.split(' <b>')[0].substr(-8).trim().split(":")[0]; 
//             thisMeeting.startTime2 = thisIt.split(' <b>')[0].substr(-8).trim().split(" ")[0].split(":")[1]; 
//             thisMeeting.startTimeM = thisIt.split(' <b>')[0].substr(-8).trim().split(" ")[1];
//             if(thisMeeting.startTimeM ==='PM'){  
//             ///parseInt converts string to number
//                  thisMeeting.hourQuery = parseInt(thisMeeting.startTime1)+12;
//              }
//              else {
//                   thisMeeting.hourQuery = thisMeeting.startTime1;
//              }
//             thisMeeting.startHr = thisMeeting.hourQuery + ":" + thisMeeting.startTime2;
//         }
        
//           if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.endTime = thisIt.split(' <br>')[0].substr(-8).trim(); 
//             thisMeeting.endTime1 = thisIt.split(' <br>')[0].substr(-8).trim().split(":")[0]; 
//             thisMeeting.endTime2 = thisIt.split(' <br>')[0].substr(-8).trim().split(" ")[0].split(":")[1]; 
//             thisMeeting.endTimeM = thisIt.split(' <br>')[0].substr(-8).trim().split(" ")[1]; 
//               if(thisMeeting.endTimeM ==='PM'){  
//                   ///parseInt converts string to number
//                  thisMeeting.endTime3 = parseInt(thisMeeting.endTime1)+12;
//              }
//              else {
//                   thisMeeting.endTime3 = thisMeeting.endTime1;
//              }
//               thisMeeting.endHr = thisMeeting.endTime3 + ":" + thisMeeting.endTime2;
//           }
        
// /////THIS WORKS TO GET SHORT meetingType
//         if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingTypeLong = thisIt.split('</b>')[1].trim(); 
//         }
        
//         if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingType = thisIt.split('</b>')[1].trim().split(" =")[0]; 
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
//   }
    
//     thisMeeting.address2 = value.address2;
    
//     callback();
// });

// function printIt () {
//     for (var i=0; i < meetings.length; i++) {
//         console.log(meetings[i]);
//         console.log(meetings.length);
//         fs.writeFileSync('/home/ubuntu/workspace/groups9.txt', JSON.stringify(meetings));
//     }
// }

// setTimeout(printIt, 1000); 

// /////TXT FILE 10
// //////////////////////////////////////////////
// var rawDataFile = fs.readFileSync('/home/ubuntu/workspace/raw_groups10.txt');

// var rawData = JSON.parse(rawDataFile);

// var meetings = []; 

// var dayQuery1 = [];

// var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// async.eachSeries(rawData, function(value, callback){
//     var thisMeeting = new Object; 
//     thisMeeting.building = value.building; 
//     thisMeeting.name = value.name;
//     thisMeeting.address1 = value.address1;
//     thisMeeting.borough = "Manhattan";
//     thisMeeting.details = value.notes;
//     thisMeeting.access = value.access;
    
 
//     for (var i=0; i < value.meetings.length; i++) {
        
//         var thisIt = value.meetings[i].trim();
        
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.day = thisIt.substr(3, thisIt.indexOf(' ')-3);
//         }
        
// ///////////THIS WORKS TO TAKE S OFF DOW AND GET NUMBER FOR EACH DAY  
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             dayQuery1 = thisIt.substr(3, thisIt.indexOf(' ')-4);
//             thisMeeting.dayQuery = weekdays.indexOf(dayQuery1);
//         }
        
// ////////THIS WORKS for START TIME ////TO 24 HOURS
//         if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') { 
//             thisMeeting.startTime = thisIt.split(' <b>')[0].substr(-8).trim(); 
//             thisMeeting.startTime1 = thisIt.split(' <b>')[0].substr(-8).trim().split(":")[0]; 
//             thisMeeting.startTime2 = thisIt.split(' <b>')[0].substr(-8).trim().split(" ")[0].split(":")[1]; 
//             thisMeeting.startTimeM = thisIt.split(' <b>')[0].substr(-8).trim().split(" ")[1];
//             if(thisMeeting.startTimeM ==='PM'){  
//             ///parseInt converts string to number
//                  thisMeeting.hourQuery = parseInt(thisMeeting.startTime1)+12;
//              }
//              else {
//                   thisMeeting.hourQuery = thisMeeting.startTime1;
//              }
//             thisMeeting.startHr = thisMeeting.hourQuery + ":" + thisMeeting.startTime2;
//         }
        
//           if (thisIt.substr(thisIt.indexOf(' ')-4, 4) == 'days') {
//             thisMeeting.endTime = thisIt.split(' <br>')[0].substr(-8).trim(); 
//             thisMeeting.endTime1 = thisIt.split(' <br>')[0].substr(-8).trim().split(":")[0]; 
//             thisMeeting.endTime2 = thisIt.split(' <br>')[0].substr(-8).trim().split(" ")[0].split(":")[1]; 
//             thisMeeting.endTimeM = thisIt.split(' <br>')[0].substr(-8).trim().split(" ")[1]; 
//               if(thisMeeting.endTimeM ==='PM'){  
//                   ///parseInt converts string to number
//                  thisMeeting.endTime3 = parseInt(thisMeeting.endTime1)+12;
//              }
//              else {
//                   thisMeeting.endTime3 = thisMeeting.endTime1;
//              }
//               thisMeeting.endHr = thisMeeting.endTime3 + ":" + thisMeeting.endTime2;
//           }
        
// /////THIS WORKS TO GET SHORT meetingType
//         if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingTypeLong = thisIt.split('</b>')[1].trim(); 
//         }
        
//         if (thisIt.substr(0, 10) == '<b>Meeting') {
//             thisMeeting.meetingType = thisIt.split('</b>')[1].trim().split(" =")[0]; 
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
//   }
    
//     thisMeeting.address2 = value.address2;
    
//     callback();
// });

// function printIt () {
//     for (var i=0; i < meetings.length; i++) {
//         console.log(meetings[i]);
//         console.log(meetings.length);
//         fs.writeFileSync('/home/ubuntu/workspace/groups10.txt', JSON.stringify(meetings));
//     }
// }

// setTimeout(printIt, 1000); 
