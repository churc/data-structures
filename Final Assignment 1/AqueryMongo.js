
//////TO GET RESULTS FROM MONGODB meetings collection ///
////for current day and time and location, and map this

// IN THE MONGO SHELL: 
//   CREATE DATABASE meetingsData AND SWITCH TO IT WITH: 
//      use meetingsData
//   CREATE COLLECTION meetings WITH: 
//      db.createCollection('meetings')
//   QUERY THE ENTIRE meetings COLLECTION WITH:
//      db.meetings.find()
//   COUNT THE NUMBER OF DOCUMENTS IN THE meetings COLLECTION WITH:
//      db.meetings.find().count()

//TO TAKE DATA OUT
//db.meetings.remove( {} )

//TO SHUT DOWN MONGO 
//use admin
//db.shutdownServer()
//unclean shutdown  //  ./mongod --repair

var dbName = 'meetingsData';
var collName = 'meetings';

var http = require("http");
var fs = require("fs");


// Connection URL
var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;


var index1 = fs.readFileSync("/home/ubuntu/workspace/index1.txt");
var index3 = fs.readFileSync("/home/ubuntu/workspace/index3.txt");

// Retrieve
var MongoClient = require('mongodb').MongoClient;

var server = http.createServer(function(request, response) {

    MongoClient.connect(url, function(err, db) {
        if (err) {
            return console.dir(err);
        }

        var dateTimeNow = new Date();

        var today = dateTimeNow.getDay();
        var tomorrow;
        if (today == 6) {
            tomorrow = 0;
        }
        else {
            tomorrow = today + 1;
        }
  var hour = dateTimeNow.getHours()-05;
       
      
       // var hour = new Date();
     //hour.setHours();
 //  hour.toLocaleString();

        //  var hour1 = dateTimeNow.setHours(dateTimeNow.getHours()-05);
        if (hour == 0) {
            hour = 12;
        }
        if (hour == -1) {
            hour = 11;
        }
        if (hour == -2) {
            hour = 10;
        }
        if (hour == -3) {
            hour = 9;
        }
        if (hour == -4) {
            hour = 8;
        }
        
    
        //hour = hour1.setHours();

       // console.log(hour);


        var collection = db.collection(collName);


        collection.aggregate([ // start of aggregation pipeline

       ///match by day and time
            {
                $match: {
                    $or: [{
                        $and: [{ dayQuery: today }, { hourQuery: { $gte: hour }}
                        ] }, 
                        { $and: [
                            { dayQuery: tomorrow }, { hourQuery: { $lte: 4 }}
                            ]}
                        ]}
                    },



///////////// group meeting groups by latLong with all the information
            {
                $group: { _id: {
                        latLong: "$location" },
                    meetingGroups: {
                        $push: {
                            latLong: "$location",
                            meetingName: "$name",
                            meetingAddress: "$address",
                            borough: "$borough",
                            //meetingDetails: "$details",
                            meetingWheelchair: "$access",
                            meetingDay: "$day",
                            dayQuery: "$dayQuery",
                            meetingStartTime: "$startTime",
                            hourQuery: "$hourQuery",
                            meetingType: "$meetingType",
                            meetingSpecialInterest: "$specialInterest"
                        }
                    }
                }
          }

        ]).toArray(function(err, docs) {
            if (err) {
                console.log(err);
            }
            else {
                ////to show map
                // response.writeHead(200, {'content-type': 'text/html'});
                // response.write(index1);
                // response.write(JSON.stringify(docs)); 
                // response.end(index3);

            ///to log data
                response.writeHead(200, {'content-type': 'application/json'});
                response.end(JSON.stringify(docs, null, 4));
                console.log('');
             
            }

            db.close();

        });

    }); //MongoClient.connect

}); // server

server.listen(process.env.PORT);


///////////////////////////////////////

///Queries MongoDB 'meetings' collection AA Manhattan area codes 1-10 data 
//and connects to server to show result

// IN THE MONGO SHELL: 
//   CREATE DATABASE meetingsData AND SWITCH TO IT WITH: 
//      use meetingsData
//   CREATE COLLECTION meetings WITH: 
//      db.createCollection('meetings')
//   QUERY THE ENTIRE meetings COLLECTION WITH:
//      db.meetings.find()
//   COUNT THE NUMBER OF DOCUMENTS IN THE meetings COLLECTION WITH:
//      db.meetings.find().count()

//TO TAKE DATA OUT
//db.meetings.remove( {} )

//TO SHUT DOWN MONGO (in shell)
//use admin
//db.shutdownServer()

// /////////////////////////////////


// var dbName = 'meetingsData';
// var collName = 'meetings';

// var http = require("http");
// var fs = require("fs");


// /////GETTING THERE

// // Connection URL
// var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;


// var index1 = fs.readFileSync("/home/ubuntu/workspace/index1.txt");
// var index3 = fs.readFileSync("/home/ubuntu/workspace/index3.txt");

// // Retrieve
// var MongoClient = require('mongodb').MongoClient;

// var server = http.createServer(function(request, response) {

//     MongoClient.connect(url, function(err, db) {
//         if (err) {
//             return console.dir(err);
//         }

//         var dateTimeNow = new Date();
        
//     ////getDay() changes DOW string to number
//         var today = dateTimeNow.getDay();
//         var tomorrow;
//             if (today == 6) {
//                 tomorrow = 0;
//             }
//             else {
//                 tomorrow = today + 1;
//             }
//         // var hour1 = [];
//         //var hour = [];
//         var hour = dateTimeNow.getHours()-05;
//       // var hour = dateTimeNow.getUTCHours();
//     //     var hour = [];
//     //  var hour1 = dateTimeNow.setHours(dateTimeNow.getHours()-05);
//         //hour1 = hour.push(dateTimeNow.setHours(dateTimeNow.getHours()-05));
//         if (hour == 0) {
//             hour = 12;
//         }
//         if (hour == -1) {
//             hour = 11;
//         }
//         if (hour == -2) {
//             hour = 10;
//         }
//         if (hour == -3) {
//             hour = 9;
//         }
//         if (hour == -4) {
//             hour = 8;
//         }
//       //hour = hour1.setHours();
       
        
//         console.log(hour);
//         // var dayQuery = dayQuery;
//         // var hourQuery = hourQuery;

//         var collection = db.collection(collName);

// //match, sort, group, push


//       collection.aggregate([ // start of aggregation pipeline

// ///match by day and time
//     { $match: 
//         { $or: [
//         { $and: [
//             {dayQuery : today} , {hourQuery : {$gte: hour} }
//         ]},
//          { $and: [
//                         {dayQuery : tomorrow} , {hourQuery : {$lte: 4} }
//                     ]}
//                 ]}
//             },   
    
    
//     // { $match: 
//     //     { $or: [
//     //     { $and: [{dayQuery: today, hourQuery: {$gte: hour}}]},
//     //      { $and: [{ dayQuery: tomorrow, hourQuery : {$lte: 4 } }
//     //                 ]},
//     //             ]}
//     //       },
            
     
//         // group by meeting group///\\\\\not using this
//             // { $group : { _id : {
//             //     latLong : "$location",
//             //     meetingName : "$name",
//             //     meetingAddress : "$address",
//             //     borough : "$borough",
//             //     meetingType : "$meetingType",
//             //     meetingSpecialInterest : "$specialInterest",
//             //     meetingDetails : "$details",
//             //     meetingWheelchair : "$access",
//             //      },
//                     // meetingDay : { $push : "$day" },
//                     // meetingStartTime : { $push : "$startTime" }, 
//                     // meetingType : { $push : "$meetingType" }
//             // }
//             // },
            
//  ///////////// group meeting groups by latLong
//              {
//                  $group : { _id : { 
//                     latLong : "$location"},
//                     meetingGroups : { $push : {
//                         groupInfo : "$_id", 
//                         latLong : "$location",
//                         meetingDay : "$day",
//                         meetingStartTime : "$startTime",
//                         dayQuery: "$dayQuery",
//                         hourQuery: "$hourQuery",
//                         meetingName : "$name", 
//                         meetingAddress : "$address",
//                         borough : "$borough",
//                         meetingType : "$meetingType",
//                         meetingSpecialInterest : "$specialInterest",
//                         meetingDetails : "$details",
//                         meetingWheelchair : "$access"
//                     }}
                    
//                 }
//             }

//         ]).toArray(function(err, docs) {
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                     // response.writeHead(200, {'content-type': 'text/html'});
//                     // response.write(index1);
//                     // response.write(JSON.stringify(docs));
//                     // response.end(index3);
                
                
//                     response.writeHead(200, {'content-type': 'application/json'});
//                     response.end(JSON.stringify(docs, null, 4));
//                   console.log('');
//                  //}
//             }

//             db.close();

//         });

//     }); //MongoClient.connect

// }); // server

// server.listen(process.env.PORT);



