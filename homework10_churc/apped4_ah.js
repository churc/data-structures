//homework 6 - take all information from txt file and save in new file for final project
//THIS WORKS - IT TAKES EACH BlDG, NAME, DAY, MTG TYPE etc AND PARSES IT INTO RAW DATA FILE
///GO TO clean_apped4_ah.js TO CLEAN UP LINES TO GO INTO MONGO DB


var fs = require('fs');
var cheerio = require('cheerio'); // npm install cheerio

///////FOR TXT FILE 1

// var content = fs.readFileSync('/home/ubuntu/workspace/zipData/01.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/02.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/03.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/04.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/05.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/06.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/07.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/08.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/09.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/10.txt');

// var groups = [];

// var $ = cheerio.load(content);

// $('tbody').find('tr').each(function(i, elem) {
//     var thisMeeting = new Object();
    
// //   ///////////PLACE
//     thisMeeting.building = $(elem).find('td').find('h4').eq(0).text().replace(/'&apos;'/g, "'").split(',')[0];

// //     //////////NAME
//     thisMeeting.name = $(elem).find('td').find('b').eq(0).text().replace(/\s+/g, " ").split('-')[0].trim();

// //     //////////ADDRESS CLEAN - TO FIRST COMMA, THEN ADD NY NY
//     var addressx = $(elem).find('td').eq(0).html().split('<br>')[2].trim().split(',')[0].split('-')[0].trim();
//     thisMeeting.address = addressx.concat(", New York, NY");
    
//     if (thisMeeting.address === "283 W. Broadway, New York, NY") {
//         thisMeeting.address = "283 West Broadway, New York, NY";
//     }
// //     /////// NOTES BOX
//     thisMeeting.notes = ($(elem).find('td').find('div').eq(0).text().trim().replace(/'<br>'/g, ",").trim().replace(/[*]/g, "").trim().replace(/=/g, ""));

// //     ////////  WHEELCHAIR ACCESS///note changed
//     thisMeeting.access = $(elem).find('td').find('span').eq(0).text().trim().split('span');

//     if (thisMeeting.access === "Wheelchair Access") {
//         thisMeeting.wheelchairAccess = true;
//         ///how to remove array here
//       // thisMeeting.wheelchairAccess = thisMeeting.wheelchairAccess.replace('["', '');
//     }
    

// //////GETS DAY as object - day, startTime, endTime, mtgType, interest  
//     thisMeeting.meetings = $(elem).find('td').eq(1).html().split('<br>'); 

//     groups.push(thisMeeting);

// });

//  console.log(groups);
//  console.log(groups.length);
// fs.writeFileSync('raw_groups1.txt', JSON.stringify(groups));

// ///////////////

// ///FOR TXT FILE 2 


// var content = fs.readFileSync('/home/ubuntu/workspace/zipData/02.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/03.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/04.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/05.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/06.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/07.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/08.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/09.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/10.txt');

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
//     thisMeeting.address = addressx.concat(", New York, NY");
    

// //     /////// NOTES BOX
//   // thisMeeting.notes = ($(elem).find('td').find('div').eq(0).text().trim().replace(/'<br>'/g, ",").trim().replace(/[*]/g, "").trim().replace(/=/g, ""));


//   // thisMeeting.notes = ($(elem).find('td').find('div').eq(0).text().trim().replace(/'<br>'/g, ",").trim().replace(/[*]/g, "").trim().replace(/=/g, " "));

//     thisMeeting.notes = ($(elem).find('td').find('div').eq(0).text().replace(/'<br>'/g, ",").replace(/[*]/g, "").trim().replace(/=/g, ": ").replace(/ {2,}/g, ' '));

//  if (thisMeeting.notes === "Mon.7pm: Anniv Last Mon., Fri.6:30pm: Interpreted for Deaf and Hard of Hearing. Friday Meeting occasionally changes the location; please call New York Inter-Group to confirm meeting location.") {
//         thisMeeting.notes = "Mon. 7pm: Anniv last Mon., Fri. 6:30pm: Interpreted for Deaf and Hard of Hearing. Friday Meeting occasionally changes the location; please call New York Inter-Group to confirm meeting location.";
//     }

// //     ////////  WHEELCHAIR ACCESS///note changed
//     thisMeeting.access = $(elem).find('td').find('span').eq(0).text().trim().split('span');

//     if (thisMeeting.access === "Wheelchair Access") {
//         thisMeeting.wheelchairAccess = true;
//         ///how to remove array here
//       //thisMeeting.wheelchairAccess = thisMeeting.wheelchairAccess.replace('["', '');
//     }
    
// //////GETS DAY as object - day, startTime, endTime, mtgType, interest  
//     thisMeeting.meetings = $(elem).find('td').eq(1).html().split('<br>'); 

//     groups.push(thisMeeting);

// });

//  console.log(groups);
//  console.log(groups.length);
// fs.writeFileSync('raw_groups2.txt', JSON.stringify(groups));

////////////FOR TXT FILE 3

///////////////

///FOR TXT FILE 3 


// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/02.txt');
// var content = fs.readFileSync('/home/ubuntu/workspace/zipData/03.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/04.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/05.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/06.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/07.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/08.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/09.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/10.txt');

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
//     thisMeeting.address = addressx.concat(", New York, NY");
    

// //     /////// NOTES BOX
//   // thisMeeting.notes = ($(elem).find('td').find('div').eq(0).text().trim().replace(/'<br>'/g, ",").trim().replace(/[*]/g, "").trim().replace(/=/g, ""));


//   // thisMeeting.notes = ($(elem).find('td').find('div').eq(0).text().trim().replace(/'<br>'/g, ",").trim().replace(/[*]/g, "").trim().replace(/=/g, " "));

//     thisMeeting.notes = ($(elem).find('td').find('div').eq(0).text().replace(/'<br>'/g, ",").replace(/[*]/g, "").trim().replace(/=/g, ": ").replace(/ {2,}/g, ' '));

//  if (thisMeeting.notes === "Sun.5:30pm meets only on the last Sunday of the month No Prayers - All Welcome - Check listing for Rm #") {
//         thisMeeting.notes = "Sun. 5:30pm meets only on the last Sunday of the month. No Prayers - All Welcome - Check listing for room #.";
//     }
//     if(thisMeeting.notes ==="Sun.4:30: Business Mtg Only 1st & Anniv Last Sunday Sun.7:30pm,Tue.5:30,Wed.8:30pm & Sat.10:30am: 11th Step Meditation Mon.5:30: Gratitude & Sat.7:30am: AA Grapevine") {
//         thisMeeting.notes = "Sun. 4:30: Business Mtg Only 1st & Anniv last Sunday, Sun .7:30pm, Tue. 5:30, Wed. 8:30pm & Sat. 10:30am: 11th Step Meditation, Mon. 5:30: Gratitude & Sat. 7:30am: AA Grapevine.";
//     }

// //     ////////  WHEELCHAIR ACCESS///note changed
//     thisMeeting.access = $(elem).find('td').find('span').eq(0).text().trim().split('span');

//     if (thisMeeting.access === "Wheelchair Access") {
//         thisMeeting.wheelchairAccess = true;
//         ///how to remove array here
//       //thisMeeting.wheelchairAccess = thisMeeting.wheelchairAccess.replace('["', '');
//     }
    
// //////GETS DAY as object - day, startTime, endTime, mtgType, interest  
//     thisMeeting.meetings = $(elem).find('td').eq(1).html().split('<br>'); 

//     groups.push(thisMeeting);

// });

//  console.log(groups);
//  console.log(groups.length);
// fs.writeFileSync('raw_groups3.txt', JSON.stringify(groups));



// ///////FOR TXT FILE 4

// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/02.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/03.txt');
// var content = fs.readFileSync('/home/ubuntu/workspace/zipData/04.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/05.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/06.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/07.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/08.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/09.txt');
// //var content = fs.readFileSync('/home/ubuntu/workspace/zipData/10.txt');

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
//     thisMeeting.address = addressx.concat(", New York, NY");
    
    
// //     /////// NOTES BOX
//   // thisMeeting.notes = ($(elem).find('td').find('div').eq(0).text().trim().replace(/'<br>'/g, ",").trim().replace(/[*]/g, "").trim().replace(/=/g, ""));


//   // thisMeeting.notes = ($(elem).find('td').find('div').eq(0).text().trim().replace(/'<br>'/g, ",").trim().replace(/[*]/g, "").trim().replace(/=/g, " "));

//   thisMeeting.notes = ($(elem).find('td').find('div').eq(0).text().replace(/'<br>'/g, ",").replace(/[*]/g, "").trim().replace(/=/g, ": ").replace(/ {2,}/g, ' '));

 

//  if (thisMeeting.notes === "S 1st, C 2nd, BB 3rd, O Anniversary Meeting 4th Friday Women\'s Meeting.") {
//         thisMeeting.notes = "S 1st, C 2nd, BB 3rd, O Anniversary Meeting 4th Friday, Women\'s Meeting.";
//     }
//  if (thisMeeting.notes ==="T Last Thursday; S other Thursdays All meetings are non-smoking.") {
//         thisMeeting.notes = "T Last Thursday; S other Thursdays. All meetings are non-smoking.";
//     }
//  if (thisMeeting.notes ==="Tue.Step: #\'s 4-7, Wed.5:30: Grapevine Topic, Thu.12:30 Step: #\'s 4-7 Thu.5:30: T last Thu.,Fri.BB: T last Fri. Fri.Step: #\'s 8-12") {
//         thisMeeting.notes = "Tue. Step: #\'s 4-7, Wed. 5:30: Grapevine Topic, Thu. 12:30 Step: #\'s 4-7 Thu. 5:30: T last Thu., Fri. BB: T last Fri. Fri. Step: #\'s 8-12.";
//     }

// //     ////////  WHEELCHAIR ACCESS///note changed
//     thisMeeting.access = $(elem).find('td').find('span').eq(0).text().trim().split('span');

//     if (thisMeeting.access === "Wheelchair Access") {
//         thisMeeting.wheelchairAccess = true;
//         ///how to remove array here
//       //thisMeeting.wheelchairAccess = thisMeeting.wheelchairAccess.replace('["', '');
//     }
    
// //////GETS DAY as object - day, startTime, endTime, mtgType, interest  
//     thisMeeting.meetings = $(elem).find('td').eq(1).html().split('<br>'); 

//     groups.push(thisMeeting);

// });

//  console.log(groups);
//  console.log(groups.length);
// fs.writeFileSync('raw_groups4.txt', JSON.stringify(groups));



//////////FOR TXT FILE 5

//var content = fs.readFileSync('/home/ubuntu/workspace/zipData/02.txt');
//var content = fs.readFileSync('/home/ubuntu/workspace/zipData/03.txt');
//var content = fs.readFileSync('/home/ubuntu/workspace/zipData/04.txt');
var content = fs.readFileSync('/home/ubuntu/workspace/zipData/05.txt');
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
    
    if (thisMeeting.building === "CHURCH OF THE GOOD SHEPARD") {
       thisMeeting.building = "Church of The Good Shepherd";
    }
    if ( thisMeeting.building  === "MUSTARD SEED") {
        thisMeeting.building = "Mustard Seed";
    }
    if ( thisMeeting.building  === "ALL SAINTS CHURCH") {
        thisMeeting.building = "All Saints Church";
    }
//     function toTitleCase(str){
//     return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// }



//     //////////NAME
  //  thisMeeting.name = $(elem).find('td').find('b').eq(0).text().replace(/\s+/g, " ").split('-')[0].trim();
    thisMeeting.name = $(elem).find('td').find('b').eq(0).text().replace(/\(.*?\)/g, "").trim().replace(/\s+/g, " ").split('-')[0].trim();


//     //////////ADDRESS CLEAN - TO FIRST COMMA, THEN ADD NY NY
    var addressx = $(elem).find('td').eq(0).html().split('<br>')[2].trim().split(',')[0].split('-')[0].trim();
    thisMeeting.address = addressx.concat(", New York, NY");
    
    if (thisMeeting.address === "230 East 60th Street (Basement), New York, NY") {
        thisMeeting.address = "230 East 60th Street, New York, NY";
    }
//     /////// NOTES BOX
   // thisMeeting.notes = ($(elem).find('td').find('div').eq(0).text().trim().replace(/'<br>'/g, ",").trim().replace(/[*]/g, "").trim().replace(/=/g, ""));


   // thisMeeting.notes = ($(elem).find('td').find('div').eq(0).text().trim().replace(/'<br>'/g, ",").trim().replace(/[*]/g, "").trim().replace(/=/g, " "));

   thisMeeting.notes = ($(elem).find('td').find('div').eq(0).text().replace(/'<br>'/g, ",").replace(/[*]/g, "").trim().replace(/=/g, ": ").replace(/ {2,}/g, ' '));

 

 if (thisMeeting.notes === "Fri.6:30: Steps 3 & 11") {
        thisMeeting.notes = "Fri. 6:30: Steps 3 & 11.";
    }
 if (thisMeeting.notes ==="Sun.7:30am,Tue.6:15pm B & Wed.6:15pm C : Meditation Wkshp., Sun. 9:30am Step: Back to Basics, Fri.7:30pm: Anniv.every Fri. Thurs. 8am back room, Gratitude") {
        thisMeeting.notes = "Sun. 7:30am, Tue. 6:15pm B & Wed. 6:15pm C : Meditation Workshop, Sun.9:30am Step: Back to Basics, Fri. 7:30pm: Anniv. every Fri. Thurs. 8am back room, Gratitude.";
    }


//     ////////  WHEELCHAIR ACCESS///note changed
    thisMeeting.access = $(elem).find('td').find('span').eq(0).text().trim().split('span');

    if (thisMeeting.access === "Wheelchair Access") {
        thisMeeting.wheelchairAccess = true;
        ///how to remove array here
       //thisMeeting.wheelchairAccess = thisMeeting.wheelchairAccess.replace('["', '');
    }
    
//////GETS DAY as object - day, startTime, endTime, mtgType, interest  
    thisMeeting.meetings = $(elem).find('td').eq(1).html().split('<br>'); 

    groups.push(thisMeeting);

});

 console.log(groups);
 console.log(groups.length);
fs.writeFileSync('raw_groups5.txt', JSON.stringify(groups));



////////////////////STARTER CODE
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