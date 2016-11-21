//homework 6 - take all information from txt file and save in new file for final project
//THIS WORKS - IT TAKES EACH BlDG, NAME, DAY, MTG TYPE etc AND PARSES IT INTO RAW DATA FILE
///GO TO clean_apped4_ah.js TO CLEAN UP LINES TO GO INTO MONGO DB


var fs = require('fs');
var cheerio = require('cheerio'); // npm install cheerio


var content = fs.readFileSync('/home/ubuntu/workspace/zipData/01.txt');
//var content = fs.readFileSync('/home/ubuntu/workspace/zipData/02.txt');
//var content = fs.readFileSync('/home/ubuntu/workspace/zipData/03.txt');
//var content = fs.readFileSync('/home/ubuntu/workspace/zipData/04.txt');
//var content = fs.readFileSync('/home/ubuntu/workspace/zipData/05.txt');
//var content = fs.readFileSync('/home/ubuntu/workspace/zipData/06.txt');
//var content = fs.readFileSync('/home/ubuntu/workspace/zipData/07.txt');
//var content = fs.readFileSync('/home/ubuntu/workspace/zipData/08.txt');
//var content = fs.readFileSync('/home/ubuntu/workspace/zipData/09.txt');
//var content = fs.readFileSync('/home/ubuntu/workspace/zipData/10.txt');

var groups = [];

var $ = cheerio.load(content);

$('tbody').find('tr').each(function(i, elem) {
    var thisMeeting = new Object();
    
//   ///////////PLACE
    thisMeeting.building = $(elem).find('td').find('h4').eq(0).text().replace(/'&apos;'/g, "'").split(',')[0];

//     //////////NAME
    thisMeeting.name = $(elem).find('td').find('b').eq(0).text().replace(/\s+/g, " ").split('-')[0].trim();

//     //////////ADDRESS CLEAN - TO FIRST COMMA, THEN ADD NY NY
    var addressx = $(elem).find('td').eq(0).html().split('<br>')[2].trim().split(',')[0].split('-')[0].trim();
    thisMeeting.address = addressx.concat(", New York, NY");
    
    if (thisMeeting.address === "283 W. Broadway, New York, NY") {
        thisMeeting.address = "283 West Broadway, New York, NY";
    }
//     /////// NOTES BOX
    thisMeeting.notes = ($(elem).find('td').find('div').eq(0).text().trim().replace(/'<br>'/g, ",").trim().replace(/[*]/g, "").trim().replace(/=/g, ""));

//     ////////  WHEELCHAIR ACCESS///note changed
    thisMeeting.access = $(elem).find('td').find('span').eq(0).text().trim().split('span');

    if (thisMeeting.access === "Wheelchair Access") {
        thisMeeting.wheelchairAccess = true;
        ///how to remove array here
       // thisMeeting.wheelchairAccess = thisMeeting.wheelchairAccess.replace('["', '');
    }
    

//////GETS DAY as object - day, startTime, endTime, mtgType, interest  
    thisMeeting.meetings = $(elem).find('td').eq(1).html().split('<br>'); 

    groups.push(thisMeeting);

});

 console.log(groups);
 console.log(groups.length);
fs.writeFileSync('raw_groups1.txt', JSON.stringify(groups));




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