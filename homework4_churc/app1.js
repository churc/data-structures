// IN THE MONGO SHELL: 
//   CREATE DATABASE m02meeting AND SWITCH TO IT WITH: 
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
var mtgsData = [];
var assert = require('assert');
var async = require('async');
//var mtgs = [];
// Retrieve MongoDB
var MongoClient = require('mongodb').MongoClient; // npm install mongodb


var mtgs = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/data2/meetings.txt")); 

var plus = ['+'];

for (var i = 0; i < mtgs.length; i++) {
         //   mtgs[i] = mtgs[i].find('+').removeAttr('clear');
         mtgs.push(mtgs[i].removeWords(mtgs, true, plus));
        }
      mtgsData.push(mtgs);
  //          mtgsData = mtgs.replace(/['+']/g, " ");
//}
console.log(mtgsData);

//var mtgsData = JSON.parse([{"address":"20+Cardinal+Hayes+Place,+New+York,+NY","latLong":{"lat":40.7133468,"lng":-74.0025814}},{"address":"20+Cardinal+Hayes+Place,+New+York,+NY","latLong":{"lat":40.7133468,"lng":-74.0025814}},{"address":"29+Mott+Street,+New+York,+NY","latLong":{"lat":40.7148115,"lng":-73.99911709999999}},{"address":"49+Fulton+Street,+New+York,+NY","latLong":{"lat":40.7081354,"lng":-74.00394519999999}},{"address":"44+John+Street,+New+York,+NY","latLong":{"lat":40.7091344,"lng":-74.0081019}},{"address":"49+Fulton+Street,+New+York,+NY","latLong":{"lat":40.7081354,"lng":-74.00394519999999}},{"address":"20+Cardinal+Hayes+Place,+New+York,+NY","latLong":{"lat":40.7133468,"lng":-74.0025814}},{"address":"22+Barclay+Street,+New+York,+NY","latLong":{"lat":40.7123651,"lng":-74.00956409999999}},{"address":"20+Cardinal+Hayes+Place,+New+York,+NY","latLong":{"lat":40.7133468,"lng":-74.0025814}},{"address":"22+Barclay+Street+(Basement),+New+York,+NY","latLong":{"lat":40.7123651,"lng":-74.00956409999999}},{"address":"283+West+Broadway,+New+York,+NY","latLong":{"lat":40.7208017,"lng":-74.0048389}},{"address":"125+Barclay+Street,+New+York,+NY","latLong":{"lat":40.7145883,"lng":-74.01295809999999}},{"address":"49+Fulton+Street,+New+York,+NY","latLong":{"lat":40.7081354,"lng":-74.00394519999999}},{"address":"49+Fulton+Street,+New+York,+NY","latLong":{"lat":40.7081354,"lng":-74.00394519999999}},{"address":"20+Cardinal+Hayes+Place,+New+York,+NY","latLong":{"lat":40.7133468,"lng":-74.0025814}},{"address":"283+West+Broadway,+New+York,+NY","latLong":{"lat":40.7208017,"lng":-74.0048389}},{"address":"49+Fulton+Street,+New+York,+NY","latLong":{"lat":40.7081354,"lng":-74.00394519999999}},{"address":"22+Barclay+Street-+basement+chapel,+New+York,+NY","latLong":{"lat":40.7127837,"lng":-74.0059413}},{"address":"20+Cardinal+Hayes+Place,+New+York,+NY","latLong":{"lat":40.7133468,"lng":-74.0025814}},{"address":"283+West+Broadway,+New+York,+NY","latLong":{"lat":40.7208017,"lng":-74.0048389}},{"address":"283+West+Broadway,+New+York,+NY","latLong":{"lat":40.7208017,"lng":-74.0048389}},{"address":"283+W.+Broadway,+New+York,+NY","latLong":{"lat":40.7208017,"lng":-74.0048389}}]);
            
// Connection to file
var url = 'mongodb://' + process.env.IP + ':27017/meetings';

        MongoClient.connect(url, function(err, db) {
             assert.equal(null, err);
             console.dir("connected");
             db.close();
        });

    var insertDocuments = function(db, callback) {

                // Documents collection
    var collection = db.collection('meetings');

                // THIS IS WHERE THE DOCUMENT(S) IS/ARE INSERTED TO MONGO:
    for (var i = 0; i < mtgsData.length; i++) {
            collection.insertMany(mtgsData[i].replace(/[+]/g, " "), {
                "_id": ObjectId(""),
                "Borough": [
                    { 
                        "boroughName": "Manhattan",
                        "latLong": []
                    },
                    { 
                        "boroughName": "Brooklyn",
                        "latLong": []
                    }                        
                    ],
                "latLong": [
                    {
                        "latlong1": [],
                        "locationName": [],
                        "Monday": {
                             "times": [
                                 {
                                  "group": [],
                                  "type": []
                                 }],
                                }, 
                        "Tuesday": {
                            "times": [
                                 {
                                  "group": [],
                                  "type": []
                                 }],
                                }, 
                        "Wednesday": {
                            "times": [
                                 {
                                  "group": [],
                                  "type": []
                                 }],
                                },
                        "Thursday": {
                            "times": [
                                 {
                                  "group": [],
                                  "type": []
                                 }],
                                },
                        "Friday": {
                            "times": [
                                 {
                                  "group": [],
                                  "type": []
                                 }],
                                }, 
                        "Saturday": {
                            "times": [
                                 {
                                  "group": [],
                                  "type": []
                                 }],
                                },
                        "Sunday": {
                            "times": [
                                 {
                                  "group": [],
                                  "type": []
                                 }],
                            },
                         },
                       ],
                "locationName": [
                        {
                        "address1": [],
                        "locationNotes": []
                        },
                        {
                        "address2": [],
                        "locationNotes": []
                        },
                        ],
                "Day": [],
                    },    
                            function(err, result) {
                                assert.equal(err, null);
                                console.log("inserted");
                                callback(result);
                                db.close();
                                }
                      );
            }
    };