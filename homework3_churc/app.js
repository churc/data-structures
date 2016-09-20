// building on homework 2 example - saved data into new text file 
//this takes out commas and adds in +

  var fs = require('fs');
  var cheerio = require('cheerio');
  var async = require('async');
  var request = require ('request');

 //from app2.js - meetingsArray.txt
 var x = ["20 Cardinal Hayes Place","20 Cardinal Hayes Place","29 Mott Street","49 Fulton Street","44 John Street","49 Fulton Street","20 Cardinal Hayes Place","22 Barclay Street","20 Cardinal Hayes Place","22 Barclay Street (Basement)","283 West Broadway","125 Barclay Street","49 Fulton Street","49 Fulton Street","20 Cardinal Hayes Place","283 West Broadway","49 Fulton Street","22 Barclay Street- basement chapel","20 Cardinal Hayes Place","283 West Broadway","283 West Broadway","283 W. Broadway"];

//runs to end of array so item length is 1
//for (var i = 0; i < x.length; i++);


 var x2  = x + ' New York, NY"';
 
//why can't this go first
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

// $(addresses).each(function(i, elem){  
//     addresses.push($(elem));

// for (var i = 0; i < addresses.length; i++)
//  var addresses = x;
//  var x2 = x.substring(0, x.indexOf(','));
//     addresses.push(x2);
//   //var x3 = x + ', New York, NY';
//   //  x.push(x3);
    
//  async.eachSeries(addresses, function(value, callback) {
//   //  addresses.address = value;

    
//     setTimeout(callback, 2000);   
    
// }); 
  
//   {
//     console.log(addresses);
//   }     
        
// var x = addresses;
// //  var addresses2 = addresses.substring(0, addresses.indexOf(','));
// //  addresses.push(addresses2);
// var x3 = x + ', New York, NY';
// x.push(x3);
// //var x4 = x.split(' ');
//.join('+');
// x.push(x4);


  //  setTimeout(callback, 2000);



// //THIS WORKS - 22 - build on this and clean up data

// var fs = require('fs');
// var cheerio = require('cheerio');
// var async = require('async');

// var content = fs.readFileSync('/home/ubuntu/workspace/101.txt');
// var addresses = [];
// var x = [];

// var $ = cheerio.load(content);

// $('tbody').find('tr').each(function(i, elem){
//         addresses.push($(elem).find('td').eq(0).html().split('<br>')[2].trim());
//     });


// async.eachSeries(addresses, function(value, callback) {
//     addresses.address = value;
    
//  setTimeout(callback, 2000);   
    
// });


//  {
//     console.log(addresses);
//  }




// $('tbody').find('tr').each(function(i, elem){
//         addresses.push($(elem).find('td').eq(0).html().split('<br>')[2].trim());
//     });

// for (var i = 0; i < addresses.length; i++) {
//     console.log(addresses[i]);
// }




// //continuing on for hwrk 3

// var fs = require('fs');
// var cheerio = require('cheerio'); // npm install cheerio
// var async = require('async');
// var content = fs.readFileSync('/home/ubuntu/workspace/m02meetings.txt');
// var addresses = [];
// var address5 = [];
// var address =[];

// var $ = cheerio.load(content);

// $('tbody').find('tr').each(function(i, elem){
//         addresses.push($(elem).find('td').eq(0).html().split('<br>')[2].trim());
//     });
    
// //console.log(addresses); 
 
//   for (var i = 0; i < addresses.length; i++) {
//       address.push(addresses[i]
   
// // in each string select from 0 to the first comma
//       .substring(0, address.indexOf(" , ")));
//       //  address.push("address2");  
       
// // in each substring add ', New York, NY'
//   //    var address3 = address2 + ', New York, NY';
// // for each substring split at '' and join with a +
//     //  var address4 = address3.split('').join('+');
//  //  }
//   // address5.push($(address4));
//  // address5.push(address4);
  
  
//   {
//   //  setTimeout(callback, 2000);{
//   console.log(address);
// }






// //continuing on for hwrk 3

// var fs = require('fs');
// var cheerio = require('cheerio'); // npm install cheerio
// var async = require('async');
// var content = fs.readFileSync('/home/ubuntu/workspace/m02meetings.txt');
// var addresses = [];
// var address5 = [];

// var $ = cheerio.load(content);

// $('tbody').find('tr').each(function(i, elem){
//         addresses.push($(elem).find('td').eq(0).html().split('<br>')[2].trim());
//     });
    
// //console.log(addresses); 
 
//   for (var i = 0; i < addresses.length; i++) {
//       var address = addresses[i];
//   }
// // in each string select from 0 to the first comma
//       var address2 = address.substring(0, address.indexOf(" , "));
//       //  address.push("address2");  
       
// // in each substring add ', New York, NY'
//       var address3 = address2 + ', New York, NY';
// // for each substring split at '' and join with a +
//       var address4 = address3.split('').join('+');
//  //  }
//   // address5.push($(address4));
//   address5.push(address4);
  
  
//   //  setTimeout(callback, 2000);{
//   console.log(address5);
