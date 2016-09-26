///connected to mongodb
//using parsed meetings array with lat long and addresses 
//structured around latlong
// line 29 replace error, not getting the documents in the terminal

// IN THE MONGO SHELL: 
//   CREATE DATABASE meetings AND SWITCH TO IT WITH: 
//      use meetings
//   CREATE COLLECTION meetings WITH: 
//      db.createCollection('meetings')
//   QUERY THE ENTIRE meetings COLLECTION WITH:
//      db.meetings.find()
//   COUNT THE NUMBER OF DOCUMENTS IN THE meetings COLLECTION WITH:
//      db.meetings.find().count()

//var request = require('request'); //npm install request
var fs = require('fs');
var ObjectId = require('mongodb').ObjectID;
var mtgsData = new Object;
var assert = require('assert');
//var async = require('async');


        fs.readFileSync("/home/ubuntu/workspace/data2/meetings.txt", function(error, response, body) {
        var mtgs = JSON.parse(body);

//trying to remove plux signs between the words - not getting replace to work 
    for (var i = 0; i < mtgs.length; i++) {
          mtgs[i] = mtgs[i].replace(/"+"/g, " ");
          
          mtgsData.push(mtgs);
        }
    
    console.log(mtgsData);

// Connection to file
    var url = 'mongodb://' + process.env.IP + ':27017/meetings';

// Retrieve MongoDB
    var MongoClient = require('mongodb').MongoClient; // npm install mongodb

        MongoClient.connect(url, function(err, db) {
             if (err) {
                 return console.dir(err);
                }

// Documents collection
    var collection = db.collection('meetings');

// THIS IS WHERE THE DOCUMENTS ARE INSERTED TO MONGO:
    for (var i = 0; i < mtgsData.length; i++) {
            collection.insert(mtgsData[i]), {
                "_id": ObjectId(" "),
                "latLong": [
                    { 
                        "_id": ObjectId(" "),
                        "latLong": [],
                        "boroughName": "Manhattan",
                        "locationName": [],
                        "address": [],
                        "locationNotes": [],
                    }
                    ],
                "locationName": [
                    {
                        "_id": ObjectId(" "),
                        "locationNm": [],
                        "latLong": [],
                        "days": {
                            "_id": ObjectId(" "),
                            "day": [],
                             "times": [
                                 {
                                  "group": [],
                                  "type": []
                                 }],
                                }, 
                             },
                       ],
                "Days": [
                    {
                    "_id": ObjectId(" "),
                    "day": [],
                    "latLong": []
                    },
                    ],
                "AnyType": [
                    {
                    "_id": ObjectId(" "),
                    "Type": [],
                    "latLong": []
                    },
                    ],
                },    
                        function(err, result) {
                        assert.equal(err, null);
                        console.log("inserted");
                            };
                    }
        db.close();
    });
});
