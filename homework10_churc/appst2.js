//assignment 9 - writing to db///THIS WORKS TO GET 2 READINGS - CHECKING WITH appst3.js TO MAKE SURE
//THIS IS READING ACCURATELY
//querying the db to group light readings for color coding in timeline
//find time of highest reading 
//find times that reading is above 800 during the day
//compute length of time that reading is above 800

var pg = require('pg');
var five = require("johnny-five"), board, photoresistor;


// connection string
var un = 'clare'; // aws db username
var pw = 'password'; // aws db password
var db = 'lightplant'; // aws db database name
var ep = 'lightplant.cj0jcdtzkz1u.us-west-2.rds.amazonaws.com:5432'; // aws db endpoint
var conString = "postgres://" + un + ":" + pw + "@" + ep + "/" + db;

var createTableQuery = "CREATE TABLE lightR (windowNo smallint NOT NULL, reading smallint NOT NULL, dateCreated timestamp DEFAULT current_timestamp NOT NULL);";

board = new five.Board();

//new five.Sensor([ { pin: "A0" }, { pin: "A2" } ]);


//var boards = new five.Boards(["A", "B"]);


//boards = new five.Boards("A", "B","C");

//new five.Boards([ "A", "B" ]).on("ready", function() {
  


// var photoresistorA = new five.Sensor({pin: "A0"});
// var photoresistorB = new five.Sensor({pin: "A2"});



board.on("ready", function() {
// Create a new `photoresistor` hardware instance.
  photoresistor1 = new five.Sensor({
    pin: "A0",
    freq: 10000
  });

  photoresistor2 = new five.Sensor({
    pin: "A2",
    freq: 10000
  });

// if ("pin: A0"){
//    console.log("A val:" + this.value);
//    }
// else ("pin: A2"){  
//    console.log("B val:" + this.value);
//    };

//      board.on("ready", function(){
//     photoresistor = new five.Sensor({
//         if (pin = "A0"){
//     pin: "A0",
//     freq: 10000
//     console.log((this.value)[0]);
//   };

//     else if (pin = "A2"){  
//     pin: "A2",
//     freq: 10000
//     console.log((this.value)[1]);
//     }:
// });
//     board.on("ready", function(){
//         if (pin === "A0"){
//     photoresistor = new five.Sensors({
//     pin: "A0",
//     freq: 10000
//   });

//     //"A0" return this.value[0];
//     console.log((this.value)[0]);
// }

//  if (pin === "A2"){
//      photoresistor = new five.Sensors({
//     pin: "A2",
//     freq: 10000
//   });
//    // "A2" return this.value[1];
//     console.log((this.value)[1]);
// }


// // Create a new `photoresistor` hardware instance for each board.
//     if (pin.id === "A0") {
//     photoresistor = new five.Sensor({
//     pin: "A0",
//     freq: 10000
//    // board: this.byId("A")
//   });
//     return this.value[0];
//     console.log(this.value[0]);
// }
//     if (pin.id === "A2") {
//     photoresistor = new five.Sensor({
//     pin: "A2",
//     freq: 10000
//    // board: this.byId("B")
//   });
//     return this.value[1];
//     console.log(this.value[1]);
// }

// else if(board.io.firmware.name == "BoardC.ino"){
//     photoresistor = new five.Sensor({
//     pin: "A4",
//     freq: 10000
//   });
//     return this.value(3);
// }

// Inject the `sensor` hardware into the Repl instance's context;
// allows direct command line access
  board.repl.inject({
    pot: photoresistor
  });
//this is for one
//photoresistor.on("data", function() {

///this is my try at two
// photoresistor.on("data", function(){
//     if (pin = "A0"){
//     console.log("Window 1:" + this.value);
//    }
//    else if (pin = "A2"){  
//    console.log("Window 2:" + this.value);
//    }

photoresistor1.on("data", function(){
    console.log("Window 1:" + this.value);
 
 photoresistor2.on("data", function(){
    console.log("Window 2:" + this.value);


//console.log(this.value);

// photoresistorA.on("data", function(){
//     console.log("A val:" + this.value);
// });

// photoresistorB.on("data", function(){
//     console.log("B val:" + this.value);
// });


// "data" get the current reading from the photoresistor
  //photoresistor.on("data", function() {

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
       // else if (this.value < 650) {
       //  console.log("Window 1," + "  Dim, " + this.value + ", " + new Date);
       // }
     //  else if (this.value < 800) {
     //    console.log("Window 1," + "  Light, " + this.value + ", " + new Date);
     //   }
     //  else if (this.value < 950) {
     //     console.log("Window 1," + "  Bright, " + this.value + ", " + new Date);
     //  }
     //  else if (this.value >= 950) {
     //     console.log("Window 1," + "  Very bright, " + this.value + ", " + new Date);
     // }
  
var insertIntoQuery = "INSERT INTO lightR VALUES (1 , " + this.value + ", DEFAULT);";
var insertIntoQuery = "INSERT INTO lightR VALUES (2 , " + this.value + ", DEFAULT);";

//var insertIntoQuery = "INSERT INTO lightR VALUES (1 , " + "A val:" + "B val:" + this.value + ", DEFAULT);";

//var insertIntoQuery2 = "INSERT INTO lightR VALUES (2 , " + this.value[1] + ", DEFAULT);";

//var insertIntoQuery3 = "INSERT INTO lightR VALUES (3 , " + this.value(3) + ", DEFAULT);";

var query = "SELECT * FROM lightR;";

var queryNight = "SELECT * FROM lightR AS nt WHERE reading < 50 ORDER BY dateCreated;";
var queryNearlyDark = "SELECT * FROM lightR AS nd WHERE reading > 50 AND reading < 200 ORDER BY dateCreated;";
var queryDusk = "SELECT * FROM lightR AS dk WHERE reading > 200  AND reading < 350 ORDER BY dateCreated;";
var queryVeryDim = "SELECT * FROM lightR AS vd WHERE reading > 350 AND reading < 500 ORDER BY dateCreated;";
var queryDim = "SELECT * FROM lightR AS dm WHERE reading > 500 AND reading < 650 ORDER BY dateCreated;";
var queryLight = "SELECT * FROM lightR AS lr WHERE reading > 650 AND reading < 800 ORDER BY dateCreated;";
var queryBright = "SELECT * FROM lightR AS bt WHERE reading > 800 AND reading < 950 ORDER BY dateCreated;";
var queryVeryBright = "SELECT * FROM lightR AS vb WHERE reading >= 950 ORDER BY dateCreated;";

var queryHighest = "SELECT * FROM lightR AS hght ORDER BY reading DESC LIMIT 1;";
var queryHigh = "SELECT * FROM lightR AS hgh WHERE reading >= 800 ORDER BY dateCreated;";
var queryLong = "SELECT windowNo, COUNT (reading) FROM lightR AS running_ct WHERE reading >= 800 GROUP BY windowNo";
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
///////////////////////////////

/////TO INSERT DATA INTO TABLE
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

// client.query(insertIntoQuery2, function(err, result) {
//         //call `done()` to release the client back to the pool
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//         else{
//          console.log(result.rows);
//         }
//      });

// client.query(insertIntoQuery3, function(err, result) {
//         //call `done()` to release the client back to the pool
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//         else{
//          console.log(result.rows);
//         }
//      });

//////TO GET ALL READINGS IN TABLE ////////////////////
client.query(query, function(err, result) {
        //call `done()` to release the client back to the pool
        done();

        if (err) {
            return console.error('error running query', err);
        }
        // else{
        //  console.log(result.rows);
        // }
     });

////TO GROUP BY AMOUNT OF LIGHT in order to color code by light, groups are: 
//night, nearly dark, dusk, very dim, dim, light, bright & very bright/////

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
//        else{
//          console.log(result.rows);
//         }
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


//////////TO GET ALL TIMES IN DAY THAT READING IS 800 OR HIGHER
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

// // var ports = [
// //   { id: "A", port: "/dev/cu.usbmodem1451" },
// //   { id: "B", port: "/dev/cu.usbmodem1411" }
// // ];

// // new five.Boards(ports);

// var boards = new five.Boards(["A", "B"]);


// //boards = new five.Boards("A", "B","C");

// new five.Boards([ "A", "B" ]).on("ready", function() {
//     this.each(function(board){

// // Create a new `photoresistor` hardware instance for each board.
//     if (board.id === "A") {
//     photoresistor = new five.Sensor({
//     pin: "A0",
//     freq: 10000
//    // board: this.byId("A")
//   });
//     return this.value[0];
//     console.log(this.value[0]);
// }
//     if (board.id === "B") {
//     photoresistor = new five.Sensor({
//     pin: "A2",
//     freq: 10000
//    // board: this.byId("B")
//   });
//     return this.value[1];
//     console.log(this.value[1]);
// }

// // else if(board.io.firmware.name == "BoardC.ino"){
// //     photoresistor = new five.Sensor({
// //     pin: "A4",
// //     freq: 10000
// //   });
// //     return this.value(3);
// // }

// // Inject the `sensor` hardware into the Repl instance's context;
// // allows direct command line access
//   boards.repl.inject({
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
  

// var insertIntoQuery1 = "INSERT INTO lightR VALUES (1 , " + this.value[0] + ", DEFAULT);";

// var insertIntoQuery2 = "INSERT INTO lightR VALUES (2 , " + this.value[1] + ", DEFAULT);";

// //var insertIntoQuery3 = "INSERT INTO lightR VALUES (3 , " + this.value(3) + ", DEFAULT);";

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
// client.query(insertIntoQuery1, function(err, result) {
//         //call `done()` to release the client back to the pool
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//         else{
//          console.log(result.rows);
//         }
//      });

// client.query(insertIntoQuery2, function(err, result) {
//         //call `done()` to release the client back to the pool
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//         else{
//          console.log(result.rows);
//         }
//      });

// // client.query(insertIntoQuery3, function(err, result) {
// //         //call `done()` to release the client back to the pool
// //         done();

// //         if (err) {
// //             return console.error('error running query', err);
// //         }
// //         else{
// //          console.log(result.rows);
// //         }
// //      });

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

// // client.query(queryNight, function(err, result) {
// //         done();

// //         if (err) {
// //             return console.error('error running query', err);
// //         }
// //        else{
// //          console.log(result.rows);
// //         }
// //     });

// // client.query(queryNearlyDark, function(err, result) {
// //         done();

// //         if (err) {
// //             return console.error('error running query', err);
// //         }
// //        else{
// //          console.log(result.rows);
// //         }
// //     });

// // client.query(queryDusk, function(err, result) {
// //         done();

// //         if (err) {
// //             return console.error('error running query', err);
// //         }
// //        else{
// //          console.log(result.rows);
// //         }
// //     });

// // client.query(queryVeryDim, function(err, result) {
// //         done();

// //         if (err) {
// //             return console.error('error running query', err);
// //         }
// //        else{
// //          console.log(result.rows);
// //         }
// //     });

// // client.query(queryDim, function(err, result) {
// //         done();

// //         if (err) {
// //             return console.error('error running query', err);
// //         }
// //        else{
// //          console.log(result.rows);
// //         }
// //     });

// // client.query(queryLight, function(err, result) {
// //         done();

// //         if (err) {
// //             return console.error('error running query', err);
// //         }
// //        else{
// //          console.log(result.rows);
// //         }
// //     });

// // client.query(queryBright, function(err, result) {
// //         done();

// //         if (err) {
// //             return console.error('error running query', err);
// //         }
// //        else{
// //          console.log(result.rows);
// //         }
// //     });

// // client.query(queryVeryBright, function(err, result) {
// //         done();

// //         if (err) {
// //             return console.error('error running query', err);
// //         }
// //        else{
// //          console.log(result.rows);
// //         }
// //     });
// // //////TO GET HIGHEST READING
// // client.query(queryHighest, function(err, result) {
// //         done();

// //         if (err) {
// //             return console.error('error running query', err);
// //         }
// //        else{
// //          console.log(result.rows);
// //         }
// //     });


// //////////TO GET ALL TIMES IN DAY THAT READING IS 800 OR HIGHER
// // client.query(queryHigh, function(err, result) {
// //         done();

// //         if (err) {
// //             return console.error('error running query', err);
// //         }
// //        else{
// //          console.log(result.rows);
// //         }
// //     });


// // ///////TO COUNT TOTAL NUMBER OF TIMES LIGHT IS 800 OR HIGHER 
// // client.query(queryLong, function(err, result) {
// //         done();

// //         if (err) {
// //             return console.error('error running query', err);
// //         }
// //        else{
// //          console.log(result.rows);
// //         }
// //     });



//   });
// }).on("release", function() {
//       photoresistor.off();
//     });
// });
// });



















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

// var ports = [
//   { id: "A", port: "/dev/cu.usbmodem621" },
//   { id: "B", port: "/dev/cu.usbmodem411" }
// ];

// boards = new five.Board("A", "B");

// //boards = new five.Boards("A", "B","C");

// boards.on("ready", function() {
//     this.each(function(boards){

// // Create a new `photoresistor` hardware instance for each board.
// if(board.io.firmware.name == "BoardA.ino"){
//     photoresistor = new five.Sensor({
//     pin: "A0",
//     freq: 10000
//   });
//     return this.value(1);
// }
// else if(board.io.firmware.name == "BoardB.ino"){
//     photoresistor = new five.Sensor({
//     pin: "A2",
//     freq: 10000
//   });
//     return this.value(2);
// }
// // else if(board.io.firmware.name == "BoardC.ino"){
// //     photoresistor = new five.Sensor({
// //     pin: "A4",
// //     freq: 10000
// //   });
// //     return this.value(3);
// // }

// // Inject the `sensor` hardware into the Repl instance's context;
// // allows direct command line access
//   boards.repl.inject({
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
  

// var insertIntoQuery1 = "INSERT INTO lightR VALUES (1 , " + this.value(1) + ", DEFAULT);";

// var insertIntoQuery2 = "INSERT INTO lightR VALUES (2 , " + this.value(2) + ", DEFAULT);";

// //var insertIntoQuery3 = "INSERT INTO lightR VALUES (3 , " + this.value(3) + ", DEFAULT);";

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
// client.query(insertIntoQuery1, function(err, result) {
//         //call `done()` to release the client back to the pool
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//         else{
//          console.log(result.rows);
//         }
//      });

// client.query(insertIntoQuery2, function(err, result) {
//         //call `done()` to release the client back to the pool
//         done();

//         if (err) {
//             return console.error('error running query', err);
//         }
//         else{
//          console.log(result.rows);
//         }
//      });

// // client.query(insertIntoQuery3, function(err, result) {
// //         //call `done()` to release the client back to the pool
// //         done();

// //         if (err) {
// //             return console.error('error running query', err);
// //         }
// //         else{
// //          console.log(result.rows);
// //         }
// //      });

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

// // client.query(queryNight, function(err, result) {
// //         done();

// //         if (err) {
// //             return console.error('error running query', err);
// //         }
// //        else{
// //          console.log(result.rows);
// //         }
// //     });

// // client.query(queryNearlyDark, function(err, result) {
// //         done();

// //         if (err) {
// //             return console.error('error running query', err);
// //         }
// //        else{
// //          console.log(result.rows);
// //         }
// //     });

// // client.query(queryDusk, function(err, result) {
// //         done();

// //         if (err) {
// //             return console.error('error running query', err);
// //         }
// //        else{
// //          console.log(result.rows);
// //         }
// //     });

// // client.query(queryVeryDim, function(err, result) {
// //         done();

// //         if (err) {
// //             return console.error('error running query', err);
// //         }
// //        else{
// //          console.log(result.rows);
// //         }
// //     });

// // client.query(queryDim, function(err, result) {
// //         done();

// //         if (err) {
// //             return console.error('error running query', err);
// //         }
// //        else{
// //          console.log(result.rows);
// //         }
// //     });

// // client.query(queryLight, function(err, result) {
// //         done();

// //         if (err) {
// //             return console.error('error running query', err);
// //         }
// //        else{
// //          console.log(result.rows);
// //         }
// //     });

// // client.query(queryBright, function(err, result) {
// //         done();

// //         if (err) {
// //             return console.error('error running query', err);
// //         }
// //        else{
// //          console.log(result.rows);
// //         }
// //     });

// // client.query(queryVeryBright, function(err, result) {
// //         done();

// //         if (err) {
// //             return console.error('error running query', err);
// //         }
// //        else{
// //          console.log(result.rows);
// //         }
// //     });
// // //////TO GET HIGHEST READING
// // client.query(queryHighest, function(err, result) {
// //         done();

// //         if (err) {
// //             return console.error('error running query', err);
// //         }
// //        else{
// //          console.log(result.rows);
// //         }
// //     });


// //////////TO GET ALL TIMES IN DAY THAT READING IS 800 OR HIGHER
// // client.query(queryHigh, function(err, result) {
// //         done();

// //         if (err) {
// //             return console.error('error running query', err);
// //         }
// //        else{
// //          console.log(result.rows);
// //         }
// //     });


// // ///////TO COUNT TOTAL NUMBER OF TIMES LIGHT IS 800 OR HIGHER 
// // client.query(queryLong, function(err, result) {
// //         done();

// //         if (err) {
// //             return console.error('error running query', err);
// //         }
// //        else{
// //          console.log(result.rows);
// //         }
// //     });



//   });
// }).on("release", function() {
//       photoresistor.off();
//     });
// });
// });

