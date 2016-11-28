///query Mongo meetings collection AA area 01 data 
//and connect to server to show result

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


var dbName = 'meetingsData';
var collName = 'meetings';
var http = require("http");

// Connection URL
var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;

// Retrieve
var MongoClient = require('mongodb').MongoClient;

var server = http.createServer(function(request, response) {

    MongoClient.connect(url, function(err, db) {
        if (err) {
            return console.dir(err);
        }

        var collection = db.collection(collName);

        collection.aggregate([

            //{ $match: { "day": "Tuesdays" }},
           // { $match: { "access": "Wheelchair access"}},
         //{ $match: {$or: [{"building": "Hazelden Center"},  { "access": "Wheelchair access" }]}},
           

            { $group: {
                    _id: {
                        building: "$building",
                        name: "$name",
                        address: "$address",
                        notes: "$notes",
                        access: "$access",
                        location: "$latLong"
                    },
                } },

            { $group: { _id: { latLong: "$id_latLong"
                                 },
                    meetingGroups: { $addToSet: { meetingGroup: "$_id",
                                meetings: { 
                                    meetingDays: "$meetingDay",
                                    startTimes: "$startTime",
                                    endTimes: "$endTime",
                                    meetingTypes: "$meetingType",
                                    specialInterest: "$specialInterest"
                                 }
                            } }, 
                    } },

        ]).toArray(function(err, docs) {
            if (err) {
                console.log(err);
            }
            else {
                for (var i = 0; i < docs.length; i++) {
                    // console.log(JSON.stringify(docs[i], null, 4));
                    //console.log('');

                    response.writeHead(200, {'content-type': 'application/json'
                    });
                    response.end(JSON.stringify(docs[i], null, 4));
                    
                }
            }

            db.close();

        });

    }); //MongoClient.connect

}); // server

server.listen(process.env.PORT);





///////////////////////////////////////

// ///query Mongo meetings collection AA area 01 data 
// //and connect to server to show result

// // IN THE MONGO SHELL: 
// //   CREATE DATABASE meetingsData AND SWITCH TO IT WITH: 
// //      use meetingsData
// //   CREATE COLLECTION meetings WITH: 
// //      db.createCollection('meetings')
// //   QUERY THE ENTIRE meetings COLLECTION WITH:
// //      db.meetings.find()
// //   COUNT THE NUMBER OF DOCUMENTS IN THE meetings COLLECTION WITH:
// //      db.meetings.find().count()

// //TO TAKE DATA OUT
// //db.meetings.remove( {} )

// //TO SHUT DOWN MONGO 
// //use admin
// //db.shutdownServer()


// var dbName = 'meetingsData';
// var collName = 'meetings';
// var http = require("http");

// // Connection URL

// //var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;

// var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;

// // Retrieve
// var MongoClient = require('mongodb').MongoClient;

// var server = http.createServer(function(request, response) {

//     MongoClient.connect(url, function(err, db) {
//         if (err) {
//             return console.dir(err);
//         }

//         var collection = db.collection(collName);

//         collection.aggregate([

//             // {
//             //     $unwind: "$groupsData"
//             // },

//             // {
//             //     $match: {
//             //         "groupsData.day": "Tuesdays"
//             //     }
//             // },

//             {
//                 $group: {
//                     _id: {
//                         building: "$building",
//                         name: "$name",
//                         address: "$address",
//                         //meetingAddress2 : "$meetingAddress2",
//                         notes: "$notes",
//                         access: "$access",
//                         latLong: "$latLong"
//                     },
//                     meetingDay: {
//                         $push: "$groupsData.day"},
//                     startTime: {
//                         $push: "$groupsData.startTime"},
//                     startTimeHour: {
//                         $push: "$groupsData.startTimeHour"},
//                     endTime: {
//                         $push: "$groupsData.endTime"},
//                     meetingType: {
//                         $push: "$groupsData.meetingType"},
//                     specialInterest: {
//                         $push: "$groupsData.specialInterest"}
//                 }},

//             {
//                 $group: {
//                     _id: {
//                         latLong: "$_id.latLong"
//                     },
//                     meetingGroups: {
//                         $addToSet: {
//                             meetingGroup: "$_id",
//                             meetings: {
//                                 meetingDays: "$meetingDay",
//                                 startTimes: "$startTime",
//                                 startTimeHours: "$startTimeHour",
//                                 endTimes: "$endTime",
//                                 meetingTypes: "$meetingType",
//                                 specialInterests: "$specialInterest"
//                             } 
//                         } } 
//                     } }

//         ]).toArray(function(err, docs) {
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 // console.log(JSON.stringify(docs));
//                 for (var i = 0; i < docs.length; i++) {
//                     console.log(JSON.stringify(docs[i], null, 4));
//                     console.log('');

//                     //  response.writeHead(200, {"Content-Type": "text/html"});
//                     //   response.write("<h1>Hello, world!</h1>");
//                     //   response.end("<p>etc</p>");
//                     // });

//                     //   res.writeHead(200, {'content-type': 'application/json'});
//                     //  res.end(JSON.stringify(result.rows));
//                     // console.log(result.rows);

//                     ///use this
//                     response.writeHead(200, {
//                         'content-type': 'application/json'
//                     });
//                     response.end(JSON.stringify(docs[i]));
//                     console.log(docs[i]);

//                 }
//             }

//             db.close();

//         });

//     }); //MongoClient.connect

// }); // server

// server.listen(process.env.PORT);

// //server.listen(process.env.PORT || 8081);

/////////////////////
// //AH starter code


// // var dbName = 'mongoTest';
// // var collName = 'threeMeetings';

// // // Connection URL
// // var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;

// // // Retrieve
// // var MongoClient = require('mongodb').MongoClient;

// // MongoClient.connect(url, function(err, db) {
// //     if (err) {
// //         return console.dir(err);
// //     }

// //     var collection = db.collection(collName);

// //     collection.aggregate( [

// //         { $unwind : "$meetingList" },
        
// //         { $match : { "meetingList.day" : "Tuesdays" } },
        
// //         { $group : {  _id : { 
// //             meetingName : "$meetingName",
// //             meetingHouse : "$meetingHouse",
// //             meetingAddress1 : "$meetingAddress1",
// //             meetingAddress2 : "$meetingAddress2",
// //             meetingDetails : "$meetingDetails",
// //             meetingWheelchair : "$meetingWheelchair",
// //             latLong : "$latLong"
// //         }, 
// //             meetingDay : { $push : "$meetingList.day" },
// //             startTime : { $push : "$meetingList.startTime" },
// //             startTimeHour : { $push : "$meetingList.startTimeHour" },
// //             endTime : { $push : "$meetingList.endTime" },
// //             meetingType : { $push : "$meetingList.meetingType" },
// //             specialInterest : { $push : "$meetingList.specialInterest" }
// //         }},
        
// //         { $group : { _id : { latLong : "$_id.latLong" }, 
// //                     meetingGroups : { $addToSet : {  meetingGroup : "$_id", 
// //                                                 meetings : {
// //                                                 meetingDays : "$meetingDay",
// //                                                 startTimes : "$startTime",
// //                                                 startTimeHours : "$startTimeHour",
// //                                                 endTimes : "$endTime",
// //                                                 meetingTypes : "$meetingType",
// //                                                 specialInterest : "$specialInterest"
// //                                                 }
// //                     } }
// //                     } }
        
// //          ]).toArray(function(err, docs) {
// //         if (err) {console.log(err);}
// //         else {
// //             // console.log(JSON.stringify(docs));
// //             for (var i=0; i < docs.length; i++) {
// //                 console.log(JSON.stringify(docs[i], null, 4));
// //                 console.log('');
// //             }
// //         }
// //         db.close();
        
// //     });

// // }); //MongoClient.connect