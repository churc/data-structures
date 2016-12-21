/////Manhattan information into Mongo
////THIS INSERTS 'groups10latlg.txt': text file 1 into MONGO DB
//groupslatlg1-10.txt was generated in clean_apped8_ah.js for Manhattan area codes 1 - 10


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

//TO SHUT DOWN MONGO (use shell)
//use admin
//db.shutdownServer()

var fs = require('fs');

//var dbName = 'meetingsData';
var collectionName = 'meetings';
//each text file 01 - 10 into MongoDB - total 1205
var grpsData = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groupsAddLL10.txt"));

// Connection URL
var url = 'mongodb://' + process.env.IP + ':27017/meetingsData';
//  var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;

// Retrieve
var MongoClient = require('mongodb').MongoClient; // npm install mongodb

MongoClient.connect(url, function(err, db) {
    if (err) {
        return console.dir(err);
    }

    var collection = db.collection(collectionName);

    // THIS IS WHERE THE DOCUMENT(S) IS/ARE INSERTED TO MONGO:
    collection.insert(grpsData);
    db.close();
}); //MongoClient.connect

