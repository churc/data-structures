//////////////////////
//Parses addresses for text files groups1 - 10 and gets lat long for each address
////\\\\\THIS WORKS/////\\\\\\

//////JOIN THESE 10 text files in clean_apped8_ah2.js with the full meeting group information for each area code
////INSERT the JOINED 10 TXT FILES INTO MONGODB homework 1/ clean_apped6_ah.js


var request = require('request'); // npm install request
var async = require('async'); // npm install async
var fs = require('fs');


// SETTING ENVIRONMENT VARIABLES (in Linux): 
// in terminal: export NEW_VAR="Content of NEW_VAR variable" (Linux variable in the server)
// printenv | grep NEW_VAR (retrieving the variable)
// export GMAKEY='apiKey'
// printenv | grep GMAKEY (to double check if you've successfully stored your Key)

var apiKey = process.env.GMAKEY;


///////////LAT LONG FOR AREA CODE 1

var address3 = [];
var addLatLong = [];


var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups1.txt"));

//reformat address for google api
 for (var i = 0; i < addresses.length; i++) {
     address3.push(addresses[i].address2);
    
 }


// eachSeries in the async module iterates over an array and operates on each item in the array in series
// in order not to break the 50 request / second rule

async.eachSeries(address3, function(value, callback) {

    var apiRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + value + '&key=' + apiKey;
    var thisObject = new Object;
 
    thisObject.address3 = value;
  
    
    request(apiRequest, function(err, resp, body) {

        if (err) {
            throw err;
        }
        
        thisObject.latLong = JSON.parse(body).results[0].geometry.location;
        
        
  addLatLong.push(thisObject);

});
    setTimeout(callback, 2000);

}, function() {

console.log(addLatLong);
console.log(addLatLong.length);
 // fs.writeFileSync('/home/ubuntu/workspace/groups01latLg.txt', JSON.stringify(addLatLong));
});


// // ////////////LAT LONG AREA CODE 2


// var address3 = [];
// var addLatLong = [];


// var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups2.txt"));

// //reformat address for google api
//  for (var i = 0; i < addresses.length; i++) {
//      address3.push(addresses[i].address2);
//  }


// // eachSeries in the async module iterates over an array and operates on each item in the array in series
// // in order not to break the 50 request / second rule

// async.eachSeries(address3, function(value, callback) {

//     var apiRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + value + '&key=' + apiKey;
//     var thisObject = new Object;
 
//     thisObject.address3 = value;
  
    
//     request(apiRequest, function(err, resp, body) {

//         if (err) {
//             throw err;
//         }
        
//         thisObject.latLong = JSON.parse(body).results[0].geometry.location;
        
        
//   addLatLong.push(thisObject);

// });
//     setTimeout(callback, 1000);

// }, function() {

// console.log(addLatLong);
// console.log(addLatLong.length);
//   fs.writeFileSync('/home/ubuntu/workspace/groups02latLg.txt', JSON.stringify(addLatLong));
// });



// ////LAT LONG AREA CODE 3

// var address3 = [];
// var addLatLong = [];


// var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups3.txt"));

// //reformat address for google api
//  for (var i = 0; i < addresses.length; i++) {
//      address3.push(addresses[i].address2);
    
//  }


// // eachSeries in the async module iterates over an array and operates on each item in the array in series
// // in order not to break the 50 request / second rule

// async.eachSeries(address3, function(value, callback) {

//     var apiRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + value + '&key=' + apiKey;
//     var thisObject = new Object;
 
//     thisObject.address3 = value;
  
    
//     request(apiRequest, function(err, resp, body) {

//         if (err) {
//             throw err;
//         }
        
//         thisObject.latLong = JSON.parse(body).results[0].geometry.location;
        
        
//   addLatLong.push(thisObject);

// });
//     setTimeout(callback, 2000);

// }, function() {

// console.log(addLatLong);
// console.log(addLatLong.length);
//   fs.writeFileSync('/home/ubuntu/workspace/groups03latLg.txt', JSON.stringify(addLatLong));
// });




// ////////////LAT LONG AREA CODE 4


// var address3 = [];
// var addLatLong = [];


// var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups4.txt"));

// //reformat address for google api
//  for (var i = 0; i < addresses.length; i++) {
//      address3.push(addresses[i].address2);
    
//  }


// // eachSeries in the async module iterates over an array and operates on each item in the array in series
// // in order not to break the 50 request / second rule

// async.eachSeries(address3, function(value, callback) {

//     var apiRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + value + '&key=' + apiKey;
//     var thisObject = new Object;
 
//     thisObject.address3 = value;
  
    
//     request(apiRequest, function(err, resp, body) {

//         if (err) {
//             throw err;
//         }
        
//         thisObject.latLong = JSON.parse(body).results[0].geometry.location;
        
        
//   addLatLong.push(thisObject);

// });
//     setTimeout(callback, 2000);

// }, function() {

// console.log(addLatLong);
// console.log(addLatLong.length);
//   fs.writeFileSync('/home/ubuntu/workspace/groups04latLg.txt', JSON.stringify(addLatLong));
// });




// ////////////LAT LONG AREA CODE 5


// var address3 = [];
// var addLatLong = [];


// var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups5.txt"));

// //reformat address for google api
//  for (var i = 0; i < addresses.length; i++) {
//      address3.push(addresses[i].address2);
    
//  }


// // eachSeries in the async module iterates over an array and operates on each item in the array in series
// // in order not to break the 50 request / second rule

// async.eachSeries(address3, function(value, callback) {

//     var apiRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + value + '&key=' + apiKey;
//     var thisObject = new Object;
 
//     thisObject.address3 = value;
  
    
//     request(apiRequest, function(err, resp, body) {

//         if (err) {
//             throw err;
//         }
        
//         thisObject.latLong = JSON.parse(body).results[0].geometry.location;
        
        
//   addLatLong.push(thisObject);

// });
//     setTimeout(callback, 2000);

// }, function() {

// console.log(addLatLong);
// console.log(addLatLong.length);
//   fs.writeFileSync('/home/ubuntu/workspace/groups05latLg.txt', JSON.stringify(addLatLong));
// });




// /////////////LAT LONG AREA CODE 6


// var address3 = [];
// var addLatLong = [];


// var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups6.txt"));

// //reformat address for google api
//  for (var i = 0; i < addresses.length; i++) {
//      address3.push(addresses[i].address2);
    
//  }


// // eachSeries in the async module iterates over an array and operates on each item in the array in series
// // in order not to break the 50 request / second rule

// async.eachSeries(address3, function(value, callback) {

//     var apiRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + value + '&key=' + apiKey;
//     var thisObject = new Object;
 
//     thisObject.address3 = value;
  
    
//     request(apiRequest, function(err, resp, body) {

//         if (err) {
//             throw err;
//         }
        
//         thisObject.latLong = JSON.parse(body).results[0].geometry.location;
        
        
//   addLatLong.push(thisObject);

// });
//     setTimeout(callback, 2000);

// }, function() {

// console.log(addLatLong);
// console.log(addLatLong.length);
//   fs.writeFileSync('/home/ubuntu/workspace/groups06latLg.txt', JSON.stringify(addLatLong));
// });




// //////////LAT LONG AREA CODE 7
// 
// var address3 = [];
// var addLatLong = [];


// var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups7.txt"));

// //reformat address for google api
//  for (var i = 0; i < addresses.length; i++) {
//      address3.push(addresses[i].address2);
    
//  }


// // eachSeries in the async module iterates over an array and operates on each item in the array in series
// // in order not to break the 50 request / second rule

// async.eachSeries(address3, function(value, callback) {

//     var apiRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + value + '&key=' + apiKey;
//     var thisObject = new Object;
 
//     thisObject.address3 = value;
  
    
//     request(apiRequest, function(err, resp, body) {

//         if (err) {
//             throw err;
//         }
        
//         thisObject.latLong = JSON.parse(body).results[0].geometry.location;
        
        
//   addLatLong.push(thisObject);

// });
//     setTimeout(callback, 2000);

// }, function() {

// console.log(addLatLong);
// console.log(addLatLong.length);
//   fs.writeFileSync('/home/ubuntu/workspace/groups07latLg.txt', JSON.stringify(addLatLong));
// });






// //////////LAT LONG AREA CODE 8

// var address3 = [];
// var addLatLong = [];


// var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups8.txt"));

// //reformat address for google api
//  for (var i = 0; i < addresses.length; i++) {
//      address3.push(addresses[i].address2);
    
//  }


// // eachSeries in the async module iterates over an array and operates on each item in the array in series
// // in order not to break the 50 request / second rule

// async.eachSeries(address3, function(value, callback) {

//     var apiRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + value + '&key=' + apiKey;
//     var thisObject = new Object;
 
//     thisObject.address3 = value;
  
    
//     request(apiRequest, function(err, resp, body) {

//         if (err) {
//             throw err;
//         }

//         thisObject.latLong = JSON.parse(body).results[0].geometry.location;
        
//         addLatLong.push(thisObject);

// });
//     setTimeout(callback, 1000);

// }, function() {

// console.log(addLatLong);
// console.log(addLatLong.length);
//  fs.writeFileSync('/home/ubuntu/workspace/groups08latLg.txt', JSON.stringify(addLatLong));
// });




// //////////////////////LAT LONG AREA CODE 9

// var address3 = [];
// var addLatLong = [];


// var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups9.txt"));

// //reformat address for google api
//  for (var i = 0; i < addresses.length; i++) {
//      address3.push(addresses[i].address2);
    
//  }


// // eachSeries in the async module iterates over an array and operates on each item in the array in series
// // in order not to break the 50 request / second rule

// async.eachSeries(address3, function(value, callback) {

//     var apiRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + value + '&key=' + apiKey;
//     var thisObject = new Object;
 
//     thisObject.address3 = value;
  
    
//     request(apiRequest, function(err, resp, body) {

//         if (err) {
//             throw err;
//         }
        
//         thisObject.latLong = JSON.parse(body).results[0].geometry.location;
        
        
//   addLatLong.push(thisObject);

// });
//     setTimeout(callback, 2000);

// }, function() {

// console.log(addLatLong);
// console.log(addLatLong.length);
//   fs.writeFileSync('/home/ubuntu/workspace/groups09latLg.txt', JSON.stringify(addLatLong));
// });



// ////////////////////LAT LONG AREA CODE 10

// var address3 = [];
// var addLatLong = [];


// var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups10.txt"));

// //reformat address for google api
//  for (var i = 0; i < addresses.length; i++) {
//      address3.push(addresses[i].address2);
    
//  }


// // eachSeries in the async module iterates over an array and operates on each item in the array in series
// // in order not to break the 50 request / second rule

// async.eachSeries(address3, function(value, callback) {

//     var apiRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + value + '&key=' + apiKey;
//     var thisObject = new Object;
 
//     thisObject.address3 = value;
  
    
//     request(apiRequest, function(err, resp, body) {

//         if (err) {
//             throw err;
//         }
        
//         thisObject.latLong = JSON.parse(body).results[0].geometry.location;
        
        
//   addLatLong.push(thisObject);

// });
//     setTimeout(callback, 2000);

// }, function() {

// console.log(addLatLong);
// console.log(addLatLong.length);
//   fs.writeFileSync('/home/ubuntu/workspace/groups10latLg.txt', JSON.stringify(addLatLong));
// });



