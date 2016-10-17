///connected to mongodb
//using parsed meetings array with all information: allinfo1.txt
// getting TypeError: Cannot assign to read only property '_id' of St Andrews Church

// IN THE MONGO SHELL: 
//   CREATE DATABASE meetings AND SWITCH TO IT WITH: 
//      use meetings
//   CREATE COLLECTION meetings WITH: 
//      db.createCollection('meetings')
//   QUERY THE ENTIRE meetings COLLECTION WITH:
//      db.meetings.find()
//   COUNT THE NUMBER OF DOCUMENTS IN THE meetings COLLECTION WITH:
//      db.meetings.find().count()


var fs = require('fs');

var mtgsData = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/allinfo1.txt"));


// Connection to url
var url = 'mongodb://' + process.env.IP + ':27017/meetings';

// Retrieve MongoDB
var MongoClient = require('mongodb').MongoClient; // npm install mongodb

MongoClient.connect(url, function(err, db) {
    if (err) {
        return console.dir(err);
    }

// Documents collection
    var collection = db.collection('meetings');

// Insert documents in meetings collection in Mongo:
    collection.insert(mtgsData);
    db.close();

});