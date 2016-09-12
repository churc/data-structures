//test: this works to get information in the details box to the console log 
//but only the last line is shown in the text 1address file - tried the var addresses to get 
// all the address information to log 

var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
//var addresses = [];

// Print to file: street address for every meeting in 1 text file

var content = fs.readFileSync('/home/ubuntu/workspace/data/1.txt');

 var $ = cheerio.load(content);

    $('.detailsBox').each(function(i, elem) {
      //  $(elem).next().find('tbody').each(function(i, elem) {
      //      $(elem).next().find('tr').each(function(i, elem) {
       //             $(elem).next().find('td').each(function(i, elem) {
                        if ($(elem).text()) {
                   //     var address = $(this).attr('.detailsBox');
                   //       addresses.push(address);
                          console.log($(elem).text());
                    fs.writeFileSync('/home/ubuntu/workspace/data/1address.txt', $(elem).text());
                   }
//});
//});
//}
});
