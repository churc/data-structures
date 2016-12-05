////FINAL ARDUINO PHOTOCELL SENSOR FOR 2 PHOTORESISTORS
///ADAPTED FROM AH CODE///READS BOTH PHOTORESISTORS
////INSERTS INTO AWS DB
///QUERIES DB TO GET READINGS

var pg = require('pg');
var five = require("johnny-five"), board, photoresistor1, photoresistor2;

// connection string
var un = 'clare'; // aws db username
var pw = 'password'; // aws db password
var db = 'lightplant'; // aws db database name
var ep = 'lightplant.cj0jcdtzkz1u.us-west-2.rds.amazonaws.com:5432'; // aws db endpoint
var conString = "postgres://" + un + ":" + pw + "@" + ep + "/" + db;

var createTableQuery = "CREATE TABLE lightP (windowNo smallint NOT NULL, reading smallint NOT NULL, dateCreated timestamp DEFAULT current_timestamp NOT NULL);";

board = new five.Board();

board.on("ready", function() {
    // Create a new `photoresistor` hardware instance for each breadboard.
    var photoresistor1 = new five.Sensor({
        pin: "A0",
        freq: 120000
    });

    var photoresistor2 = new five.Sensor({
        pin: "A2",
        freq: 120000
    });

//Inject the `sensor` hardware into the Repl instance's context; allows direct command line access
  board.repl.inject({
    pot: photoresistor1
});


    photoresistor1.on("data", function() {
            var insertIntoQuery = "INSERT INTO lightP VALUES (1 , " + this.value + ", DEFAULT);";
            var query = "SELECT * FROM lightP;";
            
            pg.connect(conString, function(err, client, done) {
                    if (err) {
                        return console.error('error fetching client from pool', err);
                    }

            ////RUN ONCE to create a table
                // client.query(createTableQuery, function(err, result) {
                    // //call `done()` to release the client back to the pool
                    // done();
                    // if (err) {
                      //   return console.error('error running query', err);
                    //  }
                    //   console.log(result.rows);
                    //  });

                    /////TO INSERT DATA INTO TABLE
                    client.query(insertIntoQuery, function(err, result) {
                        //call `done()` to release the client back to the pool
                        done();
                        if (err) {
                            return console.error('error running query', err);
                        }
                    }); //client.insertIntoQuery

                   ///////////TO QUERY DB FOR READINGS
                    client.query(query, function(err, result) {
                     //call `done()` to release the client back to the pool
                        done();
                        if (err) {
                            return console.error('error running query', err);
                        }
                        else{
                            console.log(result.rows);
                        }
                    }); //client.query
                }); //pg.connect

  }).on("release", function() {
      photoresistor1.off();     
 });

  board.repl.inject({
    pot: photoresistor2
});
 
    photoresistor2.on("data", function() {
            var insertIntoQuery = "INSERT INTO lightP VALUES (2 , " + this.value + ", DEFAULT);";
            var query = "SELECT * FROM lightP;";

            pg.connect(conString, function(err, client, done) {
                    if (err) {
                        return console.error('error fetching client from pool', err);
                    }

                /////TO INSERT DATA INTO TABLE
                client.query(insertIntoQuery, function(err, result) {
                        //call `done()` to release the client back to the pool
                        done();
                        if (err) {
                            return console.error('error running query', err);
                        }
                    }); //client.insertIntoQuery
                    
                ///////////TO QUERY DB FOR READINGS
                client.query(query, function(err, result) {
                        //call `done()` to release the client back to the pool
                        done();
                        if (err) {
                            return console.error('error running query', err);
                        }
                        else{
                            console.log(result.rows);
                        }
                    }); //client.query
                }); //pg.connect
       }); //board

}).on("release", function() {
      photoresistor2.off();
    
});



/////////////////
//Aaron's Starter CODE
// var pg = require('pg');
// var five = require("johnny-five"), board;

// // connection string
// var un = 'clare'; // aws db username
// var pw = 'password'; // aws db password
// var db = 'lightplant'; // aws db database name
// var ep = 'lightplant.cj0jcdtzkz1u.us-west-2.rds.amazonaws.com:5432'; // aws db endpoint
// var conString = "postgres://" + un + ":" + pw + "@" + ep + "/" + db;

// // var createTableQuery = "CREATE TABLE lightR (windowNo smallint NOT NULL, reading smallint NOT NULL, dateCreated timestamp DEFAULT current_timestamp NOT NULL);";

// board = new five.Board();

// board.on("ready", function() {
//     // Create a new `photoresistor` hardware instance for each breadboard.
//     var photoresistor1 = new five.Sensor({
//         pin: "A0",
//         freq: 60000
//     });

//     var photoresistor2 = new five.Sensor({
//         pin: "A2",
//         freq: 60000
//     });

//     photoresistor1.on("data", function() {
//             var insertIntoQuery = "INSERT INTO lightR22 VALUES (1 , " + this.value + ", DEFAULT);";

//             pg.connect(conString, function(err, client, done) {
//                     if (err) {
//                         return console.error('error fetching client from pool', err);
//                     }

//                     /////TO INSERT DATA INTO TABLE
//                     client.query(insertIntoQuery, function(err, result) {
//                         //call `done()` to release the client back to the pool
//                         done();
//                         if (err) {
//                             return console.error('error running query', err);
//                         }
//                     }); //client.query
//                 }); //pg.connect
//         }); //photoresistor1

//     photoresistor2.on("data", function() {
//             var insertIntoQuery = "INSERT INTO lightR22 VALUES (2 , " + this.value + ", DEFAULT);";

//             pg.connect(conString, function(err, client, done) {
//                     if (err) {
//                         return console.error('error fetching client from pool', err);
//                     }

//                     /////TO INSERT DATA INTO TABLE
//                     client.query(insertIntoQuery, function(err, result) {
//                         //call `done()` to release the client back to the pool
//                         done();
//                         if (err) {
//                             return console.error('error running query', err);
//                         }
//                     }); //client.query
//                 }); //pg.connect
//         }); //photoresistor2

// });
//////////////////////




