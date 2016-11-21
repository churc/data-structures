////THIS INSERTS the LAT LONG address file meetings.txt into MONGO DB


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


var fs = require('fs');

//var dbName = 'meetingsData';
var collectionName = 'meetings';

var meetingsData = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/data/meetings.txt"));

// Connection URL
var url = 'mongodb://' + process.env.IP + ':27017/meetingsData';
//    var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;

// Retrieve
var MongoClient = require('mongodb').MongoClient; // npm install mongodb

MongoClient.connect(url, function(err, db) {
    if (err) {
        return console.dir(err);
    }

    var collection = db.collection(collectionName);

    // THIS IS WHERE THE DOCUMENT(S) IS/ARE INSERTED TO MONGO:
    collection.insert(meetingsData);
    db.close();
}); //MongoClient.connect
