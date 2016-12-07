////TRYING TO LOOP TEXT FILES 01-10 INTO MONGODB
////THIS INSERTS 'groups1.txt': text file 1 into MONGO DB
//groups1.txt was generated in clean_apped4_ah.js and contains 
//55 objects with information on txt.1 file


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
var request = require('request');

//var dbName = 'meetingsData';
var collectionName = 'meetings';

var groupsData = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups1.txt"));
//////work on this
function tenFiles(file) {
    request(file + '.txt', function(error, response, body){
        if(!error && response.statusCode == 200) {
            console.log(file + ' read');
        } else {
            console.error('request failed!');
        }
    });

}
 
    for (var i=1; '.txt'<= 10; i++ ) {
         if( i < 10 ) {
              tenFiles('0' + i);
         } else {
             tenFiles(i);
        }
}
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


// ////THIS INSERTS 'groups1.txt': text file 1 into MONGO DB
// //groups1.txt was generated in clean_apped4_ah.js and contains 
// //55 objects with information on txt.1 file


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

// var fs = require('fs');

// //var dbName = 'meetingsData';
// var collectionName = 'meetings';

// var groupsData = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/groups1.txt"));

// // Connection URL
// var url = 'mongodb://' + process.env.IP + ':27017/meetingsData';
// //  var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;

// // Retrieve
// var MongoClient = require('mongodb').MongoClient; // npm install mongodb

// MongoClient.connect(url, function(err, db) {
//     if (err) {
//         return console.dir(err);
//     }

//     var collection = db.collection(collectionName);

//     // THIS IS WHERE THE DOCUMENT(S) IS/ARE INSERTED TO MONGO:
//     collection.insert(groupsData);
//     db.close();
// }); //MongoClient.connect