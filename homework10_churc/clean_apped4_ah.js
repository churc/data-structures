// ///THIS WORKS - IT TAKES apped4_ah.js AND CLEANS IT UP 
// ////THIS CAN BE SENT TO MONGODB - see clean_apped6_ah.js


// ////TRYING ADDING ADDRESS 2 and looping in the geocode///////
var fs = require('fs');
var async = require('async');
var request = require('request');

// SETTING ENVIRONMENT VARIABLES (in Linux): 
// in terminal: export NEW_VAR="Content of NEW_VAR variable" (Linux variable in the server)
// printenv | grep NEW_VAR (retrieving the variable)
// export GMAKEY='apiKey'
// printenv | grep GMAKEY (to double check if you've successfully stored your Key)

var apiKey = process.env.GMAKEY;

//FOR GROUPS 10 TXT FILE
var rawDataFile = fs.readFileSync('raw_groups10.txt');

var rawData = JSON.parse(rawDataFile);

var meetings = []; 


 async.eachSeries(rawData, function(value, callback){
    var thisMeeting = new Object; 
    thisMeeting.building = value.building; 
    thisMeeting.name = value.name;
    thisMeeting.address1 = value.address1;
    //thisMeeting.address2 = value.address2;
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
        thisMeeting.address2 = value.address2;
        thisMeeting.latLong = value.latLong;
        thisMeeting.notes = value.notes;
        thisMeeting.access = value.access; 
        
        callback();
});
  
  function printIt () {
    for (var i=0; i < meetings.length; i++) {
        console.log(meetings[i]);
        console.log(meetings.length);
      //  fs.writeFileSync('groups10.txt', JSON.stringify(meetings));
    }
}

setTimeout(printIt, 2000); 

///\\\\latLong
  
 var addresses = [];

 var addressLL  = [];
 

  
for (var i = 0; i < rawData.length; i++) {
  addresses.push(rawData[i].address2);
}

async.eachSeries(addresses, function(value, callback) {
var apiRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + value + '&key=' + apiKey; 
 
 var thisMeeting = new Object; 
    // thisMeeting.building = value.building; 
    // thisMeeting.name = value.name;
    // thisMeeting.address1 = value.address1;
    //thisMeeting.addresses = value;
    thisMeeting.address2 = value.address2;
    thisMeeting.latLong = value;
  //  rawData.address2 = value.address2;
  //  thisMeeting.address2 = value.address2;
  // thisMeeting.latLong = value;
    
//  var thatMeeting = new Object;
//  //var thisMeeting = new Object;
//  rawData.address2 = value;
//  //thisMeeting.address2 = value;

// for (var i=0; i < value.address2.length; i++) {
//for (var i = 0; i < rawData.length; i++){
 
  for (var i = 0; i < addresses.length; i++){

 request(apiRequest, function(err, resp, body) {
        if (err) {
            throw err;
        }
        //else {
         
     thisMeeting.address2 = JSON.parse(body).results[0];
    thisMeeting.latLong = JSON.parse(body).results[0].geometry.location;
     ///   }
 
        addressLL.push(thisMeeting);
        
        //added
        // thisMeeting.address2 = value.address2;
        // thisMeeting.latLong = value.latLong;
    });
    
    
     setTimeout(callback, 2000);
// }   
//  },function() {
//      console.log(address2);

//   // fs.writeFileSync('/home/ubuntu/workspace/meetings.txt', JSON.stringify(meetingsData));
}
}, function () {
    for (var i=0; i < addressLL.length; i++) {
        console.log(addressLL[i]);
        console.log(addressLL.length);
      //  fs.writeFileSync('groups10.txt', JSON.stringify(meetings));
    }


// }, function printIt () {
//     for (var i=0; i < addressLL.length; i++) {
//         console.log(addressLL[i]);
//         console.log(addressLL.length);
//       //  fs.writeFileSync('groups10.txt', JSON.stringify(meetings));
//     } 
});       





////////GETS BOTH LAT AND ADDRESS FOR ALL ADDRESSES  GetS SAME ONES MANY TIMES
// ////TRYING ADDING ADDRESS 2 and looping in the geocode///////
// var fs = require('fs');
// var async = require('async');
// var request = require('request');

// // SETTING ENVIRONMENT VARIABLES (in Linux): 
// // in terminal: export NEW_VAR="Content of NEW_VAR variable" (Linux variable in the server)
// // printenv | grep NEW_VAR (retrieving the variable)
// // export GMAKEY='apiKey'
// // printenv | grep GMAKEY (to double check if you've successfully stored your Key)

// var apiKey = process.env.GMAKEY;

// //FOR GROUPS 10 TXT FILE
// var rawDataFile = fs.readFileSync('raw_groups10.txt');

// var rawData = JSON.parse(rawDataFile);

// var meetings = []; 


//  async.eachSeries(rawData, function(value, callback){
//     var thisMeeting = new Object; 
//     thisMeeting.building = value.building; 
//     thisMeeting.name = value.name;
//     thisMeeting.address1 = value.address1;
//     //thisMeeting.address2 = value.address2;
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
//         thisMeeting.address2 = value.address2;
//         thisMeeting.latLong = value.latLong;
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

// ///\\\\latLong
//   var addresses = [];
//  var latLong = [];
//  var addressLL  = [];
//   var address2  = [];

  
// for (var i = 0; i < rawData.length; i++) {
//   addresses.push(rawData[i].address2);
// }


  
// async.eachSeries(addresses, function(value, callback) {
// var apiRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + value + '&key=' + apiKey; 
 
//  var thatMeeting = new Object; 
//     // thisMeeting.building = value.building; 
//     // thisMeeting.name = value.name;
//     // thisMeeting.address1 = value.address1;
//     thatMeeting.address2 = value;
//   //  rawData.address2 = value.address2;
//   //  thisMeeting.address2 = value.address2;
//     thatMeeting.latLong = value;
    
// //  var thatMeeting = new Object;
// //  //var thisMeeting = new Object;
// //  rawData.address2 = value;
// //  //thisMeeting.address2 = value;

// // for (var i=0; i < value.address2.length; i++) {
// //for (var i = 0; i < rawData.length; i++){
//  // for (var i = 0; i < addresses.length; i++){
//     for (var i = 0; i < addresses.length; i++){

//  request(apiRequest, function(err, resp, body) {
//         if (err) {
//             throw err;
//         }
//         else {
//          thatMeeting.latLong = JSON.parse(body).results[0].geometry.location;
     

//         }
 
//         addressLL.push(thatMeeting);
 
//     });
    
    
//      setTimeout(callback, 1000);
// // }   
// //  },function() {
// //      console.log(address2);

// //   // fs.writeFileSync('/home/ubuntu/workspace/meetings.txt', JSON.stringify(meetingsData));
// }
// }, function () {
//     for (var i=0; i < addressLL.length; i++) {
//         console.log(addressLL[i]);
//         console.log(addressLL.length);
//       //  fs.writeFileSync('groups10.txt', JSON.stringify(meetings));
//     }


// // }, function printIt () {
// //     for (var i=0; i < addressLL.length; i++) {
// //         console.log(addressLL[i]);
// //         console.log(addressLL.length);
// //       //  fs.writeFileSync('groups10.txt', JSON.stringify(meetings));
// //     } 
// });       





///\\\\\\\\\\\\\\\\\\\
// ////TRYING ADDING ADDRESS 2 and looping in the geocode///////
////THIS GETS ONE LATLONG READING AND GROUPS WITH ADDRESS
// var fs = require('fs');
// var async = require('async');
// var request = require('request');

// // SETTING ENVIRONMENT VARIABLES (in Linux): 
// // in terminal: export NEW_VAR="Content of NEW_VAR variable" (Linux variable in the server)
// // printenv | grep NEW_VAR (retrieving the variable)
// // export GMAKEY='apiKey'
// // printenv | grep GMAKEY (to double check if you've successfully stored your Key)

// var apiKey = process.env.GMAKEY;

// //FOR GROUPS 10 TXT FILE
// var rawDataFile = fs.readFileSync('raw_groups10.txt');

// var rawData = JSON.parse(rawDataFile);

// var meetings = []; 


//  async.eachSeries(rawData, function(value, callback){
//     var thisMeeting = new Object; 
//     thisMeeting.building = value.building; 
//     thisMeeting.name = value.name;
//     thisMeeting.address1 = value.address1;
//     //thisMeeting.address2 = value.address2;
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
//         thisMeeting.address2 = value.address2;
//         thisMeeting.latLong = value.latLong;
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

// ///\\\\latLong
//   var address2 = [];
//  var latLong = [];
//  var addressLL  = [];
  

  
//   for (var i = 0; i < rawData.length; i++) {
//     latLong.push(rawData.address2);
// }

// //addresses.push(rawData.address2);
  
// async.eachSeries(latLong, function(value, callback) {
// var apiRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + value + '&key=' + apiKey; 
 
//   var thisMeeting = new Object; 
//     // thisMeeting.building = value.building; 
//     // thisMeeting.name = value.name;
//     // thisMeeting.address1 = value.address1;
//     thisMeeting.address2 = value;
//   //  rawData.address2 = value.address2;
//   //  thisMeeting.address2 = value.address2;
//     thisMeeting.latLong = value;
    
// //  var thatMeeting = new Object;
// //  //var thisMeeting = new Object;
// //  rawData.address2 = value;
// //  //thisMeeting.address2 = value;

// // for (var i=0; i < value.address2.length; i++) {
//  request(apiRequest, function(err, resp, body) {
//         if (err) {
//             throw err;
//         }
//         else {
//             // thisMeeting.address2 = JSON.parse(body).results[0].geometry.location;
//         thisMeeting.latLong = JSON.parse(body).results[0].geometry.location;

//         }
//         addressLL.push(thisMeeting);
//     });
    
    
//      setTimeout(callback, 1000);
// // }   
// //  },function() {
// //      console.log(address2);

// //   // fs.writeFileSync('/home/ubuntu/workspace/meetings.txt', JSON.stringify(meetingsData));
// }, function () {
//     for (var i=0; i < addressLL.length; i++) {
//         console.log(addressLL[i]);
//         console.log(addressLL.length);
//       //  fs.writeFileSync('groups10.txt', JSON.stringify(meetings));
//     }


// // }, function printIt () {
// //     for (var i=0; i < addressLL.length; i++) {
// //         console.log(addressLL[i]);
// //         console.log(addressLL.length);
// //       //  fs.writeFileSync('groups10.txt', JSON.stringify(meetings));
// //     } 
// });       
  
     

/////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////////////
/////////TXT 1 FILE


// var fs = require('fs');
// var async = require('async');

// var rawDataFile = fs.readFileSync('raw_groups1.txt');

// var rawData = JSON.parse(rawDataFile);

// var meetings = []; 

// async.eachSeries(rawData, function(value, callback){
//     var thisMeeting = new Object; 
//     thisMeeting.building = value.building; 
//     thisMeeting.name = value.name;
//     thisMeeting.address = value.address;
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
    
//     thisMeeting.notes = value.notes;
//     thisMeeting.access = value.access; 
    
//     callback();
// });

// function printIt () {
//     for (var i=0; i < meetings.length; i++) {
//         console.log(meetings[i]);
//         console.log(meetings.length);
//         fs.writeFileSync('groups1.txt', JSON.stringify(meetings));
//     }
// }

// setTimeout(printIt, 1000); 



////////////////

// ///FOR GROUPS2 TXT FILE
// var rawDataFile = fs.readFileSync('raw_groups2.txt');

// var rawData = JSON.parse(rawDataFile);

// var meetings = []; 

// async.eachSeries(rawData, function(value, callback){
//     var thisMeeting = new Object; 
//     thisMeeting.building = value.building; 
//     thisMeeting.name = value.name;
//     thisMeeting.address = value.address;
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
//     thisMeeting.address = value.address;
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
//     thisMeeting.address = value.address;
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
//     thisMeeting.address = value.address;
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
//     thisMeeting.address = value.address;
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
//     thisMeeting.address = value.address;
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
//     thisMeeting.address = value.address;
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
//     thisMeeting.address = value.address;
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


// //FOR GROUPS 10 TXT FILE
// var rawDataFile = fs.readFileSync('raw_groups10.txt');

// var rawData = JSON.parse(rawDataFile);

// var meetings = []; 

// async.eachSeries(rawData, function(value, callback){
//     var thisMeeting = new Object; 
//     thisMeeting.building = value.building; 
//     thisMeeting.name = value.name;
//     thisMeeting.address = value.address;
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
    
//     thisMeeting.notes = value.notes;
//     thisMeeting.access = value.access; 
    
//     callback();
// });

// function printIt () {
//     for (var i=0; i < meetings.length; i++) {
//         console.log(meetings[i]);
//         console.log(meetings.length);
//         fs.writeFileSync('groups10.txt', JSON.stringify(meetings));
//     }
// }

// setTimeout(printIt, 1000); 


