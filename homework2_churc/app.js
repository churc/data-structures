var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
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
