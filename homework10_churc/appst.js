//assignment 9 / 10 - writing to db
//querying the db to group light readings for color coding in timeline
//find time of highest reading 
//find times that reading is above 800 during the day
//see node queryLightAwS3.js for queries to RDS db

var pg = require('pg');
var five = require("johnny-five"), board, photoresistor;


// connection string
var un = 'clare'; // aws db username
var pw = 'password'; // aws db password
var db = 'lightplant'; // aws db database name
var ep = 'lightplant.cj0jcdtzkz1u.us-west-2.rds.amazonaws.com:5432'; // aws db endpoint
var conString = "postgres://" + un + ":" + pw + "@" + ep + "/" + db;

// CREATE TABLE lightR
//var createTableQuery = "CREATE TABLE lightRR (windowNo smallint NOT NULL, reading smallint NOT NULL, dateCreated timestamp DEFAULT current_timestamp NOT NULL);";


board = new five.Board();

board.on("ready", function() {
// Create a new `photoresistor` hardware instance.
  photoresistor = new five.Sensor({
    pin: "A2",
    freq: 20000
  });

// Inject the `sensor` hardware into the Repl instance's context;
// allows direct command line access
  board.repl.inject({
    pot: photoresistor
  });

//"data" get the current reading from the photoresistor
  photoresistor.on("data", function() {

     //  if (this.value < 50) {
     //    console.log("Window 1," + "  Night, " + this.value + ", " + new Date);   
     //  }
     //  else if (this.value < 200) {
     //    console.log("Window 1," + "  Nearly dark, " + this.value + ", "+ new Date);
     //  }
     //  else if (this.value < 350) {
     //    console.log("Window 1," + "  Dusk, " + this.value + ", " + new Date);       
     //   }
     //  else if (this.value < 500) {
     //    console.log("Window 1," + "  Very dim, " + this.value + ", " + new Date); 
     //  }
     //   else if (this.value < 650) {
     //    console.log("Window 1," + "  Dim, " + this.value + ", " + new Date);
     //    }
     //  else if (this.value < 800) {
     //    console.log("Window 1," + "  Light, " + this.value + ", " + new Date);
     //   }
     //  else if (this.value < 950) {
     //     console.log("Window 1," + "  Bright, " + this.value + ", " + new Date);
     //  }
     //  else if (this.value >= 950) {
     //     console.log("Window 1," + "  Very bright, " + this.value + ", " + new Date);
     // }
  

var insertIntoQuery = "INSERT INTO lightRR VALUES (1 , " + this.value + ", DEFAULT);";

var query = "SELECT * FROM lightRR;";

// var queryNight = "SELECT * FROM lightR12 AS nt WHERE reading < 50 ORDER BY dateCreated;";
// var queryNearlyDark = "SELECT * FROM lightR12 AS nd WHERE reading > 50 AND reading < 200 ORDER BY dateCreated;";
// var queryDusk = "SELECT * FROM lightR12 AS dk WHERE reading > 200  AND reading < 350 ORDER BY dateCreated;";
// var queryVeryDim = "SELECT * FROM lightR12 AS vd WHERE reading > 350 AND reading < 500 ORDER BY dateCreated;";
// var queryDim = "SELECT * FROM lightR12 AS dm WHERE reading > 500 AND reading < 650 ORDER BY dateCreated;";
// var queryLight = "SELECT * FROM lightR12 AS lr WHERE reading > 650 AND reading < 800 ORDER BY dateCreated;";
// var queryBright = "SELECT * FROM lightR12 AS bt WHERE reading > 800 AND reading < 950 ORDER BY dateCreated;";
// var queryVeryBright = "SELECT * FROM lightR12 AS vb WHERE reading >= 950 ORDER BY dateCreated;";

// var queryHighest = "SELECT * FROM lightR12 AS hght ORDER BY reading DESC LIMIT 1;";
// var queryHigh = "SELECT * FROM lightR12 AS hgh WHERE reading >= 800 ORDER BY dateCreated;";
// var queryLong = "SELECT windowNo, COUNT (reading) FROM lightR12 AS running_ct WHERE reading >= 800 GROUP BY windowNo";
///trying to get length of time where light is 800 and over
//var queryLong2 = "SELECT DISTINCT dateCreated_trunc('second', "dateCreated") AS long, COUNT (*) OVER (ORDER BY dateCreated_trunc('second', "dateCreated")) AS running_ct FROM lightR WHERE reading > 800 ORDER BY dateCreated_trunc('second', "dateCreated");";


pg.connect(conString, function(err, client, done) {
    if (err) {
        return console.error('error fetching client from pool', err);
    }

/////RUN ONCE TO MAKE TABLE/////////////
// client.query(createTableQuery, function(err, result) {
//         //call `done()` to release the client back to the pool
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//         console.log(result.rows);
//     });
/////////////////////////////

///TO INSERT DATA INTO TABLE
client.query(insertIntoQuery, function(err, result) {
        //call `done()` to release the client back to the pool
        done();

        if (err) {
            return console.error('error running query', err);
        }
        // else{
        //  console.log(result.rows);
        // }
     });

// // // // //////TO GET ALL READINGS IN TABLE ////////////////////
client.query(query, function(err, result) {
        //call `done()` to release the client back to the pool
        done();

        if (err) {
            return console.error('error running query', err);
        }
        else{
         console.log(result.rows);
        }
     });

//TO GROUP BY AMOUNT OF LIGHT in order to color code by light, groups are: 
//night, nearly dark, dusk, very dim, dim, light, bright & very bright/////

//client.query(queryNight, function(err, result) {
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//        else{
//          console.log(result.rows);
//         }
//     });

// client.query(queryNearlyDark, function(err, result) {
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//        else{
//          console.log(result.rows);
//         }
//     });

// client.query(queryDusk, function(err, result) {
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//        else{
//          console.log(result.rows);
//         }
//     });

// client.query(queryVeryDim, function(err, result) {
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//        else{
//          console.log(result.rows);
//         }
//     });

// client.query(queryDim, function(err, result) {
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//        else{
//          console.log(result.rows);
//         }
//     });

// client.query(queryLight, function(err, result) {
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//        // else{
//        //   console.log(result.rows);
//        //  }
//     });

// client.query(queryBright, function(err, result) {
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//        else{
//          console.log(result.rows);
//         }
//     });

// client.query(queryVeryBright, function(err, result) {
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//        else{
//          console.log(result.rows);
//         }
//     });
// //////TO GET HIGHEST READING
// client.query(queryHighest, function(err, result) {
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//        else{
//          console.log(result.rows);
//         }
//     });


// //////////TO GET ALL TIMES IN DAY THAT READING IS 800 OR HIGHER
// client.query(queryHigh, function(err, result) {
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//        else{
//          console.log(result.rows);
//         }
//     });


// ///////TO COUNT TOTAL NUMBER OF TIMES LIGHT IS 800 OR HIGHER 
// client.query(queryLong, function(err, result) {
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//        else{
//          console.log(result.rows);
//         }
//     });



  });
}).on("release", function() {
      photoresistor.off();
    });
});











// //assignment 9 - writing to db
// //querying the db to group light readings for color coding in timeline
// //find time of highest reading 
// //find times that reading is above 800 during the day
// //compute length of time that reading is above 800

// var pg = require('pg');
// var five = require("johnny-five"), board, photoresistor;


// // connection string
// var un = 'clare'; // aws db username
// var pw = 'password'; // aws db password
// var db = 'lightplant'; // aws db database name
// var ep = 'lightplant.cj0jcdtzkz1u.us-west-2.rds.amazonaws.com:5432'; // aws db endpoint
// var conString = "postgres://" + un + ":" + pw + "@" + ep + "/" + db;

// var createTableQuery = "CREATE TABLE lightR (windowNo smallint NOT NULL, reading smallint NOT NULL, dateCreated timestamp DEFAULT current_timestamp NOT NULL);";


// board = new five.Board("B");

// board.on("ready", function() {

// // Create a new `photoresistor` hardware instance.
//   photoresistor = new five.Sensor({
//     pin: "A2",
//     freq: 10000
//   });

// // Inject the `sensor` hardware into the Repl instance's context;
// // allows direct command line access
//   board.repl.inject({
//     pot: photoresistor
//   });

// // "data" get the current reading from the photoresistor
//   photoresistor.on("data", function() {

//      //  if (this.value < 50) {
//      //    console.log("Window 1," + "  Night, " + this.value + ", " + new Date);   
//      //  }
//      //  else if (this.value < 200) {
//      //    console.log("Window 1," + "  Nearly dark, " + this.value + ", "+ new Date);
//      //  }
//      //  else if (this.value < 350) {
//      //    console.log("Window 1," + "  Dusk, " + this.value + ", " + new Date);       
//      //   }
//      //  else if (this.value < 500) {
//      //    console.log("Window 1," + "  Very dim, " + this.value + ", " + new Date); 
//      //  }
//        // else if (this.value < 650) {
//        //  console.log("Window 1," + "  Dim, " + this.value + ", " + new Date);
//        // }
//      //  else if (this.value < 800) {
//      //    console.log("Window 1," + "  Light, " + this.value + ", " + new Date);
//      //   }
//      //  else if (this.value < 950) {
//      //     console.log("Window 1," + "  Bright, " + this.value + ", " + new Date);
//      //  }
//      //  else if (this.value >= 950) {
//      //     console.log("Window 1," + "  Very bright, " + this.value + ", " + new Date);
//      // }
  

// var insertIntoQuery = "INSERT INTO lightR VALUES (1 , " + this.value + ", DEFAULT);";

// var query = "SELECT * FROM lightR;";

// var queryNight = "SELECT * FROM lightR AS nt WHERE reading < 50 ORDER BY dateCreated;";
// var queryNearlyDark = "SELECT * FROM lightR AS nd WHERE reading > 50 AND reading < 200 ORDER BY dateCreated;";
// var queryDusk = "SELECT * FROM lightR AS dk WHERE reading > 200  AND reading < 350 ORDER BY dateCreated;";
// var queryVeryDim = "SELECT * FROM lightR AS vd WHERE reading > 350 AND reading < 500 ORDER BY dateCreated;";
// var queryDim = "SELECT * FROM lightR AS dm WHERE reading > 500 AND reading < 650 ORDER BY dateCreated;";
// var queryLight = "SELECT * FROM lightR AS lr WHERE reading > 650 AND reading < 800 ORDER BY dateCreated;";
// var queryBright = "SELECT * FROM lightR AS bt WHERE reading > 800 AND reading < 950 ORDER BY dateCreated;";
// var queryVeryBright = "SELECT * FROM lightR AS vb WHERE reading >= 950 ORDER BY dateCreated;";

// var queryHighest = "SELECT * FROM lightR AS hght ORDER BY reading DESC LIMIT 1;";
// var queryHigh = "SELECT * FROM lightR AS hgh WHERE reading >= 800 ORDER BY dateCreated;";
// var queryLong = "SELECT windowNo, COUNT (reading) FROM lightR AS running_ct WHERE reading >= 800 GROUP BY windowNo";
// ///trying to get length of time where light is 800 and over
// //var queryLong2 = "SELECT DISTINCT dateCreated_trunc('second', "dateCreated") AS long, COUNT (*) OVER (ORDER BY dateCreated_trunc('second', "dateCreated")) AS running_ct FROM lightR WHERE reading > 800 ORDER BY dateCreated_trunc('second', "dateCreated");";


// pg.connect(conString, function(err, client, done) {
//     if (err) {
//         return console.error('error fetching client from pool', err);
//     }

// /////RUN ONCE TO MAKE TABLE/////////////
// // client.query(createTableQuery, function(err, result) {
// //         //call `done()` to release the client back to the pool
// //         done();

// //         if (err) {
// //             return console.error('error running query', err);
// //         }
// //         console.log(result.rows);
// //     });
// ///////////////////////////////

// /////TO INSERT DATA INTO TABLE
// client.query(insertIntoQuery, function(err, result) {
//         //call `done()` to release the client back to the pool
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//         else{
//          console.log(result.rows);
//         }
//      });

// //////TO GET ALL READINGS IN TABLE ////////////////////
// client.query(query, function(err, result) {
//         //call `done()` to release the client back to the pool
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//         else{
//          console.log(result.rows);
//         }
//      });

// ////TO GROUP BY AMOUNT OF LIGHT in order to color code by light, groups are: 
// //night, nearly dark, dusk, very dim, dim, light, bright & very bright/////

// client.query(queryNight, function(err, result) {
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//        else{
//          console.log(result.rows);
//         }
//     });

// client.query(queryNearlyDark, function(err, result) {
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//        else{
//          console.log(result.rows);
//         }
//     });

// client.query(queryDusk, function(err, result) {
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//        else{
//          console.log(result.rows);
//         }
//     });

// client.query(queryVeryDim, function(err, result) {
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//        else{
//          console.log(result.rows);
//         }
//     });

// client.query(queryDim, function(err, result) {
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//        else{
//          console.log(result.rows);
//         }
//     });

// client.query(queryLight, function(err, result) {
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//        // else{
//        //   console.log(result.rows);
//        //  }
//     });

// client.query(queryBright, function(err, result) {
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//        else{
//          console.log(result.rows);
//         }
//     });

// client.query(queryVeryBright, function(err, result) {
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//        else{
//          console.log(result.rows);
//         }
//     });
// //////TO GET HIGHEST READING
// client.query(queryHighest, function(err, result) {
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//        else{
//          console.log(result.rows);
//         }
//     });


// //////////TO GET ALL TIMES IN DAY THAT READING IS 800 OR HIGHER
// client.query(queryHigh, function(err, result) {
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//        else{
//          console.log(result.rows);
//         }
//     });


// ///////TO COUNT TOTAL NUMBER OF TIMES LIGHT IS 800 OR HIGHER 
// client.query(queryLong, function(err, result) {
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//        else{
//          console.log(result.rows);
//         }
//     });



//   });
// }).on("release", function() {
//       photoresistor.off();
//     });
// });


