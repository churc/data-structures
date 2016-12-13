
 var fs = require('fs');
 

 
 /////////SUPER CLOSE 44
var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups10.txt"));

var addLatLong =   JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups10latLg.txt"));

var addressesWithLatLong = [];

for (var i=0; i < addresses.length; i++) {
    var thisObject = new Object({location}); 
  var location = new Object();
    thisObject.address2 = addresses[i].address2;
    thisObject.address = addresses[i].address1;
    thisObject.name = addresses[i].name;
    thisObject.building = addresses[i].building;
    thisObject.day = addresses[i].day;
    thisObject.startTime = addresses[i].startTime;
    thisObject.endTime = addresses[i].endTime;
    thisObject.meetingType = addresses[i].meetingType;
    thisObject.specialInterest = addresses[i].specialInterest;
    thisObject.notes = addresses[i].notes;
    thisObject.access = addresses[i].access;
    
    addressesWithLatLong.push(thisObject);
    
    location.latLong = addLatLong[i].latLong;
    location.address2 = addLatLong[i].address2;
    
    thisObject.location = location.latLong;
     thisObject.location.address2 = location.address2;
    
}


console.log(addressesWithLatLong);
console.log(addressesWithLatLong.length);
fs.writeFileSync('groupsAddLL10.txt', JSON.stringify(addressesWithLatLong));

 ////////////////

// ///////SUPER CLOSE BUT THIS IS 88 
// var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups10.txt"));

// var addLatLong =   JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups10latLg.txt"));


// // var address2 = [];
// // var latLong = [];

// var addressesWithLatLong = [];

// for (var i=0; i < addresses.length; i++) {
//     //var thisObject = new Object({location:{latLong}}); 
//         var thisObject = new Object({}); 
//         var location = new Object();
  
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
    
//     addressesWithLatLong.push(thisObject, location);
    
    
//   location.latLong = addLatLong[i].latLong;
//      location.address2 = addLatLong[i].address2;

// }


// console.log(addressesWithLatLong);
// console.log(addressesWithLatLong.length);


 
 
 //////ASSIGN to JOIN the OBJECTS?
 
 
 // var assign = require('assign');

// var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups10.txt"));

// var addLatLong =   JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups10latLg.txt"));


// // var address2 = [];
// // var latLong = [];

// var addressesWithLatLong = [];
// var addressesWithLatLong1 = [];

// for (var i=0; i < addresses.length; i++) {
//     //var thisObject = new Object({location:{latLong}}); 
//         var thisObject = new Object.assign({}, thisObject, location); 
//         var location = new Object();
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
    
//   // thisObject = {thisObject,location};
//     // addressesWithLatLong.push(thisObject);
    
    
//   location.latLong = addLatLong[i].latLong;
//      location.address2 = addLatLong[i].address2;
     
//   ///assign or extend?   
   
// //addressesWithLatLong1.push(location);
// addressesWithLatLong.push(thisObject);

// //addressesWithLatLong = addressesWithLatLong.assign(location);

// //addressesWithLatLong = addressesWithLatLong.assign(location);

// }


// console.log(addressesWithLatLong);
// console.log(addressesWithLatLong.length);


////////////////
 //ANOTHER GO AT 44 - BUT THIS DOES NOT CONNECT THE CORRECT LAT LONG TO THISOBJECT
// var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups10.txt"));

// var addLatLong =   JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups10latLg.txt"));


// var addressesWithLatLong2 = [];
// var addressesWithLatLong = [];
// var   addressesWithLatLong1 = [];

// for (var i=0; i < addresses.length; i++) {
//     var thisObject = new Object({thisLocation}); 
//     var thisLocation = new Object({latLong:{address2}});
//     var address2 = new Object();
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
    

 
//      thisLocation = addLatLong[i].latLong;
//   thisLocation.address2 = addLatLong[i].address2;
  
  
//     addressesWithLatLong.push(thisObject);
// }



// console.log(addressesWithLatLong);
// console.log(addressesWithLatLong.length);

///////////////
 
// var addresses = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups10.txt"));

// var addLatLong =   JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups10latLg.txt"));


// var latLng = {};
// var addressesWithLatLong = [];

// for (var i=0; i < addresses.length; i++) {
//   // var thisObject = new Object({location}, {add2}); 
//   // var thisObject = new Object({location}); 
//       var thisObject = new Object({location},{address2}); 

//   var location = new Object({});
//   var address2 = new Object();
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
    
// //    addressesWithLatLong.push(thisObject);
    
    
//     // latLg.latLong = addLatLong[i].latLong;
//     // latLg.address2 = addLatLong[i].address2;
    
//     // thisObject.latLong = addLatLong[i].latLong;
//     // thisObject.address2 = addLatLong[i].address2;
    
// // location.latLong = addLatLong[i].latLong;
// //     location.address2 = addLatLong[i].address2;

// // location.latLong = addLatLong[i].latLong;
// //     location.add2 = addLatLong[i].address2;
    
// //     //addressesWithLatLong.push(thisObject);
// //     thisObject.location = location.latLong;
// //     location.add2 = add2.address2;



// location.address2 = addLatLong[i].address2;
//     location = addLatLong[i].latLong;
    
//     //addressesWithLatLong.push(thisObject);
//     thisObject.location = location.address2;
//     //location.add2 = add2;
//         addressesWithLatLong.push(thisObject);

// }


// console.log(addressesWithLatLong);
// console.log(addressesWithLatLong.length);



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