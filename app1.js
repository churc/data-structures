//Using the aggregation pipeline, write a query that returns all meetings that start on Tuesdays at or after 7:00pm
//db.stations.aggregate ([{ $group : { _id: null , meetings : { $meetings: "$Tuesday"}, meetings : { $time: $19:00 } , meetings : { $time: $gt 19:00 }}])
//db.stations.aggregate ([{ $match : { _id: null , meetings : { $meetings: "$Tuesday"}, meetings : { $time: $19:00 } , meetings : { $time: $gt 19:00 }}])

//db.stations.aggregate ([{ $group : { _id: null , "meetings" : { "$meetings": "$Tuesday"},  "time" : { $gte 19:00 }}])
// QUERY MONGODB   $push $concatArrays

var mtgsData = JSON.parse(fs.readFileSync("/home/ubuntu/workspace/allinfo1.txt"));

var datetimeStart = new Date();

var dbName = 'mtgsData';
var collName = 'meetings';

// Connection URL
var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;

// Retrieve
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(url, function(err, db) {
    if (err) {return console.dir(err);}

    var collection = db.collection(collName);

    //collection.aggregate([{ $limit : 3 }]).toArray(function(err, docs) {
    
     collection.aggregate([{ $match : {_id: null, time: {$and: [{“$day”: “Tuesday”}, {“$time": {$gte : "7:00 PM" }}]}}}]).toArray (function (err, docs) {
     
        if (err) {console.log(err)}
        
        else {
            console.log(docs);
        }
        db.close();
        console.log("This process completed in", new Date() - datetimeStart, "milliseconds.");
    });
});

