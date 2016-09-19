// building on homework 2 example - saved data into new text file 
//this takes out commas and adds in +

  var fs = require('fs');
  var cheerio = require('cheerio');
  var async = require('async');
  var request = require ('request');

 var x = ["20 Cardinal Hayes Place, Rectory Basement,","20 Cardinal Hayes Place, Enter through driveway behind Church.,","29 Mott Street, Basement,","49 Fulton Street, 1st Floor Library,","44 John Street,","49 Fulton Street,","20 Cardinal Hayes Place, Enter thru driveway behind Church.,","22 Barclay Street,","20 Cardinal Hayes Place, Enter thru driveway behind Church.,","22 Barclay Street (Basement),","283 West Broadway,","125 Barclay Street,","49 Fulton Street, Conference Room #1,","49 Fulton Street,","20 Cardinal Hayes Place, \r\n\t\t\t\t\t\t10007","283 West Broadway,","49 Fulton Street,","22 Barclay Street- basement chapel,","20 Cardinal Hayes Place,","283 West Broadway, \r\n\t\t\t\t\t\t10013","283 West Broadway,","283 W. Broadway,"];

//runs to end of array so item length is 1
//for (var i = 0; i < x.length; i++);

 var x2  = x + ' New York, NY"';
 
 var x3 = x2.replace(/'t',/g,'').replace('10007','').replace('10013','');
 
 var x4 = x3.split(',,').join(',+New York, NY","');

 var x5 = x4.split(' ').join( '+').trim();
 
     console.log(x5);

// ////this works to get 22 addresses
// // var fs = require('fs');
// // var cheerio = require('cheerio');
// // var async = require('async');

// // var content = fs.readFileSync('/home/ubuntu/workspace/101.txt');
// // var addresses = [];
// // var x = [];
// // var $ = cheerio.load(content);

// // $('tbody').find('tr').each(function(i, elem){
// //         addresses.push($(elem).find('td').eq(0).html().split('<br>')[2].trim());
        
//     });


// {
//     console.log(addresses);
//   }
  
// ////////end of works
