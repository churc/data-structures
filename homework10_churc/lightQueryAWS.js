////week 10 starter code to query AWS db and return info from table

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

var queryHighest = "SELECT * FROM lightR12 AS hght WHERE dateCreated >= '2016-11-24' ORDER BY reading DESC LIMIT 1;";

var server = http.createServer(function(req, res) {

    pg.connect(conString, function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
    
        client.query(queryHighest, function(err, result) {
            //call `done()` to release the client back to the pool
            done();
    
            if (err) {
                return console.error('error running query', err);
            }
            
            res.writeHead(200, {'content-type': 'application/json'});
            res.end(JSON.stringify(result.rows));

        }); // client.query

    }); // pg.connect

}); // server

server.listen(process.env.PORT);