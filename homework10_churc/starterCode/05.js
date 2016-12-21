// QUERY MONGODB

var datetimeStart = new Date();

var dbName = 'citibike';
var collName = 'stations';

// Connection URL
var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;

// Retrieve
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(url, function(err, db) {
    if (err) {return console.dir(err);}

    var collection = db.collection(collName);

    collection.aggregate([{ $limit : 3 }]).toArray(function(err, docs) {
        if (err) {console.log(err)}
        
        else {
            console.log(docs);
        }
        db.close();
        console.log("This process completed in", new Date() - datetimeStart, "milliseconds.");
    });
});
Contact GitHub API Training Shop Blog About
