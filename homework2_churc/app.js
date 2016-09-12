//test app2 works to get information from the detailsBox but not getting the address information through the 
//table width=100% attribute. Tried many approaches / read up on jquery and node to see if I could work this out. Learnt a lot 
//in the process but unfortunately did not work out how to get the address information.
//Look forward to finding out in class where I am going wrong and hope to connect with Priyal this week to improve my basic node
//understanding

var fs = require('fs');
var cheerio = require('cheerio');
//var request = require('request');
//var addresses = [];

// Print to file: street address for every meeting in 1 text file

var content = fs.readFileSync('/home/ubuntu/workspace/data/1.txt');

 var $ = cheerio.load(content);

    $('table[width="100%"]').each(function(i, elem) {
       $(elem).next().find('tbody').each(function(i, elem) {
            $(elem).next().find('tr').each(function(i, elem) {
                    $(elem).next().find('td').each(function(i, elem) {
                        if ($(elem).text()) {
               //       var address = $(this).attr();
               //         addresses.push(address);
                          console.log($(elem).text());
                    fs.writeFileSync('/home/ubuntu/workspace/data/1address.txt', $(elem).text());
                   }
});
});
});
});
