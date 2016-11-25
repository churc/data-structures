////week 10 starter code to query AWS db and return info from table
///USE THIS VERSION FOR ALL AWS QUERIES

var pg = require('pg');
var http = require('http');

// connection string
// var un = ''; // aws db username
// var pw = ''; // aws db password
// var db = ''; // aws db database name
// var ep = ''; // aws db endpoint
// var conString = "postgres://" + un + ":" + pw + "@" + ep + "/" + db;

var un = 'clare'; // aws db username
var pw = 'password'; // aws db password
var db = 'lightplant'; // aws db database name
var ep = 'lightplant.cj0jcdtzkz1u.us-west-2.rds.amazonaws.com:5432'; // aws db endpoint
var conString = "postgres://" + un + ":" + pw + "@" + ep + "/" + db;

// console.log(conString);

var queryHght = "SELECT * FROM lightR12 AS hght WHERE dateCreated >= '2016-11-24' ORDER BY reading DESC LIMIT 1;";

var queryNight = "SELECT windowNo, COUNT (reading) FROM lightR12 AS nt WHERE reading < 50 GROUP BY windowNo;";
var queryNearlyDark = "SELECT windowNo, COUNT (reading) FROM lightR12 AS nd WHERE reading > 50 AND reading < 200 GROUP BY windowNo;";
var queryDusk = "SELECT windowNo, COUNT (reading) FROM lightR12 AS dk WHERE reading > 200  AND reading < 350 GROUP BY windowNo;";
var queryVeryDim = "SELECT windowNo, COUNT (reading) FROM lightR12 AS vd WHERE reading > 350 AND reading < 500 GROUP BY windowNo;";
var queryDim = "SELECT windowNo, COUNT (reading) FROM lightR12 AS dm WHERE reading > 500 AND reading < 650 GROUP BY windowNo;";
var queryLight = "SELECT windowNo, COUNT (reading) FROM lightR12 AS lr WHERE reading > 650 AND reading < 800 GROUP BY windowNo;";
var queryBright = "SELECT windowNo, COUNT (reading) FROM lightR12 AS bt WHERE reading > 800 AND reading < 950 GROUP BY windowNo;";
var queryVeryBright = "SELECT windowNo, COUNT (reading) FROM lightR12 AS vb WHERE reading >= 950 GROUP BY windowNo;";

var queryHigh = "SELECT * FROM lightR12 AS hgh WHERE reading >= 800 ORDER BY reading;";
var queryLong = "SELECT windowNo, COUNT (reading) FROM lightR12 AS run_ct WHERE reading >= 800 GROUP BY windowNo;";

///trying to get length of time where light is 800 and over
// var queryLong2 = "SELECT DISTINCT dateCreated >= '2016-11-24' AS long, COUNT (*) OVER (ORDER BY dateCreated_trunc('second', "dateCreated")) AS running_ct FROM lightR WHERE reading > 800 ORDER BY dateCreated_trunc('second', "dateCreated");";

var queryLong2 = "SELECT * FROM lightR12 AS long WHERE reading >= 800 ORDER BY dateCreated;";

//var queryLong2 = "SELECT DISTINCT dateCreated >= '2016-11-24' AS long, COUNT (*) OVER (ORDER BY dateCreated_trunc('second', "dateCreated")) AS running_ct FROM lightR WHERE reading > 800 ORDER BY dateCreated_trunc('second', "dateCreated");";


var server = http.createServer(function(req, res) {

    pg.connect(conString, function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }


////TO GET HIGHEST READING
        client.query(queryHght, function(err, result) {
            //call `done()` to release the client back to the pool
            done();
    
            if (err) {
                return console.error('error running query', err);
            }
        


        
//TO GROUP BY AMOUNT OF LIGHT in order to color code by light, groups are: 
//night, nearly dark, dusk, very dim, dim, light, bright & very bright/////

client.query(queryNight, function(err, result) {
        done();

        if (err) {
            return console.error('error running query', err);
        }
        else{
         console.log(result.rows);
        }
    });

client.query(queryNearlyDark, function(err, result) {
        done();

        if (err) {
            return console.error('error running query', err);
        }
        else{
         console.log(result.rows);
        }
    });

client.query(queryDusk, function(err, result) {
        done();

        if (err) {
            return console.error('error running query', err);
        }
        else{
         console.log(result.rows);
        }
    });

client.query(queryVeryDim, function(err, result) {
        done();

        if (err) {
            return console.error('error running query', err);
        }
        else{
         console.log(result.rows);
        }
    });

client.query(queryDim, function(err, result) {
        done();

        if (err) {
            return console.error('error running query', err);
        }
        else{
         console.log(result.rows);
        }
    });

client.query(queryLight, function(err, result) {
        done();

        if (err) {
            return console.error('error running query', err);
        }
        // else{
        //   console.log(result.rows);
        //  }
    });

client.query(queryBright, function(err, result) {
        done();

        if (err) {
            return console.error('error running query', err);
        }
        else{
         console.log(result.rows);
        }
    });

client.query(queryVeryBright, function(err, result) {
        done();

        if (err) {
            return console.error('error running query', err);
        }
        else{
         console.log(result.rows);
        }
    });
    



//////////TO GET ALL TIMES IN DAY THAT READING IS 800 OR HIGHER
client.query(queryHigh, function(err, result) {
        done();

        if (err) {
            return console.error('error running query', err);
        }
        else{
         console.log(result.rows);
        }
    });


///////TO COUNT TOTAL NUMBER OF TIMES LIGHT IS 800 OR HIGHER 
client.query(queryLong, function(err, result) {
        done();

        if (err) {
            return console.error('error running query', err);
        }
        else{
         console.log(result.rows);
        }
    });
 
/// ///trying to get length of time where light is 800 and over  
    client.query(queryLong2, function(err, result) {
        done();

        if (err) {
            return console.error('error running query', err);
        }
        else{
         console.log(result.rows);
        }
    });

        
 
            res.writeHead(200, {'content-type': 'application/json'});
            res.end(JSON.stringify(result.rows));

        }); // client.query

    }); // pg.connect

}); // server

server.listen(process.env.PORT);




// // ////week 10 starter code to query AWS db and return info from table

// // var pg = require('pg');
// // var http = require('http');

// // // connection string
// // // var un = ''; // aws db username
// // // var pw = ''; // aws db password
// // // var db = ''; // aws db database name
// // // var ep = ''; // aws db endpoint
// // // var conString = "postgres://" + un + ":" + pw + "@" + ep + "/" + db;

// // var un = 'clare'; // aws db username
// // var pw = 'password'; // aws db password
// // var db = 'lightplant'; // aws db database name
// // var ep = 'lightplant.cj0jcdtzkz1u.us-west-2.rds.amazonaws.com:5432'; // aws db endpoint
// // var conString = "postgres://" + un + ":" + pw + "@" + ep + "/" + db;

// // // console.log(conString);

// // //var query = "SELECT avg(amount) as avgAmount, EXTRACT(DOW from dateCreated) as dow FROM wham WHERE dateCreated >= '2016-10-31' GROUP BY dow ORDER BY dow;";
// // var queryHighest = "SELECT * FROM lightR12 AS hght WHERE dateCreated >= '2016-11-24' ORDER BY reading DESC LIMIT 1;";

// // var server = http.createServer(function(req, res) {

// //     pg.connect(conString, function(err, client, done) {
// //         if (err) {
// //             return console.error('error fetching client from pool', err);
// //         }
    
// //         client.query(queryHighest, function(err, result) {
// //             //call `done()` to release the client back to the pool
// //             done();
    
// //             if (err) {
// //                 return console.error('error running query', err);
// //             }
            
// //             res.writeHead(200, {'content-type': 'application/json'});
// //             res.end(JSON.stringify(result.rows));

// //         }); // client.query

// //     }); // pg.connect

// // }); // server

// // server.listen(process.env.PORT);
