<H3> Cleaning meeting information for Manhattan zones 1 - 10, storing with geocodes in MongoDB (NoSQL) and querying the database</H3>
<H5> Connect MongoDB query output to Google Maps API to show upcoming meetings in local area</H5>

<H6>AA map data (MongoDB, node), working with Manhattan zones 1 - 10:<br>
<p>
<i>apped1.js/ class 3</i>: scrapes AA meeting html Manhattan zones 1 - 10 and saves in 01.txt - 10.txt files (/home/ubuntu/workspace/zipData/01.txt - /10.txt).</p><br>
<p>
<p>
<i>apped4_ah.js/ class 3</i>: takes all information from 01.txt - 10.txt files (/home/ubuntu/workspace/zipData/01.txt - /10.txt) and saves in ten new files (raw_groups1.txt - /10.txt).</p>
<br>
<b>

```javascript
var fs = require('fs');
var cheerio = require('cheerio'); // npm install cheerio
////////////
///////FOR TXT FILE 1
var content = fs.readFileSync('/home/ubuntu/workspace/zipData/01.txt');
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
    thisMeeting.address1 = addressx.concat(", New York, NY");    
    if (thisMeeting.address1 === "283 W. Broadway, New York, NY") {
        thisMeeting.address1 = "283 West Broadway, New York, NY";
    }
     if (thisMeeting.address1 === "22 Barclay Street (Basement), New York, NY") {
        thisMeeting.address1 = "22 Barclay Street, New York, NY";
    }
     thisMeeting.address2 = thisMeeting.address1.substring().split(' ').join('+');  
//     /////// NOTES BOX
     thisMeeting.notes = ($(elem).find('td').find('div').eq(0).text().trim().replace(/'<br>'/g, ",").trim().replace(/[*]/g, "").trim().replace(/=/g, ""));

    if (thisMeeting.notes === "@Duane and Centre behind Federal courthouse enter thru driveway behind Church No meetings on Holidays") {
      thisMeeting.notes = "@ Duane and Centre behind Federal Courthouse. Enter thru driveway behind Church. No meetings on Holidays"; 
    }
    if (thisMeeting.notes === "This is new location as of 9-12-14 M 7:30 am Trad 1st Monday.") {
      thisMeeting.notes = "This is new location as of 9-12-14. M 7:30 am Trad 1st Monday."; 
    }
    if (thisMeeting.notes === "Business meeting last Tuesday @ Mar,Jun,Sep & Dec.only. Promises 1st Wednesday, T Last Thursday  LOCATION IS SUBJECT TO CHANGE") {
      thisMeeting.notes = "Business meeting last Tuesday @ Mar, Jun, Sep & Dec.only. Promises 1st Wednesday, T Last Thursday. LOCATION IS SUBJECT TO CHANGE"; 
    }
    if (thisMeeting.notes === "this is the new location as of 9/8/14 tribecagroup2014@gmail.com") {
      thisMeeting.notes = "This is the new location as of 9/8/14. tribecagroup2014@gmail.com"; 
    }
//     ////////  WHEELCHAIR ACCESS///note changed
     thisMeeting.access = $(elem).find('td').find('span').eq(0).text().trim().split('span');
    if (thisMeeting.access == "Wheelchair access") {
        thisMeeting.access = true;
    }
    else  {
        thisMeeting.access = false;
    }
//////GETS DAY as object - day, startTime, endTime, mtgType, interest  
     thisMeeting.meetings = $(elem).find('td').eq(1).html().split('<br>'); 
     groups.push(thisMeeting);
});
 console.log(groups);
 console.log(groups.length);
fs.writeFileSync('/home/ubuntu/workspace/raw_groups1.txt', JSON.stringify(groups));
```
</b>
<br>
<p>
<i>clean_apped4_ah2.js/class 3</i>: This takes apped4_ah.js and cleans data up for AA areas 1 to 10 (Manhattan). Saved in ten text files (groups1.txt - /10.txt).</p>
<br>
<p>
<i>class3geo.js/ class 3:</i> This takes text files from clean_apped4_ah2.js and gets lat long for each address. Saved in ten text files (groupslatLg1.txt - /10.txt).</p><br>
<p>
<i>clean_apped8_ah2.js/class 3</i>: takes ten text files (groupslatLg1.txt - /10.txt) and ten text files (groups1.txt - /10.txt) and joins these into ten text files (groupsAddLL01 - /10.txt).</p>
<br>
<p>
<i>clean_apped6_ah.js/ homework 1</i>: inserts the ten groupsAddLL01 - /10.txt files into MongoDB.</p>
<br>
<p>
<i>AqueryMongo.js/ homework 1</i>: aggregates MongoDB documents and returns query into server.js.</p>
<br>
<p>
URL: https://homework1-churc.c9users.io/</H6></p>
<br>
<H6 align = "center"> ![](https://github.com/churc/data-structures/blob/master/Final%20Assignment%201/Screen%20Shot%202016-12-18%20at%202.14.02%20AM_fullInfo.png)</H6>
<br>
<H6 align = "center"> ![](https://github.com/churc/data-structures/blob/master/Final%20Assignment%201/Screen%20Shot%202016-12-18%20at%202.20.42%20AM_query.png)</H6>
<br>

