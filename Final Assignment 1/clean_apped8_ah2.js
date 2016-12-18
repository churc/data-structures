
 var fs = require('fs');
 
 //////TAKING CLEAN MEETING GROUP INFORMATION FOR EACH AREA CODE (GROUP1 - 10.TXT GENERATED IN clean_apped4_ah2.js AND LAT LONG
 ///FOR EACH AREA CODE groups01-10latlg.txt GENERATED IN class3geo.js / class 3
 /// CODE BELOW JOINS THESE TWO FILES FOR EACH AREA CODE TO MAKE SERIES OF FILES groupsAddLL01 - 10.txt
 ///THESE CAN GO INTO MONGO TO QUERY - SEE WORKSPACE HOMEWORK 1
 
 
 /////////  AREA CODE 1  groups1.txt 
 
var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups1.txt"));

var addLatLong =   JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups01latLg.txt"));

var addressesWithLatLong = [];

for (var i=0; i < addresses.length; i++) {
    var thisObject = new Object(); 
    var location = new Object();
    thisObject.address = addresses[i].address1;
    thisObject.borough = "Manhattan";
    thisObject.name = addresses[i].name;
    thisObject.building = addresses[i].building;
    thisObject.day = addresses[i].day;
    thisObject.dayQuery = addresses[i].dayQuery;
    thisObject.hourQuery = addresses[i].hourQuery;
    thisObject.startTime = addresses[i].startTime;
    thisObject.startTime1 = addresses[i].startTime1;
    thisObject.startTime2 = addresses[i].startTime2;
    thisObject.startTimeM = addresses[i].startTimeM;
    thisObject.startHr = addresses[i].startHr;
    thisObject.endTime = addresses[i].endTime;
    thisObject.endTime1 = addresses[i].endTime1;
    thisObject.endTime2 = addresses[i].endTime2;
    thisObject.endTimeM = addresses[i].endTimeM;
    thisObject.endTime3 = addresses[i].endTime3;
    thisObject.endHr = addresses[i].endHr;
    thisObject.endTime = addresses[i].endTime;
    thisObject.meetingType = addresses[i].meetingType;
    thisObject.meetingTypeLong = addresses[i].meetingTypeLong;
    thisObject.specialInterest = addresses[i].specialInterest;
    thisObject.details = addresses[i].details;
    thisObject.access = addresses[i].access;
    
     addressesWithLatLong.push(thisObject);
     
    location.latlng = addLatLong[i].latLong;
    thisObject.location = location.latlng;
    
     //location.address2 = addLatLong[i].address2;
     //thisObject.location.address2 = location.address2;
}




console.log(addressesWithLatLong);
console.log(addressesWithLatLong.length);
fs.writeFileSync('/home/ubuntu/workspace/groupsAddLL01.txt', JSON.stringify(addressesWithLatLong));

 ////////////////

 ///////// AREA CODE 2  groups2.txt 
 ////have not got groups02latLg - geocoding not working
 
// var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups2.txt"));

// var addLatLong =   JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups02latLg.txt"));

// var addressesWithLatLong = [];

// for (var i=0; i < addresses.length; i++) {
//     var thisObject = new Object(); 
//     var location = new Object();
//     thisObject.address = addresses[i].address1;
//     thisObject.borough = "Manhattan";
//     thisObject.name = addresses[i].name;
//     thisObject.building = addresses[i].building;
//     thisObject.day = addresses[i].day;
//     thisObject.dayQuery = addresses[i].dayQuery;
//     thisObject.hourQuery = addresses[i].hourQuery;
//     thisObject.startTime = addresses[i].startTime;
//     thisObject.startTime1 = addresses[i].startTime1;
//     thisObject.startTime2 = addresses[i].startTime2;
//     thisObject.startTimeM = addresses[i].startTimeM;
//     thisObject.startHr = addresses[i].startHr;
//     thisObject.endTime = addresses[i].endTime;
//     thisObject.endTime1 = addresses[i].endTime1;
//     thisObject.endTime2 = addresses[i].endTime2;
//     thisObject.endTimeM = addresses[i].endTimeM;
//     thisObject.endTime3 = addresses[i].endTime3;
//     thisObject.endHr = addresses[i].endHr;
//     thisObject.endTime = addresses[i].endTime;
//     thisObject.meetingType = addresses[i].meetingType;
//     thisObject.meetingTypeLong = addresses[i].meetingTypeLong;
//     thisObject.specialInterest = addresses[i].specialInterest;
//     thisObject.details = addresses[i].details;
//     thisObject.access = addresses[i].access;
    
//      addressesWithLatLong.push(thisObject);
     
//     location.latlng = addLatLong[i].latLong;
//     thisObject.location = location.latlng;
    
//      //location.address2 = addLatLong[i].address2;
//      //thisObject.location.address2 = location.address2;
// }



// console.log(addressesWithLatLong);
// console.log(addressesWithLatLong.length);
// fs.writeFileSync('/home/ubuntu/workspace/groupsAddLL02.txt', JSON.stringify(addressesWithLatLong));

//  ////////////////

//  ///////// AREA CODE 3  groups3.txt 
///not groups03latLg.txt geocode not working
// var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups3.txt"));

// var addLatLong =   JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups03latLg.txt"));

// var addressesWithLatLong = [];

// for (var i=0; i < addresses.length; i++) {
//     var thisObject = new Object(); 
//     var location = new Object();
//     thisObject.address = addresses[i].address1;
//     thisObject.borough = "Manhattan";
//     thisObject.name = addresses[i].name;
//     thisObject.building = addresses[i].building;
//     thisObject.day = addresses[i].day;
//     thisObject.dayQuery = addresses[i].dayQuery;
//     thisObject.hourQuery = addresses[i].hourQuery;
//     thisObject.startTime = addresses[i].startTime;
//     thisObject.startTime1 = addresses[i].startTime1;
//     thisObject.startTime2 = addresses[i].startTime2;
//     thisObject.startTimeM = addresses[i].startTimeM;
//     thisObject.startHr = addresses[i].startHr;
//     thisObject.endTime = addresses[i].endTime;
//     thisObject.endTime1 = addresses[i].endTime1;
//     thisObject.endTime2 = addresses[i].endTime2;
//     thisObject.endTimeM = addresses[i].endTimeM;
//     thisObject.endTime3 = addresses[i].endTime3;
//     thisObject.endHr = addresses[i].endHr;
//     thisObject.endTime = addresses[i].endTime;
//     thisObject.meetingType = addresses[i].meetingType;
//     thisObject.meetingTypeLong = addresses[i].meetingTypeLong;
//     thisObject.specialInterest = addresses[i].specialInterest;
//     thisObject.details = addresses[i].details;
//     thisObject.access = addresses[i].access;
    
//      addressesWithLatLong.push(thisObject);
     
//     location.latlng = addLatLong[i].latLong;
//     thisObject.location = location.latlng;
    
//      //location.address2 = addLatLong[i].address2;
//      //thisObject.location.address2 = location.address2;
// }




// console.log(addressesWithLatLong);
// console.log(addressesWithLatLong.length);
// fs.writeFileSync('/home/ubuntu/workspace/groupsAddLL03.txt', JSON.stringify(addressesWithLatLong));

 ////////////////

//  /////////  AREA CODE 4  groups4.txt 
// var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups4.txt"));

// var addLatLong =   JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups04latLg.txt"));

// var addressesWithLatLong = [];

// for (var i=0; i < addresses.length; i++) {
//     var thisObject = new Object(); 
//     var location = new Object();
//     thisObject.address = addresses[i].address1;
//     thisObject.borough = "Manhattan";
//     thisObject.name = addresses[i].name;
//     thisObject.building = addresses[i].building;
//     thisObject.day = addresses[i].day;
//     thisObject.dayQuery = addresses[i].dayQuery;
//     thisObject.hourQuery = addresses[i].hourQuery;
//     thisObject.startTime = addresses[i].startTime;
//     thisObject.startTime1 = addresses[i].startTime1;
//     thisObject.startTime2 = addresses[i].startTime2;
//     thisObject.startTimeM = addresses[i].startTimeM;
//     thisObject.startHr = addresses[i].startHr;
//     thisObject.endTime = addresses[i].endTime;
//     thisObject.endTime1 = addresses[i].endTime1;
//     thisObject.endTime2 = addresses[i].endTime2;
//     thisObject.endTimeM = addresses[i].endTimeM;
//     thisObject.endTime3 = addresses[i].endTime3;
//     thisObject.endHr = addresses[i].endHr;
//     thisObject.endTime = addresses[i].endTime;
//     thisObject.meetingType = addresses[i].meetingType;
//     thisObject.meetingTypeLong = addresses[i].meetingTypeLong;
//     thisObject.specialInterest = addresses[i].specialInterest;
//     thisObject.details = addresses[i].details;
//     thisObject.access = addresses[i].access;
    
//      addressesWithLatLong.push(thisObject);
     
//     location.latlng = addLatLong[i].latLong;
//     thisObject.location = location.latlng;
    
//      //location.address2 = addLatLong[i].address2;
//      //thisObject.location.address2 = location.address2;
// }


// console.log(addressesWithLatLong);
// console.log(addressesWithLatLong.length);
// fs.writeFileSync('/home/ubuntu/workspace/groupsAddLL04.txt', JSON.stringify(addressesWithLatLong));

 ////////////////
////AREA CODE TXT FILES 5

// var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups5.txt"));

// var addLatLong =   JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups05latLg.txt"));

// var addressesWithLatLong = [];

// for (var i=0; i < addresses.length; i++) {
//     var thisObject = new Object(); 
//     var location = new Object();
//     thisObject.address = addresses[i].address1;
//     thisObject.borough = "Manhattan";
//     thisObject.name = addresses[i].name;
//     thisObject.building = addresses[i].building;
//     thisObject.day = addresses[i].day;
//     thisObject.dayQuery = addresses[i].dayQuery;
//     thisObject.hourQuery = addresses[i].hourQuery;
//     thisObject.startTime = addresses[i].startTime;
//     thisObject.startTime1 = addresses[i].startTime1;
//     thisObject.startTime2 = addresses[i].startTime2;
//     thisObject.startTimeM = addresses[i].startTimeM;
//     thisObject.startHr = addresses[i].startHr;
//     thisObject.endTime = addresses[i].endTime;
//     thisObject.endTime1 = addresses[i].endTime1;
//     thisObject.endTime2 = addresses[i].endTime2;
//     thisObject.endTimeM = addresses[i].endTimeM;
//     thisObject.endTime3 = addresses[i].endTime3;
//     thisObject.endHr = addresses[i].endHr;
//     thisObject.endTime = addresses[i].endTime;
//     thisObject.meetingType = addresses[i].meetingType;
//     thisObject.meetingTypeLong = addresses[i].meetingTypeLong;
//     thisObject.specialInterest = addresses[i].specialInterest;
//     thisObject.details = addresses[i].details;
//     thisObject.access = addresses[i].access;
    
//      addressesWithLatLong.push(thisObject);
     
//     location.latlng = addLatLong[i].latLong;
//     thisObject.location = location.latlng;
    
//      //location.address2 = addLatLong[i].address2;
//      //thisObject.location.address2 = location.address2;
// }



// console.log(addressesWithLatLong);
// console.log(addressesWithLatLong.length);
// fs.writeFileSync('/home/ubuntu/workspace/groupsAddLL05.txt', JSON.stringify(addressesWithLatLong));


 ////////////////

//  /////////AREA CODE 6  groups6.txt 
// var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups6.txt"));

// var addLatLong =   JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups06latLg.txt"));

// var addressesWithLatLong = [];

// for (var i=0; i < addresses.length; i++) {
//     var thisObject = new Object(); 
//     var location = new Object();
//     thisObject.address = addresses[i].address1;
//     thisObject.borough = "Manhattan";
//     thisObject.name = addresses[i].name;
//     thisObject.building = addresses[i].building;
//     thisObject.day = addresses[i].day;
//     thisObject.dayQuery = addresses[i].dayQuery;
//     thisObject.hourQuery = addresses[i].hourQuery;
//     thisObject.startTime = addresses[i].startTime;
//     thisObject.startTime1 = addresses[i].startTime1;
//     thisObject.startTime2 = addresses[i].startTime2;
//     thisObject.startTimeM = addresses[i].startTimeM;
//     thisObject.startHr = addresses[i].startHr;
//     thisObject.endTime = addresses[i].endTime;
//     thisObject.endTime1 = addresses[i].endTime1;
//     thisObject.endTime2 = addresses[i].endTime2;
//     thisObject.endTimeM = addresses[i].endTimeM;
//     thisObject.endTime3 = addresses[i].endTime3;
//     thisObject.endHr = addresses[i].endHr;
//     thisObject.endTime = addresses[i].endTime;
//     thisObject.meetingType = addresses[i].meetingType;
//     thisObject.meetingTypeLong = addresses[i].meetingTypeLong;
//     thisObject.specialInterest = addresses[i].specialInterest;
//     thisObject.details = addresses[i].details;
//     thisObject.access = addresses[i].access;
    
//      addressesWithLatLong.push(thisObject);
     
//     location.latlng = addLatLong[i].latLong;
//     thisObject.location = location.latlng;
    
//      //location.address2 = addLatLong[i].address2;
//      //thisObject.location.address2 = location.address2;
// }




// console.log(addressesWithLatLong);
// console.log(addressesWithLatLong.length);
// fs.writeFileSync('/home/ubuntu/workspace/groupsAddLL06.txt', JSON.stringify(addressesWithLatLong));

//  ////////////////

//  /////////   AREA CODE 7  groups7.txt 
// var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups7.txt"));

// var addLatLong =   JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups07latLg.txt"));

// var addressesWithLatLong = [];

//for (var i=0; i < addresses.length; i++) {
//     var thisObject = new Object(); 
//     var location = new Object();
//     thisObject.address = addresses[i].address1;
//     thisObject.borough = "Manhattan";
//     thisObject.name = addresses[i].name;
//     thisObject.building = addresses[i].building;
//     thisObject.day = addresses[i].day;
//     thisObject.dayQuery = addresses[i].dayQuery;
//     thisObject.hourQuery = addresses[i].hourQuery;
//     thisObject.startTime = addresses[i].startTime;
//     thisObject.startTime1 = addresses[i].startTime1;
//     thisObject.startTime2 = addresses[i].startTime2;
//     thisObject.startTimeM = addresses[i].startTimeM;
//     thisObject.startHr = addresses[i].startHr;
//     thisObject.endTime = addresses[i].endTime;
//     thisObject.endTime1 = addresses[i].endTime1;
//     thisObject.endTime2 = addresses[i].endTime2;
//     thisObject.endTimeM = addresses[i].endTimeM;
//     thisObject.endTime3 = addresses[i].endTime3;
//     thisObject.endHr = addresses[i].endHr;
//     thisObject.endTime = addresses[i].endTime;
//     thisObject.meetingType = addresses[i].meetingType;
//     thisObject.meetingTypeLong = addresses[i].meetingTypeLong;
//     thisObject.specialInterest = addresses[i].specialInterest;
//     thisObject.details = addresses[i].details;
//     thisObject.access = addresses[i].access;
    
//      addressesWithLatLong.push(thisObject);
     
//     location.latlng = addLatLong[i].latLong;
//     thisObject.location = location.latlng;
    
//      //location.address2 = addLatLong[i].address2;
//      //thisObject.location.address2 = location.address2;
// }


// console.log(addressesWithLatLong);
// console.log(addressesWithLatLong.length);
// fs.writeFileSync('/home/ubuntu/workspace/groupsAddLL07.txt', JSON.stringify(addressesWithLatLong));

//  ////////////////

//  /////////   AREA CODE 8  groups8.txt 
// var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups8.txt"));

// var addLatLong =   JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups08latLg.txt"));

// var addressesWithLatLong = [];

//for (var i=0; i < addresses.length; i++) {
//     var thisObject = new Object(); 
//     var location = new Object();
//     thisObject.address = addresses[i].address1;
//     thisObject.borough = "Manhattan";
//     thisObject.name = addresses[i].name;
//     thisObject.building = addresses[i].building;
//     thisObject.day = addresses[i].day;
//     thisObject.dayQuery = addresses[i].dayQuery;
//     thisObject.hourQuery = addresses[i].hourQuery;
//     thisObject.startTime = addresses[i].startTime;
//     thisObject.startTime1 = addresses[i].startTime1;
//     thisObject.startTime2 = addresses[i].startTime2;
//     thisObject.startTimeM = addresses[i].startTimeM;
//     thisObject.startHr = addresses[i].startHr;
//     thisObject.endTime = addresses[i].endTime;
//     thisObject.endTime1 = addresses[i].endTime1;
//     thisObject.endTime2 = addresses[i].endTime2;
//     thisObject.endTimeM = addresses[i].endTimeM;
//     thisObject.endTime3 = addresses[i].endTime3;
//     thisObject.endHr = addresses[i].endHr;
//     thisObject.endTime = addresses[i].endTime;
//     thisObject.meetingType = addresses[i].meetingType;
//     thisObject.meetingTypeLong = addresses[i].meetingTypeLong;
//     thisObject.specialInterest = addresses[i].specialInterest;
//     thisObject.details = addresses[i].details;
//     thisObject.access = addresses[i].access;
    
//      addressesWithLatLong.push(thisObject);
     
//     location.latlng = addLatLong[i].latLong;
//     thisObject.location = location.latlng;
    
//      //location.address2 = addLatLong[i].address2;
//      //thisObject.location.address2 = location.address2;
// }



// console.log(addressesWithLatLong);
// console.log(addressesWithLatLong.length);
// fs.writeFileSync('/home/ubuntu/workspace/groupsAddLL08.txt', JSON.stringify(addressesWithLatLong));

//  ////////////////

// //  /////////  AREA CODE 9  groups9.txt 
// var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups9.txt"));

// var addLatLong =   JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups09latLg.txt"));

// var addressesWithLatLong = [];

// for (var i=0; i < addresses.length; i++) {
//     var thisObject = new Object(); 
//     var location = new Object();
//     thisObject.address = addresses[i].address1;
//     thisObject.borough = "Manhattan";
//     thisObject.name = addresses[i].name;
//     thisObject.building = addresses[i].building;
//     thisObject.day = addresses[i].day;
//     thisObject.dayQuery = addresses[i].dayQuery;
//     thisObject.hourQuery = addresses[i].hourQuery;
//     thisObject.startTime = addresses[i].startTime;
//     thisObject.startTime1 = addresses[i].startTime1;
//     thisObject.startTime2 = addresses[i].startTime2;
//     thisObject.startTimeM = addresses[i].startTimeM;
//     thisObject.startHr = addresses[i].startHr;
//     thisObject.endTime = addresses[i].endTime;
//     thisObject.endTime1 = addresses[i].endTime1;
//     thisObject.endTime2 = addresses[i].endTime2;
//     thisObject.endTimeM = addresses[i].endTimeM;
//     thisObject.endTime3 = addresses[i].endTime3;
//     thisObject.endHr = addresses[i].endHr;
//     thisObject.endTime = addresses[i].endTime;
//     thisObject.meetingType = addresses[i].meetingType;
//     thisObject.meetingTypeLong = addresses[i].meetingTypeLong;
//     thisObject.specialInterest = addresses[i].specialInterest;
//     thisObject.details = addresses[i].details;
//     thisObject.access = addresses[i].access;
    
//      addressesWithLatLong.push(thisObject);
     
//     location.latlng = addLatLong[i].latLong;
//     thisObject.location = location.latlng;
    
//      //location.address2 = addLatLong[i].address2;
//      //thisObject.location.address2 = location.address2;
// }


// console.log(addressesWithLatLong);
// console.log(addressesWithLatLong.length);
// fs.writeFileSync("/home/ubuntu/workspace/groupsAddLL09.txt", JSON.stringify(addressesWithLatLong));


//  ////////////////

// //  ///////// ARAE CODE 10 TXT FILES 10
// var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups10.txt"));

// var addLatLong =   JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups10latLg.txt"));

// var addressesWithLatLong = [];

// for (var i=0; i < addresses.length; i++) {
//     var thisObject = new Object(); 
//     var location = new Object();
//     thisObject.address = addresses[i].address1;
//     thisObject.borough = "Manhattan";
//     thisObject.name = addresses[i].name;
//     thisObject.building = addresses[i].building;
//     thisObject.day = addresses[i].day;
//     thisObject.dayQuery = addresses[i].dayQuery;
//     thisObject.hourQuery = addresses[i].hourQuery;
//     thisObject.startTime = addresses[i].startTime;
//     thisObject.startTime1 = addresses[i].startTime1;
//     thisObject.startTime2 = addresses[i].startTime2;
//     thisObject.startTimeM = addresses[i].startTimeM;
//     thisObject.startHr = addresses[i].startHr;
//     thisObject.endTime = addresses[i].endTime;
//     thisObject.endTime1 = addresses[i].endTime1;
//     thisObject.endTime2 = addresses[i].endTime2;
//     thisObject.endTimeM = addresses[i].endTimeM;
//     thisObject.endTime3 = addresses[i].endTime3;
//     thisObject.endHr = addresses[i].endHr;
//     thisObject.endTime = addresses[i].endTime;
//     thisObject.meetingType = addresses[i].meetingType;
//     thisObject.meetingTypeLong = addresses[i].meetingTypeLong;
//     thisObject.specialInterest = addresses[i].specialInterest;
//     thisObject.details = addresses[i].details;
//     thisObject.access = addresses[i].access;
    
//      addressesWithLatLong.push(thisObject);
     
//     location.latlng = addLatLong[i].latLong;
//     thisObject.location = location.latlng;
    
//      //location.address2 = addLatLong[i].address2;
//      //thisObject.location.address2 = location.address2;
// }

// console.log(addressesWithLatLong);
// console.log(addressesWithLatLong.length);
// fs.writeFileSync('/home/ubuntu/workspace/groupsAddLL10.txt', JSON.stringify(addressesWithLatLong));

 ////////////////






//////THIS WORKS TO GET 2 OBJECTS BUT DOESN"T JOIN LAT AND ADDRESS
// var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups10.txt"));

// var addLatLong =   JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups10latLg.txt"));


// var addressWithLatLong = [];
// var addressesWithLatLong = [];
// //var latLong = [];

// for (var i=0; i < addresses.length; i++) {
//     var latLong = new Object(); 
//     var thisObject = new Object();
//         thisObject["latLong"] = {};
//     thisObject.address = addresses[i].address1;
//     thisObject.name = addresses[i].name;
//     thisObject.building = addresses[i].building;
//     thisObject.day = addresses[i].day;
//     thisObject.startTime = addresses[i].startTime;
//     thisObject.endTime = addresses[i].endTime;
//     thisObject.meetingType = addresses[i].meetingType;
//     thisObject.specialInterest = addresses[i].specialInterest;
//     thisObject.notes = addresses[i].notes;
//     thisObject.access = addresses[i].access;
    
//     latLong.latlg = addLatLong[i].latLong;
//     latLong.address2 = addLatLong[i].address2;
    
//     addressWithLatLong.push(thisObject);
//     addressWithLatLong.push(latLong);
    
//     addressesWithLatLong = addressWithLatLong;


//     // thisObject.latLong = addLatLong[i].latLong;
//     // thisObject.address2 = addLatLong[i].address2;

//     // addressesWithLatLong.push(thisObject);

//     //addressesWithLatLong.push(thatObject.latLong);

// // for (var i=0; i < addLatLong.length; i++) {
// //     var thatObject = new Object(); 
    
// //       thatObject.latLong = addLatLong[i].latLong;
// //     thatObject.address2 = addLatLong[i].address2;
    
   
//  //thisObject.push(thatObject);

// //     var thatObject = new Object; 
// //     thatObject.latLong = addLatLong[i].latLong;
// //     thatObject.address2 = addLatLong[i].address2;
    
// //   //addressesWithLatLg.push(thisObject);
// //     addressesWithLatLong = addressesWithLatLg.thatObject;
//   }
// //}
// // console.log(thisObject);

// console.log(addressesWithLatLong);
// console.log(addressesWithLatLong.length);
// console.log(addressesWithLatLong.length);
// //fs.writeFileSync('groupsAddLL10.txt', JSON.stringify(meetings));

//////////////////////////////////////////////    
// ////JOIN groups10.txt and groups10latLg.txt TO NEST LATLONG IN EACH MEETING GROUP 
// ////THIS WORKS TO JOIN THE 2 TEXT FILES BUT LAT LONG IS NOT NESTED
//////USE THIS and THEN INSERT INTO MONGO





// var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups10.txt"));

// var addLatLong =   JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups10latLg.txt"));



// var addressesWithLatLong = [];

// for (var i=0; i < addresses.length; i++) {
//     var thisObject = new Object(); 
//     thisObject.address = addresses[i].address1;
//     thisObject.name = addresses[i].name;
//     thisObject.building = addresses[i].building;
//     thisObject.day = addresses[i].day;
//     thisObject.startTime = addresses[i].startTime;
//     thisObject.endTime = addresses[i].endTime;
//     thisObject.meetingType = addresses[i].meetingType;
//     thisObject.specialInterest = addresses[i].specialInterest;
//     thisObject.notes = addresses[i].notes;
//     thisObject.access = addresses[i].access;
    
//     //addressesWithLatLong.push(thisObject);
    
    
//     thisObject.latLong = addLatLong[i].latLong;
//     thisObject.address2 = addLatLong[i].address2;
    
//     addressesWithLatLong.push(thisObject);
// }


// console.log(addressesWithLatLong);
// console.log(addressesWithLatLong.length);

// //fs.writeFileSync('groupsAddLL10.txt', JSON.stringify(meetings));
