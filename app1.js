//////sends data to terminal 
var pg = require('pg');
var fs = require ('fs');

// connection 
var config = {
un: 'clare', // aws db username
pw: 'password', // aws db password
db: 'lightplant',  // aws db database name
ep:'lightplant.cj0jcdtzkz1u.us-west-2.rds.amazonaws.com:5432', // aws db endpoint
conString: "postgres://" + "un" + ":" + "pw" + "@" + "ep" + "/" + "db",
port: 5432,
max: 100, // max number of clients in the pool 
idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

//var pool = new pg.Pool(config);

var five = require("johnny-five"),
  board, photoresistor;

// pool.connect(function(err, client, done) {
//     if(err) {
//     return console.error('error fetching client from pool', err);
// })


board = new five.Board();

board.on("ready", function() {

  // Create a new `photoresistor` hardware instance.
  photoresistor = new five.Sensor({
    pin: "A2",
    freq: 5000
  });

  // Inject the `sensor` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    pot: photoresistor
  });

  // "data" get the current reading from the photoresistor

 photoresistor.on("data", function() {
      if (this.value < 50) {
      console.log("Window: 1," + "  Night: " + this.value + ", " + new Date);
     
     }
      else if (this.value < 200) {
      console.log("Window: 1," + "  Nearly dark: " + this.value + ", "+ new Date);
     
      }
      else if (this.value < 350) {
      console.log("Window: 1," + "  Dusk: " + this.value + ", " + new Date);
     
      }
      else if (this.value < 500) {
      console.log("Window: 1," + "  Very dim: " + this.value + ", " + new Date);
    
      }
      else if (this.value < 650) {
      console.log("Window: 1," + "  Dim: " + this.value + ", " + new Date);
    
      }
      else if (this.value < 800) {
      console.log("Window: 1," + "  Light: " + this.value + ", " + new Date);
     
      }
      else if (this.value < 950) {
      console.log("Window: 1," + "  Bright: " + this.value + ", " + new Date);
    
      }
      else if (this.value >= 950) {
      console.log("Window: 1," + "  Very bright: " + this.value + ", " + new Date);

      }

 
  });
});


