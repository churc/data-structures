////aaped_aaron.js: aaron example code to get main information into one - then raw data file parsed 
///see clean_apped_aaron.js
///so note that this loops through all the text and takes out each day
///then next step is to clean up this information - by looping in this code, you don't 
///have to do each day separately, once the text is isolated you can clean it up


var fs = require('fs');
var cheerio = require('cheerio'); // npm install cheerio


var content = fs.readFileSync('/home/ubuntu/workspace/data2/101.txt');
//var content = fs.readFileSync('/home/ubuntu/workspace/data2/102.txt');
//var content = fs.readFileSync('/home/ubuntu/workspace/data2/103.txt');
//var content = fs.readFileSync('/home/ubuntu/workspace/data2/104.txt');
//var content = fs.readFileSync('/home/ubuntu/workspace/data2/105.txt');
//var content = fs.readFileSync('/home/ubuntu/workspace/data2/106.txt');
//var content = fs.readFileSync('/home/ubuntu/workspace/data2/107.txt');
//var content = fs.readFileSync('/home/ubuntu/workspace/data2/108.txt');
//var content = fs.readFileSync('/home/ubuntu/workspace/data2/109.txt');
//var content = fs.readFileSync('/home/ubuntu/workspace/data2/110.txt');

var groups = [];

var $ = cheerio.load(content);

$('tbody').find('tr').each(function(i, elem) {
    var thisMeeting = new Object();
    
//   ///////////PLACE
    thisMeeting.place = $(elem).find('td').find('h4').eq(0).text().replace(/'&apos;'/g, "'").split(',')[0];

//     //////////NAME
    thisMeeting.name = $(elem).find('td').find('b').eq(0).text().replace(/\s+/g, " ").split('-')[0].trim();

//     //////////ADDRESS CLEAN - TO FIRST COMMA, THEN ADD NY NY
    var addressx = $(elem).find('td').eq(0).html().split('<br>')[2].trim().split(',')[0].split('-')[0].trim();
    thisMeeting.address = addressx.concat(", New York, NY");
    
//     /////// DETAILS BOX
  thisMeeting.details = ($(elem).find('td').find('div').eq(0).text().trim().replace(/'<br>'/g, ",").trim().replace(/[*]/g, "").trim().replace(/=/g, ""));

//     ////////  WHEELCHAIR ACCESS
    var access1 = $(elem).find('td').find('span').eq(0).text().trim().split('span');

    if (access1 === "Wheelchair Access") {
        thisMeeting.wheelchairAccess = true;
    }

//////GETS FIRST DAY as object - day, startTime, endTime, mtgType, interest  
        thisMeeting.meetings = $(elem).find('td').eq(1).html().split('<br>'); 

    groups.push(thisMeeting);

});

 console.log(groups);
fs.writeFileSync('raw_groups.txt', JSON.stringify(groups))




// var groups = [];

// var $ = cheerio.load(content);

// $('tbody').find('tr').each(function(i, elem) {
//     var thisMeeting = new Object();
    
//   ///////////PLACE
//     thisMeeting.place = $(elem).find('td').find('h4').eq(0).text().replace(/'&apos;'/g, "'").split(',')[0];

// //     //////////NAME
//     thisMeeting.name = $(elem).find('td').find('b').eq(0).text().replace(/\s+/g, " ").split('-')[0].trim();

// //     //////////ADDRESS CLEAN - TO FIRST COMMA, THEN ADD NY NY
//     var addressx = $(elem).find('td').eq(0).html().split('<br>')[2].trim().split(',')[0].split('-')[0].trim();
//     thisMeeting.address = addressx.concat(", New York, NY");
    
// //     /////// DETAILS BOX
//   thisMeeting.details = ($(elem).find('td').find('div').eq(0).text().trim().replace(/'<br>'/g, ",").trim().replace(/[*]/g, "").trim().replace(/=/g, ""));

// //     ////////  WHEELCHAIR ACCESS
//     var access1 = $(elem).find('td').find('span').eq(0).text().trim().split('span');

//     if (access1 === "Wheelchair Access") {
//         thisMeeting.wheelchairAccess = true;
//     }

// //////GETS FIRST DAY as object - day, startTime, endTime, mtgType, interest  
//         thisMeeting.meetings = $(elem).find('td').eq(1).html().split('<br>'); 

//     groups.push(thisMeeting);

// });

//  console.log(groups);
// fs.writeFileSync('raw_groups.txt', JSON.stringify(groups))