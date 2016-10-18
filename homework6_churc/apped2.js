//homework 6 - take all information from txt file and save in new file for final project
//put each location into an object with arrays for name, address, day&type, etc
///CLEANED UP FURTHER _ FOR HOMEWORK 6/ apped3.js - ALL INFORMATION for 101.txt

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
// - Move var meetings = new Object(); down to within the function  -line 19: 
//PUT variables into arrays and push all the arrays into an object within the function - AFTER parsing each indiv element

///// for address lat long: join to var content
var geo = JSON.parse(fs.readFileSync('/home/ubuntu/workspace/data/meetings.txt'));
console.log(geo);

var meetings = [];

var $ = cheerio.load(content);

$('tbody').find('tr').each(function(i, elem) {
    var thisMeeting = new Object();

    //  ORIGINAL example of selecting h4 location:
    //meetings.push($(elem).find('td').eq(0).html().split('<br>')[2].trim().split(',')[0]);
    // splits everything separated by a break into an array of substrings - and selects the third array and
    // trims white space from both ends and splits it at the first comma and selects all before the comma 

    //   HEADING
    var place1 = $(elem).find('td').find('h4').eq(0).text().replace(/'&apos;'/g, "'").split(',')[0];
    var place = place1.split();

    //   NAME - in CAPS on AA site//

    //var name1 = $(elem).find('td').find('b').eq(0).text().split('-')[0].trim();
    var name1 = $(elem).find('td').find('b').eq(0).text().replace(/\s+/g, " ").split('-')[0].trim();


    if (name1 === 'CHAMBERS STREET ') {
        name1 = 'CHAMBERS STREET - A BRIDGE BACK';
    }
    var name = name1.split();


    //ADDRESS TWO LINES to one THIS WORKS
    var addressc = $(elem).find('td').eq(0).html().split('<br>')[2].split(',')[0].concat(', New York, NY').trim();

//    var addressb = addressc + (" ") + ($(elem).find('td').eq(0).html().split('<br>')[3].trim().replace(/ *\([^)]*\) */g, "").trim());
    var addressb = addressc + (" ") + ($(elem).find('td').eq(0).html().split('<br>')[3].trim().replace(/ *\([^)]*\) */g, "").trim());
//    var addressb = addressb.substring(addressb.indexOf('NY')+3);

    if (addressb === '283 W. Broadway, New York, NY NY 10013') {
        addressb = '283 W. Broadway, New York, NY 10013';
    }
    else if (addressb === '20 Cardinal Hayes Place, New York, NY '){
    addressb = '20 Cardinal Hayes Place, New York, NY 10007';
    }
     else if (addressb === '20 Cardinal Hayes Place, New York, NY , 10007'){
    addressb = '20 Cardinal Hayes Place, New York, NY 10007';
    }
      else if (addressb === '20 Cardinal Hayes Place, New York, NY NY 10007'){
    addressb = '20 Cardinal Hayes Place, New York, NY 10007';
    }
      else if (addressb === '29 Mott Street, New York, NY NY 10013'){
    addressb = '29 Mott Street, New York, NY 10013';
    }
    else if (addressb === '49 Fulton Street, New York, NY NY 10038'){
    addressb = '49 Fulton Street, New York, NY 10038';
    }
else if (addressb === '22 Barclay Street, New York, NY Entrance on Church St. between Vesey &amp; Barclay Streets NY'){
    addressb = '22 Barclay Street, New York, NY 10007';
    }
else if (addressb === '283 West Broadway, New York, NY , Ground Floor, Broadway Room, Enter through Green Door 10013'){
    addressb = '283 West Broadway, New York, NY 10013';
    }
    else if (addressb === '22 Barclay Street- basement chapel, New York, NY between Church and Broadway NY 10006'){
    addressb = '22 Barclay Street, New York, NY 10007';
    }
    else if (addressb === '20 Cardinal Hayes Place, New York, NY On Plaza east of Centre St and Reade St, 1st floor 10007'){
    addressb = '20 Cardinal Hayes Place, New York, NY 10007';
    }
    else if (addressb === '283 West Broadway, New York, NY '){
    addressb = '283 West Broadway, New York, NY 10013';
    }
    var address = addressb.split();

    //THIS WORKS for address also
    // var a = $(elem).find('td').eq(0).html().split('<br>')[2].trim();
    // var b = $(elem).find('td').eq(0).html().split('<br>')[3].trim();
    // c.push(a+b);


    //  ADD to this -  LATLONG WITH ADDRESS
//////////////////////////////////


    //  DAY, TIME & TYPE for every day of the week 

    var day1 = $(elem).find('td').eq(1).html().replace(/\s+/g, " ").replace(/["\r?\r\n\t\"]/g, "").trim();
    ///strips off the html tags
    var day2 = day1.replace(/<[^>]*>?/g, "").trim();

    var day = day2.split();


    //  DETAILS BOX
    var detail = ($(elem).find('td').find('div').eq(0).text().trim());
    
    if (detail === "Open Anniv. Last Saturday.") {
        detail = "Open Anniversary last Saturday";
    }

    var details = detail.split();

    //  WHEELCHAIR ACCESS
    var access1 = ($(elem).find('td').find('span').eq(0).text().trim().split('span'));

    if (access1 === "Wheelchair Access") {
        access1 = "Wheelchair Access";
    }
    else {
        access1 = "No Wheelchair Access";
    }
    var access = access1.split();

    thisMeeting = {
        place,
        name,
        address,
        day,
        details,
        access
    };
    meetings.push(thisMeeting);
});

console.log(meetings);
console.log(meetings.length);

fs.writeFileSync('/home/ubuntu/workspace/data/allinfo1.txt', JSON.stringify(meetings));
