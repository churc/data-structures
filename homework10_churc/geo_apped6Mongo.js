
////THIS INSERTS 'meetings.txt': text file 1 into MONGO DB collection meetings
//meetings.txt was generated in homework 3/app6.js which PARSES addresses and gets latLong for each address
//22 objects with information on meetings.txt file

//FOR full information for area code 1 see clean_apped6_ah.js: this inserts full information in Mongodb collection meetings

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

var fs = require('fs');

//var dbName = 'meetingsData';
var collectionName = 'meetings';

var groupsData = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/meetings.txt"));

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
    collection.insert(groupsData);
    db.close();
}); //MongoClient.connect
