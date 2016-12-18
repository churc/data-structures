//homework 6 - take all information from txt file 01-10 and saves it in new files for final project
//THIS WORKS - TAKES EACH BlDG, NAME, DAY, MTG TYPE etc AND PARSES IT INTO RAW DATA FILE
///GO TO clean_apped4_ah2.js TO CLEAN UP LINES, DO 24 HRS AND TO GO INTO MONGO DB


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

///////////////

// // ///FOR TXT FILE 2 

// var content = fs.readFileSync('/home/ubuntu/workspace/zipData/02.txt');


// var groups = [];

// var $ = cheerio.load(content);

// $('tbody').find('tr').each(function(i, elem) {
//     var thisMeeting = new Object();
    
// //   ///////////PLACE
//     thisMeeting.building = $(elem).find('td').find('h4').eq(0).text().replace(/'&apos;'/g, "'").split(',')[0];

// //     //////////NAME
//     thisMeeting.name = $(elem).find('td').find('b').eq(0).text().replace(/\(.*?\)/g, "").trim().replace(/\s+/g, " ").split('-')[0].trim();


// //     //////////ADDRESS CLEAN - TO FIRST COMMA, THEN ADD NY NY
//     var addressx = $(elem).find('td').eq(0).html().split('<br>')[2].trim().split(',')[0].split('-')[0].trim();
//     thisMeeting.address1 = addressx.concat(", New York, NY");
    
//     if (thisMeeting.address1 === "83 Christopher Street (Red Door, New York, NY"){
//         thisMeeting.address1 = "83 Christopher Street, New York, NY";
//     }
//     if (thisMeeting.address1 === "232 W. 11th Street, New York, NY"){
//         thisMeeting.address1 = "232 West 11th Street, New York, NY";
//     }
//         if (thisMeeting.address1 === "7 East 10th Strert, New York, NY"){
//             thisMeeting.address1 = "7 East 10th Street, New York, NY";
//         }
//         if (thisMeeting.address1 === "273 Bowery Street, New York, NY"){
//             thisMeeting.address1 = "273 Bowery, New York, NY";
//         }
    
//     thisMeeting.address2 = thisMeeting.address1.substring().split(' ').join('+');

// //     /////// NOTES BOX
//     thisMeeting.notes = ($(elem).find('td').find('div').eq(0).text().replace(/'<br>'/g, ",").replace(/[*]/g, "").trim().replace(/=/g, ": ").replace(/ {2,}/g, ' '));

//     if (thisMeeting.notes === "NOTE: Meeting only meets on the 1st & 3rd Sunday of each month Big Book Workshop, Meeting ends at Noon.") {
//     thisMeeting.notes = "NOTE: Meeting only meets on the 1st & 3rd Sunday of each month. Big Book Workshop, Meeting ends at Noon.";
//     }
//     if (thisMeeting.notes === "Mon.Step: Rotates Steps 1,2&3, Fri.: T. Last Friday. Parents with children are welcome.") {
//     thisMeeting.notes = "Mon. Step = Rotates Steps 1,2 & 3, Fri.= T. Last Friday. Parents with children are welcome.";
//     }
//     if (thisMeeting.notes === "Sun.12:30: Meditation, 2am Meetings: Pitch meeting with candlelight. Mon.8pm: Topic, Tues.10pm: T last Tues., Thu.10pm: Problems in Sobriety Sun.8pm: Bus.Meeting last Sun.,Sat.10pm: Anniv.Last") {
//     thisMeeting.notes = "Sun. 12:30 = Meditation, 2am Meetings = Pitch meeting with candlelight. Mon. 8pm = Topic, Tues. 10pm = T last Tues., Thu.10pm = Problems in Sobriety, Sun. 8pm = Bus. Meeting last Sun., Sat. 10pm = Anniv. Last";
//     }
//     if (thisMeeting.notes === "No 8:30 or 10:15 1st Wed of month due to Bus. meeting Wed.10:15pm: No BB 1st Wed.") {
//     thisMeeting.notes = "No 8:30 or 10:15 1st Wed of month due to Bus. meeting, Wed. 10:15pm = No BB 1st Wed.";
//     }
//     if (thisMeeting.notes === "Fri.7:00pm: Promises Meeting All meetings are Gay & Lesbian focused. All are welcome.") {
//     thisMeeting.notes = "Fri. 7:00pm: Promises Meeting. All meetings are Gay & Lesbian focused. All are welcome.";
//     }
//     if (thisMeeting.notes === "Wed.: Topic, Thu.: Promises & Fri.: T Last Fri.") {
//     thisMeeting.notes = "Wed. = Topic, Thu. = Promises & Fri. = T Last Fri.";
//     }
//     if (thisMeeting.notes === "Mon.7pm: Anniv Last Mon., Fri.6:30pm: Interpreted for Deaf and Hard of Hearing. Friday Meeting occasionally changes the location; please call New York Inter-Group to confirm meeting location.") {
//         thisMeeting.notes = "Mon. 7pm: Anniv last Mon., Fri. 6:30pm: Interpreted for Deaf and Hard of Hearing. Friday Meeting occasionally changes the location; please call New York Inter-Group to confirm meeting location.";
//     }

// //     ////////  WHEELCHAIR ACCESS///note changed
//     thisMeeting.access = $(elem).find('td').find('span').eq(0).text().trim().split('span');

//     if (thisMeeting.access == "Wheelchair access") {
//         thisMeeting.access = true;
//     }
//         else  {
//         thisMeeting.access = false;
//         }
    
// //////GETS DAY as object - day, startTime, endTime, mtgType, interest  
//     thisMeeting.meetings = $(elem).find('td').eq(1).html().split('<br>'); 

//     groups.push(thisMeeting);

// });

//  console.log(groups);
//  console.log(groups.length);
// fs.writeFileSync('/home/ubuntu/workspace/raw_groups2.txt', JSON.stringify(groups));



///////////////

/////FOR TXT FILE 3 


// var content = fs.readFileSync('/home/ubuntu/workspace/zipData/03.txt');

// var groups = [];

// var $ = cheerio.load(content);

// $('tbody').find('tr').each(function(i, elem) {
//     var thisMeeting = new Object();
    
// //   ///////////PLACE
//     thisMeeting.building = $(elem).find('td').find('h4').eq(0).text().replace(/'&apos;'/g, "'").split(',')[0];

// //     //////////NAME
//     thisMeeting.name = $(elem).find('td').find('b').eq(0).text().replace(/\(.*?\)/g, "").trim().replace(/\s+/g, " ").split('-')[0].trim();


// //     //////////ADDRESS CLEAN - TO FIRST COMMA, THEN ADD NY NY
//     var addressx = $(elem).find('td').eq(0).html().split('<br>')[2].trim().split(',')[0].split('-')[0].trim();
//     thisMeeting.address1 = addressx.concat(", New York, NY");
    
//     if (thisMeeting.address1 === "319 Eastr 24th Street, New York, NY") {
//       thisMeeting.address1 = "319 East 24th Street, New York, NY"; 
//     }
//     if (thisMeeting.address1 === "206, New York, NY") {
//       thisMeeting.address1 = "206 East 11th Street, New York, NY"; 
//     }
//     if (thisMeeting.address1 === "80 St. Mark&apos;s Place, New York, NY") {
//       thisMeeting.address1 = "80 St. Marks Place, New York, NY"; 
//     }
//     if (thisMeeting.address1 === "28 Grammercy Park South, New York, NY") {
//       thisMeeting.address1 = "28 Gramercy Park South, New York, NY"; 
//     }
//     if (thisMeeting.address1 === "208 W 13th Street, New York, NY") {
//       thisMeeting.address1 = "208 West 13th Street, New York, NY"; 
//     }
//     if (thisMeeting.address1 === "116 W. 11th Street, New York, NY") {
//       thisMeeting.address1 = "116 West 11th Street, New York, NY"; 
//     }
//     if (thisMeeting.address1 === "307 W. 26th St., New York, NY") {
//       thisMeeting.address1 = "307 West 26th St., New York, NY"; 
//     }
//     if (thisMeeting.address1 === "346 W. 20th Street, New York, NY") {
//       thisMeeting.address1 = "346 West 20th Street, New York, NY"; 
//     }
    
//     thisMeeting.address2 = thisMeeting.address1.substring().split(' ').join('+');

// //     /////// NOTES BOX
//     thisMeeting.notes = ($(elem).find('td').find('div').eq(0).text().replace(/'<br>'/g, ",").replace(/[*]/g, "").trim().replace(/=/g, ": ").replace(/ {2,}/g, ' '));

//     if (thisMeeting.notes === "Trad.1st Wed., Fri.: Topic, Sat.: Round Robin Sharing All meetings are non-smoking.") {
//         thisMeeting.notes = "Trad. 1st Wed., Fri.: Topic, Sat.: Round Robin Sharing. All meetings are non-smoking.";
//     }
//     if (thisMeeting.notes === "Check in at front desk all meetings are non-smoking") {
//         thisMeeting.notes = "Check in at front desk. All meetings are non-smoking'";
//     }
//     if (thisMeeting.notes === "Tue.Topic: Gratitude, Thu: 11th Step Meditation Meeting,") {
//         thisMeeting.notes = "Tue. Topic: Gratitude, Thu: 11th Step Meditation Meeting.";
//     }
//     if (thisMeeting.notes === "LA Transplants/Vistors All Welcome") {
//         thisMeeting.notes = "LA Transplants/Visitors All Welcome";
//     }
//     if (thisMeeting.notes === "Tue.7pm: 4th & 5th Step Workshop, Beginners 3 speaker panel Sat.& Sun.10am Meeting is in the main theatre.") {
//         thisMeeting.notes = "Tue. 7pm: 4th & 5th Step Workshop, Beginners 3 speaker panel, Sat. & Sun. 10am Meeting is in the main theatre.";
//     }
//     if (thisMeeting.notes === "Tue.2pm: 11th Step Meditation, Thu.12:30pm: Topic, Fri.12:30pm Note: There Is No 2:00 Meeting On The Last Day Of The Month Anniv. Last Weekday of the Month") {
//         thisMeeting.notes = "Tue. 2pm: 11th Step Meditation, Thu. 12:30pm: Topic, Fri. 12:30pm. Note: There Is No 2:00 Meeting On The Last Day Of The Month. Anniv. Last Weekday of the Month";
//     }
//     if (thisMeeting.notes === "Fri.6pm OD: 11th Step Meditation, Fri.7:15pm O: Anniv Last Friday, +HIV Topic LGBTQ Friendly. All are welcome. Fri 7:15 CD: Relationships in Sobriety Business meeting at Holy Apostoles on 1st Monday a") {
//         thisMeeting.notes = "Fri. 6pm OD: 11th Step Meditation, Fri. 7:15pm O: Anniv Last Friday, +HIV Topic LGBTQ Friendly. All are welcome. Fri 7:15 CD: Relationships in Sobriety Business meeting at Holy Apostoles on 1st Monday";
//     }
//      if (thisMeeting.notes ==="Sun.4:30: Business Mtg Only 1st & Anniv Last Sunday Sun.7:30pm,Tue.5:30,Wed.8:30pm & Sat.10:30am: 11th Step Meditation Mon.5:30: Gratitude & Sat.7:30am: AA Grapevine") {
//         thisMeeting.notes = "Sun. 4:30: Business Mtg Only 1st & Anniv last Sunday, Sun .7:30pm, Tue. 5:30, Wed. 8:30pm & Sat. 10:30am: 11th Step Meditation, Mon. 5:30: Gratitude & Sat. 7:30am: AA Grapevine.";
//     }
//     if (thisMeeting.notes === "Sun.5:30pm meets only on the last Sunday of the month No Prayers - All Welcome - Check listing for Rm #") {
//         thisMeeting.notes = "Sun. 5:30pm meets only on the last Sunday of the month. No Prayers - All Welcome - Check listing for room #.";
//     }
    

// //     ////////  WHEELCHAIR ACCESS///note changed
//     thisMeeting.access = $(elem).find('td').find('span').eq(0).text().trim().split('span');

//     if (thisMeeting.access == "Wheelchair access") {
//         thisMeeting.access = true;
//     }
//      else  {
//      thisMeeting.access = false;
//      }
    
// //////GETS DAY as object - day, startTime, endTime, mtgType, interest  
//     thisMeeting.meetings = $(elem).find('td').eq(1).html().split('<br>'); 

//     groups.push(thisMeeting);

// });

//  console.log(groups);
//  console.log(groups.length);
// fs.writeFileSync('/home/ubuntu/workspace/raw_groups3.txt', JSON.stringify(groups));



// // ///////FOR TXT FILE 4


// var content = fs.readFileSync('/home/ubuntu/workspace/zipData/04.txt');


// var groups = [];

// var $ = cheerio.load(content);

// $('tbody').find('tr').each(function(i, elem) {
//     var thisMeeting = new Object();
    
// //   ///////////PLACE
//     thisMeeting.building = $(elem).find('td').find('h4').eq(0).text().replace(/'&apos;'/g, "'").split(',')[0];

// //     //////////NAME
//     thisMeeting.name = $(elem).find('td').find('b').eq(0).text().replace(/\(.*?\)/g, "").trim().replace(/\s+/g, " ").split('-')[0].trim();


// //     //////////ADDRESS CLEAN - TO FIRST COMMA, THEN ADD NY NY
//     var addressx = $(elem).find('td').eq(0).html().split('<br>')[2].trim().split(',')[0].split('-')[0].trim();
//     thisMeeting.address1 = addressx.concat(", New York, NY");
//      if (thisMeeting.address1 === "303 West 42nd St Rm 306, New York, NY"){
//          thisMeeting.address1 = "303 West 42nd Street, New York, NY";
//      }
//     thisMeeting.address2 = thisMeeting.address1.substring().split(' ').join('+');

    
// //     /////// NOTES BOX
//     thisMeeting.notes = ($(elem).find('td').find('div').eq(0).text().replace(/'<br>'/g, ",").replace(/[*]/g, "").trim().replace(/=/g, ": ").replace(/ {2,}/g, ' '));

//     if (thisMeeting.notes === "Sun.2pm: Women\'s Meeting") {
//         thisMeeting.notes = "Sun. 2pm: Women\'s Meeting";
//     }
//     if (thisMeeting.notes === "T Last Thursday All meetings are non-smoking.") {
//         thisMeeting.notes = "T Last Thursday. All meetings are non-smoking.";
//     }
//     if (thisMeeting.notes === "Tue.12:30 : T 1st Tuesday Beginners upstairs; other meetings in the chapel") {
//         thisMeeting.notes = "Tue. 12:30 : T 1st Tuesday Beginners upstairs; other meetings in the chapel";
//     }
//     if (thisMeeting.notes === "Monday thru Thursday Beginners Meeting 5th floor Monday thru Thursday Open Discussion 3rd floor Wednesday Step Meeting") {
//         thisMeeting.notes = "Monday thru Thursday Beginners Meeting 5th floor, Monday thru Thursday Open Discussion 3rd floor, Wednesday Step Meeting";
//     }

//     if (thisMeeting.notes ==="Tue.Step: #\'s 4-7, Wed.5:30: Grapevine Topic, Thu.12:30 Step: #\'s 4-7 Thu.5:30: T last Thu.,Fri.BB: T last Fri. Fri.Step: #\'s 8-12") {
//         thisMeeting.notes = "Tue. Step: #\'s 4-7, Wed. 5:30: Grapevine Topic, Thu. 12:30 Step: #\'s 4-7 Thu. 5:30: T last Thu., Fri. BB: T last Fri. Fri. Step: #\'s 8-12.";
//     }
//     if (thisMeeting.notes === "S 1st, C 2nd, BB 3rd, O Anniversary Meeting 4th Friday Women\'s Meeting.") {
//         thisMeeting.notes = "S 1st, C 2nd, BB 3rd, O Anniversary Meeting 4th Friday, Women\'s Meeting.";
//     }
 
    

// //     ////////  WHEELCHAIR ACCESS///note changed
//     thisMeeting.access = $(elem).find('td').find('span').eq(0).text().trim().split('span');

//     if (thisMeeting.access == "Wheelchair access") {
//         thisMeeting.access = true;
//     }
//      else  {
//      thisMeeting.access = false;
//      }

// //////GETS DAY as object - day, startTime, endTime, mtgType, interest  
//     thisMeeting.meetings = $(elem).find('td').eq(1).html().split('<br>'); 

//     groups.push(thisMeeting);

// });

//  console.log(groups);
//  console.log(groups.length);
// fs.writeFileSync('/home/ubuntu/workspace/raw_groups4.txt', JSON.stringify(groups));



// //////////FOR TXT FILE 5


// var content = fs.readFileSync('/home/ubuntu/workspace/zipData/05.txt');


// var groups = [];

// var $ = cheerio.load(content);

// $('tbody').find('tr').each(function(i, elem) {
//     var thisMeeting = new Object();
    
// //   ///////////PLACE
//     thisMeeting.building = $(elem).find('td').find('h4').eq(0).text().replace(/'&apos;'/g, "'").split(',')[0];
    
//     if (thisMeeting.building === "CHURCH OF THE GOOD SHEPARD") {
//       thisMeeting.building = "Church of The Good Shepherd";
//     }
//     if ( thisMeeting.building  === "MUSTARD SEED") {
//         thisMeeting.building = "Mustard Seed";
//     }
//     if ( thisMeeting.building  === "ALL SAINTS CHURCH") {
//         thisMeeting.building = "All Saints Church";
//     }


// // //     //////////NAME
//     thisMeeting.name = $(elem).find('td').find('b').eq(0).text().replace(/\(.*?\)/g, "").trim().replace(/\s+/g, " ").split('-')[0].trim();


// //     //////////ADDRESS CLEAN - TO FIRST COMMA, THEN ADD NY NY
//     var addressx = $(elem).find('td').eq(0).html().split('<br>')[2].trim().split(',')[0].split('-')[0].trim();
//     thisMeeting.address1 = addressx.concat(", New York, NY");
    
//     if (thisMeeting.address1 === "230 East 60th Street (Basement), New York, NY") {
//         thisMeeting.address1 = "230 East 60th Street, New York, NY";
//     }
    
//      thisMeeting.address2 = thisMeeting.address1.substring().split(' ').join('+');

  
// //     /////// NOTES BOX
//     thisMeeting.notes = ($(elem).find('td').find('div').eq(0).text().replace(/'<br>'/g, ",").replace(/[*]/g, "").trim().replace(/=/g, ": ").replace(/ {2,}/g, ' '));


//     if (thisMeeting.notes === "Fri.6:30: Steps 3 & 11") {
//         thisMeeting.notes = "Fri. 6:30: Steps 3 & 11.";
//     }
//     if (thisMeeting.notes ==="Sun.7:30am,Tue.6:15pm B & Wed.6:15pm C : Meditation Wkshp., Sun. 9:30am Step: Back to Basics, Fri.7:30pm: Anniv.every Fri. Thurs. 8am back room, Gratitude") {
//         thisMeeting.notes = "Sun. 7:30am, Tue. 6:15pm B & Wed. 6:15pm C : Meditation Workshop, Sun.9:30am Step: Back to Basics, Fri. 7:30pm: Anniv. every Fri. Thurs. 8am back room, Gratitude.";
//     }
//     if (thisMeeting.notes === "T -7:30am last Mon., Anniv -12:30 Last Thursday") {
//         thisMeeting.notes = "T - 7:30am last Mon., Anniv - 12:30 Last Thursday";
//     }
//      if (thisMeeting.notes === "Wed.6:15 BB: OD Big Book Study Fri.7:30pm: Anniv. Meeting every Fri.") {
//         thisMeeting.notes = "Wed. 6:15 BB: OD Big Book Study Fri. 7:30pm: Anniv. Meeting every Fri.";
//     }
//     if (thisMeeting.notes === "Beginners Meeting 2nd & 4th Sunday Step Meeting 1st &3rd Sunday") {
//         thisMeeting.notes = "Beginners Meeting 2nd & 4th Sunday Step Meeting 1st & 3rd Sunday";
//     }
//     if (thisMeeting.notes === "Sun.7:30am,Tue.6:15pm B & Wed.6:15pm C : Meditation Wkshp., Sun.9:30am Step: Back to Basics, Fri.7:30pm: Anniv.every Fri. Thurs. 8am back room, Gratitude") {
//         thisMeeting.notes = "Sun. 7:30am, Tue. 6:15pm B & Wed. 6:15pm C : Meditation Wkshp., Sun. 9:30am Step: Back to Basics, Fri. 7:30pm: Anniv.every Fri. Thurs. 8am back room, Gratitude";
//     }
//      if (thisMeeting.notes === "Anniv. Last Mon., T-Last Wed., Topic-Last Fri. All meetings are OPEN to Public NOTE: Monday & Wednesday in Choir Room. Friday in Vestry Room. Also check the Board at Church entrance.") {
//         thisMeeting.notes = "Anniv. Last Mon., T - Last Wed., Topic - Last Fri. All meetings are OPEN to Public. NOTE: Monday & Wednesday in Choir Room. Friday in Vestry Room. Also check the Board at Church entrance.";
//     }
//      if (thisMeeting.notes === "Fri.6:30: Steps 3 & 11") {
//         thisMeeting.notes = "Fri. 6:30: Steps 3 & 11.";
//     }

// //     ////////  WHEELCHAIR ACCESS///note changed
//     thisMeeting.access = $(elem).find('td').find('span').eq(0).text().trim().split('span');

//     if (thisMeeting.access == "Wheelchair access") {
//         thisMeeting.access = true;
//     }
//      else  {
//      thisMeeting.access = false;
//      }
    
// //////GETS DAY as object - day, startTime, endTime, mtgType, interest  
//     thisMeeting.meetings = $(elem).find('td').eq(1).html().split('<br>'); 

//     groups.push(thisMeeting);

// });

//  console.log(groups);
//  console.log(groups.length);
// fs.writeFileSync('/home/ubuntu/workspace/raw_groups5.txt', JSON.stringify(groups));



////////// TXT FILE 6


// var content = fs.readFileSync('/home/ubuntu/workspace/zipData/06.txt');

// var groups = [];

// var $ = cheerio.load(content);

// $('tbody').find('tr').each(function(i, elem) {
//     var thisMeeting = new Object();
    
// //   ///////////PLACE
//     thisMeeting.building = $(elem).find('td').find('h4').eq(0).text().replace(/'&apos;'/g, "'").split(',')[0];
    

// //     //////////NAME
//   //  thisMeeting.name = $(elem).find('td').find('b').eq(0).text().replace(/\s+/g, " ").split('-')[0].trim();
//     thisMeeting.name = $(elem).find('td').find('b').eq(0).text().replace(/\(.*?\)/g, "").trim().replace(/\s+/g, " ").split('-')[0].trim();


// //     //////////ADDRESS CLEAN - TO FIRST COMMA, THEN ADD NY NY
//     var addressx = $(elem).find('td').eq(0).html().split('<br>')[2].trim().split(',')[0].split('-')[0].trim();
//     thisMeeting.address1 = addressx.concat(", New York, NY");
    
//     if (thisMeeting.address1 === "152 west 71st street, New York, NY") {
//         thisMeeting.address1 = "152 West 71st street, New York, NY";
//     }
//     if  (thisMeeting.address1 === "Central Park West &amp; 76th Street, New York, NY"){
//         thisMeeting.address1 = "Central Park West and 76th Street, New York, NY";
//     }
// if  (thisMeeting.address1 === "4 West 76th Street. Meeting in the gym., New York, NY"){
//         thisMeeting.address1 = "4 West 76th Street, New York, NY";
//     }
//      thisMeeting.address2 = thisMeeting.address1.substring().split(' ').join('+');
  
// //     /////// NOTES BOX
//   thisMeeting.notes = ($(elem).find('td').find('div').eq(0).text().replace(/'<br>'/g, ",").replace(/[*]/g, "").trim().replace(/=/g, ": ").replace(/ {2,}/g, ' '));

//     if (thisMeeting.notes === "Fri.6:30: Steps 3 & 11") {
//         thisMeeting.notes = "Fri. 6:30: Steps 3 & 11.";
//     }
//     if (thisMeeting.notes === "T - Last Friday, Anniversary-Last Saturday.") {
//         thisMeeting.notes = "T - Last Friday, Anniversary - Last Saturday.";
//     }
//     if (thisMeeting.notes === "Last Sat. of month at 10:15 : anniversary meeting") {
//         thisMeeting.notes = "Last Sat. of month at 10:15 = anniversary meeting";
//     }
//     if (thisMeeting.notes === "Wed.6pm: Interpreted for the deaf and hard of hearing. Gay Men & Women Focus. All are welcome.") {
//         thisMeeting.notes = "Wed. 6pm: Interpreted for the deaf and hard of hearing. Gay Men & Women Focus. All are welcome.";
//     }
//     if (thisMeeting.notes === "Mon: 11th Step Meditation, Fri: Alt.Step & Tradition Meeting") {
//         thisMeeting.notes = "Mon: 11th Step Meditation, Fri: Alt. Step & Tradition Meeting";
//     }
//     if (thisMeeting.notes === "Interpreted for the Deaf and Hard of Hearing No meetings on holidays On Ground Floor Mon. & Wed.; Basement on Thurs.") {
//         thisMeeting.notes = "Interpreted for the Deaf and Hard of Hearing. No meetings on holidays. On Ground Floor Mon. & Wed.; Basement on Thurs.";
//     }



// //     ////////  WHEELCHAIR ACCESS///note changed
//     thisMeeting.access = $(elem).find('td').find('span').eq(0).text().trim().split('span');

//     if (thisMeeting.access == "Wheelchair access") {
//         thisMeeting.access = true;
//     }
//      else  {
//      thisMeeting.access = false;
//      }
    
// //////GETS DAY as object - day, startTime, endTime, mtgType, interest  
//     thisMeeting.meetings = $(elem).find('td').eq(1).html().split('<br>'); 

//     groups.push(thisMeeting);

// });

//  console.log(groups);
//  console.log(groups.length);
// fs.writeFileSync('/home/ubuntu/workspace/raw_groups6.txt', JSON.stringify(groups));



///////// 
// //////////FOR TXT FILE 7

// var content = fs.readFileSync('/home/ubuntu/workspace/zipData/07.txt');


// var groups = [];

// var $ = cheerio.load(content);

// $('tbody').find('tr').each(function(i, elem) {
//     var thisMeeting = new Object();
    
// //   ///////////PLACE
//     thisMeeting.building = $(elem).find('td').find('h4').eq(0).text().replace(/'&apos;'/g, "'").split(',')[0];
    

// //     //////////NAME
//     thisMeeting.name = $(elem).find('td').find('b').eq(0).text().replace(/\(.*?\)/g, "").trim().replace(/\s+/g, " ").split('-')[0].trim();


// //     //////////ADDRESS CLEAN - TO FIRST COMMA, THEN ADD NY NY
//     var addressx = $(elem).find('td').eq(0).html().split('<br>')[2].trim().split(',')[0].split('-')[0].trim();
//     thisMeeting.address1 = addressx.concat(", New York, NY");
    
//      thisMeeting.address2 = thisMeeting.address1.substring().split(' ').join('+');

// //     /////// NOTES BOX
//   thisMeeting.notes = ($(elem).find('td').find('div').eq(0).text().replace(/'<br>'/g, ",").replace(/[*]/g, "").trim().replace(/=/g, ": ").replace(/ {2,}/g, ' '));
//     if (thisMeeting.notes === "Fri.6:15: Women\'s Meeting"){
//         thisMeeting.notes = "Fri. 6:15: Women\'s Meeting";
//     }
//     if (thisMeeting.notes === "lower level"){
//         thisMeeting.notes = "Lower level";
//     }
//     if (thisMeeting.notes === "Ring Bell for entry"){
//         thisMeeting.notes = "Ring bell for entry";
//     }
//     if (thisMeeting.notes === "Tue.6:30: Literature Topic,Sat: Meets in the Rectory. Wheel Chair Access on Tuesday & Sunday Only"){
//         thisMeeting.notes = "Tue. 6:30: Literature Topic, Sat: Meets in the Rectory. Wheel Chair Access on Tuesday & Sunday Only";
//     }
//     if (thisMeeting.notes === "Daily reflections readings & round robin format discussion"){
//         thisMeeting.notes = "Daily reflections readings & round robin format discussion";
//     }
//     if (thisMeeting.notes === "Tue.8pm: Topic Round Robin, Anniv Last Fri.@ 6:45 Church Closed Friday; No Meetings In July & August All meetings are non-smoking."){
//         thisMeeting.notes = "Tue. 8pm: Topic Round Robin, Anniv Last Fri.@ 6:45, Church Closed Friday, No Meetings In July & August. All meetings are non-smoking.";
//     }
//     if (thisMeeting.notes === "Mon.6pm & Thu.6pm Meetings end @ 6:50pm."){
//         thisMeeting.notes = "Mon. 6pm & Thu. 6pm Meetings end @ 6:50pm.";
//     }
//     if (thisMeeting.notes === "Sun.10am: 11th S, Tue.6am: Came To Believe Thu.6am: Step & Trad."){
//         thisMeeting.notes = "Sun. 10am: 11th S, Tue. 6am: Came To Believe, Thu. 6am: Step & Trad.";
//     }

// //     ////////  WHEELCHAIR ACCESS///note changed
//     thisMeeting.access = $(elem).find('td').find('span').eq(0).text().trim().split('span');

//     if (thisMeeting.access == "Wheelchair access") {
//         thisMeeting.access = true;
//     }
//      else  {
//      thisMeeting.access = false;
//      }    
    
// //////GETS DAY as object - day, startTime, endTime, mtgType, interest  
//     thisMeeting.meetings = $(elem).find('td').eq(1).html().split('<br>'); 

//     groups.push(thisMeeting);

// });

//  console.log(groups);
//  console.log(groups.length);
// fs.writeFileSync('/home/ubuntu/workspace/raw_groups7.txt', JSON.stringify(groups));


/////////////////////

// // //////////FOR TXT FILE 8

// var content = fs.readFileSync('/home/ubuntu/workspace/zipData/08.txt');


// var groups = [];

// var $ = cheerio.load(content);

// $('tbody').find('tr').each(function(i, elem) {
//     var thisMeeting = new Object();
    
// //   ///////////PLACE
//     thisMeeting.building = $(elem).find('td').find('h4').eq(0).text().replace(/'&apos;'/g, "'").split(',')[0];
    

// //     //////////NAME
//     thisMeeting.name = $(elem).find('td').find('b').eq(0).text().replace(/\(.*?\)/g, "").trim().replace(/\s+/g, " ").split('-')[0].trim();


// //     //////////ADDRESS CLEAN - TO FIRST COMMA, THEN ADD NY NY
//     var addressx = $(elem).find('td').eq(0).html().split('<br>')[2].trim().split(',')[0].split('-')[0].trim();
//     thisMeeting.address1 = addressx.concat(", New York, NY");
//     if(thisMeeting.address1 === "58, New York, NY") {
//         thisMeeting.address1 = "62 West 135th Street, New York, NY";
//     }
//      if(thisMeeting.address1 === "2044 Adam Clayton Powell Blvd., New York, NY") {
//         thisMeeting.address1 = "2044 Adam Clayton Powell Junior Boulevard, New York, NY";
//     }
//      if(thisMeeting.address1 === "521 W 126th St, New York, NY") {
//         thisMeeting.address1 = "521 West 126th St, New York, NY";
//     }
//     if(thisMeeting.address1 === "521 West 126th St, New York, NY") {
//         thisMeeting.address1 = "521 West 126th Street, New York, NY";
//     }


//     thisMeeting.address2 = thisMeeting.address1.substring().split(' ').join('+');


// //     /////// NOTES BOX
//   thisMeeting.notes = ($(elem).find('td').find('div').eq(0).text().replace(/'<br>'/g, ",").replace(/[*]/g, "").trim().replace(/=/g, ": ").replace(/ {2,}/g, ' '));


// //     ////////  WHEELCHAIR ACCESS///note changed
//     thisMeeting.access = $(elem).find('td').find('span').eq(0).text().trim().split('span');

//     if (thisMeeting.access == "Wheelchair access") {
//         thisMeeting.access = true;
//     }
//      else  {
//      thisMeeting.access = false;
//      }
    
// //////GETS DAY as object - day, startTime, endTime, mtgType, interest  
//     thisMeeting.meetings = $(elem).find('td').eq(1).html().split('<br>'); 

//     groups.push(thisMeeting);

// });

//  console.log(groups);
//  console.log(groups.length);
// fs.writeFileSync('/home/ubuntu/workspace/raw_groups8.txt', JSON.stringify(groups));



// //////////FOR TXT FILE 9

// var content = fs.readFileSync('/home/ubuntu/workspace/zipData/09.txt');


// var groups = [];

// var $ = cheerio.load(content);

// $('tbody').find('tr').each(function(i, elem) {
//     var thisMeeting = new Object();
    
// //   ///////////PLACE
//     thisMeeting.building = $(elem).find('td').find('h4').eq(0).text().replace(/'&apos;'/g, "'").split(',')[0];
    

// // //////////NAME
//   //  thisMeeting.name = $(elem).find('td').find('b').eq(0).text().replace(/\s+/g, " ").split('-')[0].trim();
//     thisMeeting.name = $(elem).find('td').find('b').eq(0).text().replace(/\(.*?\)/g, "").trim().replace(/\s+/g, " ").split('-')[0].trim();
       
//         if (thisMeeting.name === "125") {
//             thisMeeting.name = "125 - TWO FOR ONE";
//             }

// //////////ADDRESS CLEAN - TO FIRST COMMA, THEN ADD NY NY
//     var addressx = $(elem).find('td').eq(0).html().split('<br>')[2].trim().split(',')[0].split('-')[0].trim();
//     thisMeeting.address1 = addressx.concat(", New York, NY");
    
    
//     thisMeeting.address2 = thisMeeting.address1.substring().split(' ').join('+');

// //     /////// NOTES BOX
//   thisMeeting.notes = ($(elem).find('td').find('div').eq(0).text().replace(/'<br>'/g, ",").replace(/[*]/g, "").trim().replace(/=/g, ": ").replace(/ {2,}/g, ' '));
  

// //     ////////  WHEELCHAIR ACCESS///note changed
//     thisMeeting.access = $(elem).find('td').find('span').eq(0).text().trim().split('span');

//     if (thisMeeting.access == "Wheelchair access") {
//         thisMeeting.access = true;
//     }
//      else  {
//      thisMeeting.access = false;
//      }
    
// //////GETS DAY as object - day, startTime, endTime, mtgType, interest  
//     thisMeeting.meetings = $(elem).find('td').eq(1).html().split('<br>'); 

//     groups.push(thisMeeting);

// });

//  console.log(groups);
//  console.log(groups.length);
// fs.writeFileSync('/home/ubuntu/workspace/raw_groups9.txt', JSON.stringify(groups));

// ////////////


// //////////FOR TXT FILE 10

// var content = fs.readFileSync('/home/ubuntu/workspace/zipData/10.txt');

// var groups = [];


// var $ = cheerio.load(content);

// $('tbody').find('tr').each(function(i, elem) {
//     var thisMeeting = new Object();
    
// //   ///////////PLACE
//     thisMeeting.building = $(elem).find('td').find('h4').eq(0).text().replace(/'&apos;'/g, "'").split(',')[0];


// //     //////////NAME
//     thisMeeting.name = $(elem).find('td').find('b').eq(0).text().replace(/\(.*?\)/g, "").trim().replace(/\s+/g, " ").split('-')[0].trim();
       

// //     //////////ADDRESS CLEAN - TO FIRST COMMA, THEN ADD NY NY
//       var addressx = $(elem).find('td').eq(0).html().split('<br>')[2].trim().split(',')[0].split('-')[0].trim();

//     thisMeeting.address1 = addressx.concat(", New York, NY");
//     if (thisMeeting.address1 === "701 West 168th Street @ Fort Washington Avenue, New York, NY"){
//         thisMeeting.address1 = "701 West 168th Street, New York, NY";
//     }
//     if (thisMeeting.address1 === "230 East 60th Street (Basement), New York, NY") {
//         thisMeeting.address1 = "230 East 60th Street, New York, NY";
//     }
//     if(thisMeeting.address1 === "502 West165th Street, New York, NY") {
//         thisMeeting.address1 = "502 West 165th Street, New York, NY";
//     }
//     if (thisMeeting.address1 === "189th Street &amp; Bennett Avenue, New York, NY") {
//         thisMeeting.address1 = "189th Street, New York, NY";
//     }
//     if (thisMeeting.address1 === "20 Cummings Street, New York, NY"){
//         thisMeeting.address1 = "20 Cumming Street, New York, NY";
//     }
//     if (thisMeeting.address1 === "189th Street, New York, NY"){
//         thisMeeting.address1 = "189th Street and Bennett Avenue, New York, NY";
//     }
 
//         thisMeeting.address2 = thisMeeting.address1.replace(/'&amp;/g, "").substring().split(' ').join('+');

// //     /////// NOTES BOX
//         thisMeeting.notes = ($(elem).find('td').find('div').eq(0).text().replace(/'<br>'/g, ",").replace(/[*]/g, "").trim().replace(/=/g, ": ").replace(/ {2,}/g, ' '));

 

//     if (thisMeeting.notes === "Fri.6:30: Steps 3 & 11") {
//         thisMeeting.notes = "Fri. 6:30: Steps 3 & 11.";
//     }

// //     ////////  WHEELCHAIR ACCESS///note changed
//     thisMeeting.access = $(elem).find('td').find('span').eq(0).text().trim().split('span');

//      if (thisMeeting.access == "Wheelchair access") {
//         thisMeeting.access = true;
//      }
//      else  {
//      thisMeeting.access = false;
//      }
    
// //////GETS DAY as object - day, startTime, endTime, mtgType, interest  
//     thisMeeting.meetings = $(elem).find('td').eq(1).html().split('<br>'); 

//     groups.push(thisMeeting);

// });

//  console.log(groups);
//  console.log(groups.length);
// fs.writeFileSync('/home/ubuntu/workspace/raw_groups10.txt', JSON.stringify(groups));



//////////////////STARTER CODE
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
//      else  {
//      thisMeeting.access = false;
//      }

// //////GETS FIRST DAY as object - day, startTime, endTime, mtgType, interest  
//         thisMeeting.meetings = $(elem).find('td').eq(1).html().split('<br>'); 

//     groups.push(thisMeeting);

// });

//  console.log(groups);
// fs.writeFileSync('raw_groups.txt', JSON.stringify(groups))


