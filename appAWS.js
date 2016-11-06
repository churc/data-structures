///THIS WORKS TO WRITE PHOTOCELL SENSOR DATA TO TERMINAL
//Puts data into db where the data is listed as values, does not stream


var pg = require('pg');

// connection string
var un = 'clare'; // aws db username
var pw = 'password'; // aws db password
var db = 'lightplant'; // aws db database name
var ep = 'lightplant.cj0jcdtzkz1u.us-west-2.rds.amazonaws.com:5432'; // aws db endpoint
var conString = "postgres://" + un + ":" + pw + "@" + ep + "/" + db;

var createTableQuery = "CREATE TABLE lightRdg (windowNo smallint NOT NULL, lightGroup varchar(50) NOT NULL, reading smallint NOT NULL, dateCreated timestamp DEFAULT current_timestamp NOT NULL);";
var insertIntoQuery = "INSERT INTO lightRdg VALUES (1, 'Dim', 900, DEFAULT);";
var query = "SELECT * FROM lightRdg WHERE windowNo = 1 AND lightGroup = 'Bright';";

////ah did this works note ;
//var query = "SELECT * FROM lightRdg;";
var complexQuery = "SELECT sum(reading) as total FROM lightRdg GROUP BY lightGroup;";


pg.connect(conString, function(err, client, done) {
    if (err) {
        return console.error('error fetching client from pool', err);
    }

    //what do you want me to do - query db - can mean put things in or take things out of db
    //eg client.query(insertIntoQuery, function(err, result) 
  
    //     client.query(createTableQuery, function(err, result) {
    //     //call `done()` to release the client back to the pool
    //     done();

    //     if (err) {
    //         return console.error('error running query', err);
    //     }
    //     console.log(result.rows);
    // });
 

         client.query(insertIntoQuery, function(err, result) {
        //call `done()` to release the client back to the pool
        done();

        if (err) {
            return console.error('error running query', err);
        }
       // console.log(result.rows);
    });

         client.query(query, function(err, result) {
        //call `done()` to release the client back to the pool
        done();

        if (err) {
            return console.error('error running query', err);
        }
        console.log(result.rows);
    });

        
    //     client.query(complexQuery, function(err, result) {
    //     //call `done()` to release the client back to the pool
    //     done();

    //     if (err) {
    //         return console.error('error running query', err);
    //     }
    //     console.log(result.rows);
    // });

});





// // PRESS YOUR LUCK button
// // https://youtu.be/fnTbO26u9bQ

// var pg = require('pg');

// // connection string
// var un = ''; // aws db username
// var pw = ''; // aws db password
// var db = ''; // aws db database name
// var ep = ''; // aws db endpoint
// var conString = "postgres://" + un + ":" + pw + "@" + ep + "/" + db;

// var createTableQuery = "CREATE TABLE wham (message varchar(100) , dateCreated timestamp DEFAULT current_timestamp, whammy boolean, amount smallint);"
// var insertIntoQuery = "INSERT INTO wham VALUES ('No whammy!!!', DEFAULT, FALSE, 100);"
// var query = "SELECT * FROM wham;"
// var complexQuery = "SELECT sum(amount) as total FROM wham GROUP BY whammy;"

// pg.connect(conString, function(err, client, done) {
//     if (err) {
//         return console.error('error fetching client from pool', err);
//     }

//     client.query(complexQuery, function(err, result) {
//         //call `done()` to release the client back to the pool
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//         console.log(result);
//     });

// });