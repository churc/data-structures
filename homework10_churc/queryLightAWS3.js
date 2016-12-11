///FINAL FOR ALL AWS PHOTOCELL SENSOR LIGHT QUERIES
////week 10 query AWS db and return info to server
//think about what you return to be useable for the visualization
//also log sketches, data and result on github
///run this with server 
//////NOTE THIS IS GMT 

var pg = require('pg');
var http = require('http');

// connection string

var un = 'clare'; // aws db username
var pw = 'password'; // aws db password
var db = 'lightplant'; // aws db database name
var ep = 'lightplant.cj0jcdtzkz1u.us-west-2.rds.amazonaws.com:5432'; // aws db endpoint
var conString = "postgres://" + un + ":" + pw + "@" + ep + "/" + db; // console.log(conString);


////READINGS IN GMT not EST
///highest reading for each day and for each window between 6.30am - 6.30pm 
var queryHght04 = "SELECT * FROM lightP AS hght WHERE dateCreated >= '2016-12-05 11:30:00' AND dateCreated <'2016-12-05 23:30:00' AND windowNo ='1' ORDER BY reading DESC LIMIT 1;";
var queryHght05 = "SELECT * FROM lightP AS hght WHERE dateCreated >= '2016-12-05 11:30:00' AND dateCreated <'2016-12-05 23:30:00' AND windowNo ='2' ORDER BY reading DESC LIMIT 1;";
var queryHght06 = "SELECT * FROM lightP AS hght WHERE dateCreated >= '2016-12-07 11:30:00' AND dateCreated <'2016-12-07 23:30:00' AND windowNo ='1' ORDER BY reading DESC LIMIT 1;";
var queryHght07 = "SELECT * FROM lightP AS hght WHERE dateCreated >= '2016-12-07 11:30:00' AND dateCreated <'2016-12-07 23:30:00' AND windowNo ='2' ORDER BY reading DESC LIMIT 1;";


/////FOR CIRCULAR CHARTS: readings grouped into brightness for Dec 5 - these will each be color coded to read differently on circular chart
var queryNight = "SELECT windowNo, reading, EXTRACT(HOUR from dateCreated) as hr, EXTRACT(MINUTE from dateCreated) as min  FROM lightP AS nt WHERE dateCreated >= '2016-12-05 11:30:00' AND dateCreated <'2016-12-05 23:30:00' AND reading < 50 ORDER BY dateCreated;";
var queryNearlyDark = "SELECT windowNo, reading, EXTRACT(HOUR from dateCreated) as hr, EXTRACT(MINUTE from dateCreated) as min  FROM lightP AS nd WHERE dateCreated >= '2016-12-05 11:30:00' AND dateCreated <'2016-12-05 23:30:00' AND reading > 50 AND reading < 200 ORDER BY dateCreated;";
var queryDusk = "SELECT windowNo, reading, EXTRACT(HOUR from dateCreated) as hr, EXTRACT(MINUTE from dateCreated) as min  FROM lightP AS dk WHERE dateCreated >= '2016-12-05 11:30:00' AND dateCreated <'2016-12-05 23:30:00' AND reading > 200  AND reading < 350 ORDER BY dateCreated;";
var queryVeryDim = "SELECT windowNo, reading, EXTRACT(HOUR from dateCreated) as hr, EXTRACT(MINUTE from dateCreated) as min FROM lightP AS vd WHERE dateCreated >= '2016-12-05 11:30:00' AND dateCreated <='2016-12-05 23:30:00' AND reading > 350 AND reading < 500 ORDER BY dateCreated;";
var queryDim = "SELECT windowNo, reading, EXTRACT(HOUR from dateCreated) as hr, EXTRACT(MINUTE from dateCreated) as min  FROM lightP AS dm WHERE dateCreated >= '2016-12-05 11:30:00' AND dateCreated <'2016-12-05 23:30:00' AND reading > 500 AND reading < 650 ORDER BY dateCreated;";
var queryLight = "SELECT  windowNo, reading FROM lightP AS lr WHERE dateCreated >= '2016-12-05 11:30:00' AND dateCreated <'2016-12-05 23:30:00' AND reading > 650 AND reading < 800 ORDER BY dateCreated;";
var queryBright = "SELECT windowNo, reading, EXTRACT(HOUR from dateCreated) as hr, EXTRACT(MINUTE from dateCreated) as min  FROM lightP AS bt WHERE dateCreated >= '2016-12-05 11:30:00' AND dateCreated <'2016-12-05 23:30:00' AND reading > 800 AND reading < 950 ORDER BY dateCreated;";
var queryVeryBright = "SELECT windowNo, reading, EXTRACT(HOUR from dateCreated) as hr, EXTRACT(MINUTE from dateCreated) as min  FROM lightP AS vb WHERE dateCreated >= '2016-12-05 11:30:00' AND dateCreated <'2016-12-05 23:30:00' AND reading >= 950 ORDER BY dateCreated;";

///FOR CIRCULAR CHARTS: readings grouped into brightness for Dec 7 - these will each be color coded to read differently on circular chart
var queryNight07 = "SELECT windowNo, reading, EXTRACT(HOUR from dateCreated) as hr, EXTRACT(MINUTE from dateCreated) as min FROM lightP AS nt WHERE dateCreated >= '2016-12-07 11:30:00' AND dateCreated <'2016-12-07 23:30:00' AND reading < 50 ORDER BY dateCreated;";
var queryNearlyDark07 = "SELECT windowNo, reading, EXTRACT(HOUR from dateCreated) as hr, EXTRACT(MINUTE from dateCreated) as min FROM lightP AS nd WHERE dateCreated >= '2016-12-07 11:30:00' AND dateCreated <'2016-12-07 23:30:00' AND reading > 50 AND reading < 200 ORDER BY dateCreated;";
var queryDusk07 = "SELECT windowNo, reading, EXTRACT(HOUR from dateCreated) as hr, EXTRACT(MINUTE from dateCreated) as min FROM lightP AS dk WHERE dateCreated >= '2016-12-07 11:30:00' AND dateCreated <'2016-12-07 23:30:00' AND reading > 200  AND reading < 350 ORDER BY dateCreated;";
var queryVeryDim07 = "SELECT windowNo, reading, EXTRACT(HOUR from dateCreated) as hr, EXTRACT(MINUTE from dateCreated) as min FROM lightP AS vd WHERE dateCreated >= '2016-12-07 11:30:00' AND dateCreated <'2016-12-07 23:30:00' AND reading > 350 AND reading < 500 ORDER BY dateCreated;";
var queryDim07 = "SELECT windowNo, reading, EXTRACT(HOUR from dateCreated) as hr, EXTRACT(MINUTE from dateCreated) as min FROM lightP AS vb WHERE dateCreated >= '2016-12-07 11:30:00' AND dateCreated <'2016-12-07 23:30:00' AND reading > 500 AND reading < 650  ORDER BY dateCreated;";
var queryLight07 = "SELECT windowNo, reading, EXTRACT(HOUR from dateCreated) as hr, EXTRACT(MINUTE from dateCreated) as min FROM lightP AS lr WHERE dateCreated >= '2016-12-07 11:30:00' AND dateCreated <'2016-12-07 23:30:00' AND reading > 650 AND reading < 800 ORDER BY dateCreated;";
var queryBright07 = "SELECT windowNo, reading, EXTRACT(HOUR from dateCreated) as hr, EXTRACT(MINUTE from dateCreated) as min FROM lightP AS bt WHERE dateCreated >= '2016-12-07 11:30:00' AND dateCreated <'2016-12-07 23:30:00' AND reading > 800 AND reading < 950 ORDER BY dateCreated;";
var queryVeryBright07 = "SELECT windowNo, reading, EXTRACT(HOUR from dateCreated) as hr, EXTRACT(MINUTE from dateCreated) as min FROM lightP AS vb WHERE dateCreated >= '2016-12-07 11:30:00' AND dateCreated <'2016-12-07 23:30:00' AND reading >= 950 ORDER BY dateCreated;";


/////Dec 5 all readings over 650 brightness (good for plants) in descending order of reading
var queryHigh = "SELECT * FROM lightP AS hgh WHERE dateCreated >= '2016-12-05 11:30:00' AND dateCreated <'2016-12-05 23:30:00' AND reading >= 650 ORDER BY reading DESC;";
/////Dec 5 all readings over 650 brightness (good for plants) in order by windowNo
var queryLong = "SELECT windowNo, COUNT (reading) FROM lightP AS run_ct WHERE dateCreated >= '2016-12-05 11:30:00' AND dateCreated <'2016-12-05 23:30:00' AND reading >= 650 GROUP BY windowNo;";

////December 5 all readings - date time stamp simplified into hours and mins (UTC) ordered by reading
var queryLong1 = "SELECT windowNo, reading, EXTRACT(HOUR from dateCreated) as hr, EXTRACT(MINUTE from dateCreated) as min FROM lightP AS long2 WHERE dateCreated >= '2016-12-05 11:30:00' AND dateCreated <'2016-12-05 23:30:00' AND reading <= 1100 ORDER BY reading;";
////December 7 all readings - date time stamp simplified into hours and mins (UTC)
var queryLong2 = "SELECT windowNo, reading, EXTRACT(HOUR from dateCreated) as hr, EXTRACT(MINUTE from dateCreated) as min FROM lightP AS long2 WHERE dateCreated >= '2016-12-07 11:30:00' AND dateCreated <'2016-12-07 23:30:00' AND reading <= 1100 ORDER BY reading;";
////December 5 all readings - date time stamp simplified into hours and mins (UTC) ordered by time
var queryLong3 = "SELECT windowNo, reading, EXTRACT(HOUR from dateCreated) as hr, EXTRACT(MINUTE from dateCreated) as min FROM lightP AS long3 WHERE dateCreated >= '2016-12-05 11:30:00' AND dateCreated <'2016-12-05 23:30:00' AND windowNo = '2' AND reading >= 650 ORDER BY hr;";
////December 7 all readings - date time stamp simplified into hours and mins (UTC) ordered by time
var queryLong4 = "SELECT windowNo, reading, EXTRACT(HOUR from dateCreated) as hr, EXTRACT(MINUTE from dateCreated) as min FROM lightP AS long3 WHERE dateCreated >= '2016-12-07 11:30:00' AND dateCreated <'2016-12-07 23:30:00' AND windowNo = '2' AND reading >= 650 ORDER BY hr;";

////December 5 all readings - date time stamp simplified into hours and mins (UTC) ordered by time
var queryrdgs05 = "SELECT windowNo, reading, EXTRACT(HOUR from dateCreated) as hr, EXTRACT(MINUTE from dateCreated) as min FROM lightP AS dy WHERE dateCreated >='2016-12-05 11:30:00' AND dateCreated <'2016-12-05 23:30:00' AND reading <= 650 ORDER BY hr;";
////December 7 all readings - date time stamp simplified into hours and mins (UTC) ordered by time
var queryrdgs07 = "SELECT windowNo, reading, EXTRACT(HOUR from dateCreated) as hr, EXTRACT(MINUTE from dateCreated) as min FROM lightP AS dy WHERE dateCreated >='2016-12-07 11:30:00' AND dateCreated <'2016-12-07 23:30:00' AND reading <= 650 ORDER BY hr;";

var server = http.createServer(function(req, res) {

    pg.connect(conString, function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }


        ////TO GET HIGHEST READING on DEC 5 for window 1
        client.query(queryHght04, function(err, result) {
            //call `done()` to release the client back to the pool
            done();

            if (err) {
                return console.error('error running query', err);
            }
            else {
                console.log(result.rows);
            }
            //  });

            ////TO GET HIGHEST READING on DEC 5 for window 2 
            client.query(queryHght05, function(err, result) {
                //call `done()` to release the client back to the pool
                done();

                if (err) {
                    return console.error('error running query', err);
                }
                else {
                    console.log(result.rows);
                }
                //  });    

                ////TO GET HIGHEST READING on DEC 7 for window 1
                client.query(queryHght06, function(err, result) {
                    //call `done()` to release the client back to the pool
                    done();

                    if (err) {
                        return console.error('error running query', err);
                    }
                    else {
                        console.log(result.rows);
                    }
                    //  });      

                    ////TO GET HIGHEST READING on DEC 7 for window 2
                    client.query(queryHght07, function(err, result) {
                        //call `done()` to release the client back to the pool
                        done();

                        if (err) {
                            return console.error('error running query', err);
                        }
                        else {
                            console.log(result.rows);
                        }
                        //  });

                        //TO GROUP BY AMOUNT OF LIGHT in order to color code by light, groups are: 
                        //night, nearly dark, dusk, very dim, dim, light, bright & very bright/////
                        //ALL FOR DEC 5
                        client.query(queryNight, function(err, result) {
                            done();

                            if (err) {
                                return console.error('error running query', err);
                            }
                            else {
                                console.log(result.rows);
                            }
                            //  });

                            client.query(queryNearlyDark, function(err, result) {
                                done();

                                if (err) {
                                    return console.error('error running query', err);
                                }
                                else {
                                    console.log(result.rows);
                                }
                                // });

                                client.query(queryDusk, function(err, result) {
                                    done();

                                    if (err) {
                                        return console.error('error running query', err);
                                    }
                                    else {
                                        console.log(result.rows);
                                    }
                                    //  });

                                    client.query(queryVeryDim, function(err, result) {
                                        done();

                                        if (err) {
                                            return console.error('error running query', err);
                                        }
                                        else {
                                            console.log(result.rows);
                                        }
                                        // });

                                        client.query(queryDim, function(err, result) {
                                            done();

                                            if (err) {
                                                return console.error('error running query', err);
                                            }
                                            else {
                                                console.log(result.rows);
                                            }
                                            // });

                                            client.query(queryLight, function(err, result) {
                                                done();

                                                if (err) {
                                                    return console.error('error running query', err);
                                                }
                                                else {
                                                    console.log(result.rows);
                                                }
                                                // });

                                                client.query(queryBright, function(err, result) {
                                                    done();

                                                    if (err) {
                                                        return console.error('error running query', err);
                                                    }
                                                    else {
                                                        console.log(result.rows);
                                                    }
                                                    // });

                                                    client.query(queryVeryBright, function(err, result) {
                                                        done();

                                                        if (err) {
                                                            return console.error('error running query', err);
                                                        }
                                                        else {
                                                            console.log(result.rows);
                                                        }
                                                        //});


                                                        ////////////////////FOR DEC 7 GROUPED READINGS - THESE ARE FOR CIRCULAR CHARTS
                                                        client.query(queryNight07, function(err, result) {
                                                            done();

                                                            if (err) {
                                                                return console.error('error running query', err);
                                                            }
                                                            else {
                                                                console.log(result.rows);
                                                            }
                                                            //  });

                                                            client.query(queryNearlyDark07, function(err, result) {
                                                                done();

                                                                if (err) {
                                                                    return console.error('error running query', err);
                                                                }
                                                                else {
                                                                    console.log(result.rows);
                                                                }
                                                                // });

                                                                client.query(queryDusk07, function(err, result) {
                                                                    done();

                                                                    if (err) {
                                                                        return console.error('error running query', err);
                                                                    }
                                                                    else {
                                                                        console.log(result.rows);
                                                                    }
                                                                    //  });

                                                                    client.query(queryVeryDim07, function(err, result) {
                                                                        done();

                                                                        if (err) {
                                                                            return console.error('error running query', err);
                                                                        }
                                                                        else {
                                                                            console.log(result.rows);
                                                                        }
                                                                        // });

                                                                        client.query(queryDim07, function(err, result) {
                                                                            done();

                                                                            if (err) {
                                                                                return console.error('error running query', err);
                                                                            }
                                                                            else {
                                                                                console.log(result.rows);
                                                                            }
                                                                            //});

                                                                            client.query(queryLight07, function(err, result) {
                                                                                done();

                                                                                if (err) {
                                                                                    return console.error('error running query', err);
                                                                                }
                                                                                else {
                                                                                    console.log(result.rows);
                                                                                }
                                                                                //});

                                                                                client.query(queryBright07, function(err, result) {
                                                                                    done();

                                                                                    if (err) {
                                                                                        return console.error('error running query', err);
                                                                                    }
                                                                                    else {
                                                                                        console.log(result.rows);
                                                                                    }
                                                                                    // });

                                                                                    client.query(queryVeryBright07, function(err, result) {
                                                                                        done();

                                                                                        if (err) {
                                                                                            return console.error('error running query', err);
                                                                                        }
                                                                                        else {
                                                                                            console.log(result.rows);
                                                                                        }
                                                                                        //});



                                                                                        ////////////////////////////////////////////////////
                                                                                        ////////TO GET ALL TIMES IN DAY THAT READING IS 650 OR HIGHER
                                                                                        client.query(queryHigh, function(err, result) {
                                                                                            done();

                                                                                            if (err) {
                                                                                                return console.error('error running query', err);
                                                                                            }
                                                                                            else {
                                                                                                console.log(result.rows);
                                                                                            }
                                                                                            //});


                                                                                            ///////TO COUNT TOTAL NUMBER OF TIMES LIGHT IS 650 OR HIGHER 
                                                                                            client.query(queryLong, function(err, result) {
                                                                                                done();

                                                                                                if (err) {
                                                                                                    return console.error('error running query', err);
                                                                                                }
                                                                                                else {
                                                                                                    console.log(result.rows);
                                                                                                }
                                                                                                // });

                                                                                                //                       /// ///December 5 all readings from 6.30am - 6.30pm in order of reading
                                                                                                client.query(queryLong1, function(err, result) {
                                                                                                    done();

                                                                                                    if (err) {
                                                                                                        return console.error('error running query', err);
                                                                                                    }
                                                                                                    else {
                                                                                                        console.log(result.rows);
                                                                                                    }
                                                                                                    //     //});

                                                                                                    / / //December 7 all readings from 6.30am - 6.30pm in order of reading
                                                                                                    client.query(queryLong2, function(err, result) {
                                                                                                        done();

                                                                                                        if (err) {
                                                                                                            return console.error('error running query', err);
                                                                                                        }
                                                                                                        else {
                                                                                                            console.log(result.rows);
                                                                                                        }
                                                                                                        //     //});

                                                                                                        ////December 5 number of times where light is 650 and over ordered by hr   
                                                                                                        client.query(queryLong3, function(err, result) {
                                                                                                            done();

                                                                                                            if (err) {
                                                                                                                return console.error('error running query', err);
                                                                                                            }
                                                                                                            else {
                                                                                                                console.log(result.rows);
                                                                                                            }
                                                                                                            // });

                                                                                                            ////December 7 number of times where light is 650 and over ordered by hr      
                                                                                                            client.query(queryLong4, function(err, result) {
                                                                                                                done();

                                                                                                                if (err) {
                                                                                                                    return console.error('error running query', err);
                                                                                                                }
                                                                                                                else {
                                                                                                                    console.log(result.rows);
                                                                                                                }
                                                                                                                //     //});

                                                                                                                ///December 5 all readings from 6.30am - 6.30pm ordered by time of day
                                                                                                                client.query(queryrdgs05, function(err, result) {
                                                                                                                    done();

                                                                                                                    if (err) {
                                                                                                                        return console.error('error running query', err);
                                                                                                                    }
                                                                                                                    else {
                                                                                                                        console.log(result.rows);
                                                                                                                    }
                                                                                                                    // });

                                                                                                                    ///December 7 all readings from 6.30am - 6.30pm ordered by time of day
                                                                                                                    client.query(queryrdgs07, function(err, result) {
                                                                                                                        done();

                                                                                                                        if (err) {
                                                                                                                            return console.error('error running query', err);
                                                                                                                        }
                                                                                                                        else {
                                                                                                                            console.log(result.rows);
                                                                                                                        }
                                                                                                                        // });



                                                                                                                        res.writeHead(200, {
                                                                                                                            'content-type': 'application/json'
                                                                                                                        });
                                                                                                                        res.end(JSON.stringify(result.rows), null, 4);

                                                                                                                        console.log(result.rows);
                                                                                                                    });
                                                                                                                });
                                                                                                            });
                                                                                                        });
                                                                                                    });
                                                                                                });
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
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

// server.listen(process.env.PORT);