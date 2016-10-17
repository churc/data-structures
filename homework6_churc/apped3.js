//homework 6 - take all information from txt file and save in new file for final project
// cleaning up further in a separate script // from class 3 apped2.js
//WORKING ON CLEANING SPECIFIC LINES HERE// BROUGHT IN LAT LONG FILE
//notes and tryouts 

// var request = require('request');
var fs = require('fs');


var content = JSON.parse(fs.readFileSync('/home/ubuntu/workspace/data/allinfo1.txt'));
console.log(content);


// for address lat long: join to var content
var geo = JSON.parse(fs.readFileSync('/home/ubuntu/workspace/data/meetings.txt'));
//console.log(geo);

/////    EXAMPLE AH
//  for (var i=0; i < content.length; i++) {
//   var thisData = content[i].day[0];
// // var thisData2 = content[i].day[1];
// // //  var wc = content[i].access; 
//  //  var day = thisData.substring(3, thisData.indexOf(' From'));
//   var time = thisData.substring(thisData.indexOf('</b>  ') + 6)
//  // console.log(day);
//  console.log(time)
//  //console.log(thisData2.trim() + 'XXXXXXXX')
// // //  console.log(wc + 'XXXX')
// }

//////////////////////////////////
////HOW TO JOIN LAT LONG AND ADDRESS - THEN how to join this with the main file
for (var i = 0; i < geo.length; i++) {
 var thisGeo2 = geo[i].address;
 var thisGeo1 = thisGeo2.split('+').join(" ");
 if (thisGeo1 === "22 Barclay Street- basement chapel, New York, NY") {
  thisGeo1 = "22 Barclay Street, New York, NY";
 }
 else if (thisGeo1 === "283 W. Broadway, New York, NY") {
  thisGeo1 = "283 West Broadway, New York, NY";
 }
var thisGeo = thisGeo1.split();
// var thisGeo = thisGeo1;
 //var latL = geo[i].latLong;
 //console.log(latL);
// console.log(geo);
// var fullGeo = thisGeo.split(','[1]).join(latL[i]);
//console.log(thisGeo);
}

///To join geo address and latlong
// for (var i = 0; i < geo.length; i++) {
//   var geo = geo[i].address;
//  var  = fullTime.substring().split(',').join(day1[i],  "" + cleanAll[i]);
//  var fullTime3 = fullTime2.replace(/<b>/g, "");
//  var fullTime4 = fullTime3.replace(/[</b>]/g, " ");
//  var fullTime5 = fullTime4.replace(/\s+/g, " ");
//  var fullTime6 = fullTime5.trim();

// console.log(fullTime6.split(','));


/////////////////////////////////////////
//THIS WORKS FIRST DAY FIRST LINE & TIME


//THIS WORKS to run ALL INFORMATION IN DAY 
//var day =[];
// for (var i = 0; i < content.length; i++) {
//  var thisDay = content[i].day;
// console.log(thisDay);
// }

////NEW trying to clean up all lines of day
//splits day into arrays for each location
// for (var i = 0; i < content.length; i++) {
//  var thisDay = content[i].day;
//  var dayClean = thisDay.split('<br>');
// console.log(dayClean);
// console.log(dayClean.length);
// }

// for (var i = 0; i < content.length; i++) {
//  //var thisDay = content[i].day;
//  var thisDay = content[i].day;  
    
//  var dayClean = thisDay.replace(/"{}r"/g, "").split('<br>');
// //var dayClean = thisDay;
// //console.log(dayClean.length);

// console.log(dayClean);
// }


//  for (var i = 0; i < content.length; i++) {
// var thisData = content[i].day;
// var day2 = thisData.substring(0, thisData.lastIndexOf(' r r')).replace(/\/["rM"]/g, 'M').split('<br>');
//   var day3 = day2;  {
//    if (day3 === ' rMeeting') {
//        day3 =  'Meeting';
//       }
// }  
//  // var dayClean = thisDay.split('<br>');
// //console.log(dayClean.length);

//  console.log(day3);
//  }
 
//  for (var i = 0; i < content.length; i++) {
// var dayClean2 = dayClean[i];
//      if (dayClean2 === "Sat") {
//       dayClean2 =  "";
//      }
//      console.log(dayClean2);
// }



///////////////////////
//THIS WORKS CLEAN to get FIRST DAY FROM, eg 'Thursday From'
// for (var i = 0; i < content.length; i++) {
//  var thisDay1 = dayClean[0];
// //  var day1 = thisDay1.substring(3, thisDay1.trim().indexOf('</b>'));
//  //var day1 = thisDay1;
//  // console.log(thisDay1);
//  // console.log(thisDay1.length);
//  }

// // //THIS WORKS gets the FIRST DAY TIMES 
//  for (var i = 0; i < content.length; i++) {
//   var clean = content[i].day[0]; 
//  var cleanAll = clean.substring(clean.indexOf("</b>")).trim().replace(/<b>/g, "").replace(/[</b>]/g, "");
// //console.log(cleanAll);
//  }

/////THIS WORKS TO JOIN FIRST DAY AND TIMES for full line
// for (var i = 0; i < content.length; i++) {
//  var fullTime = content[i].day[0];
//  var fullTime2 = fullTime.substring().split(',').join(day1[i],  "" + cleanAll[i]);
//  var fullTime3 = fullTime2.replace(/<b>/g, "");
//  var fullTime4 = fullTime3.replace(/[</b>]/g, " ");
//  var fullTime5 = fullTime4.replace(/\s+/g, " ");
//  var fullTime6 = fullTime5.trim();

// console.log(fullTime6.split(','));
// }

/////////////////////////////OUT
// //THIS WORKS to get FIRST TIME CLEAN
// for (var i = 0; i < content.length; i++) {
//  var thisData = content[i].day[0];
//  var time = thisData.substring(thisData.indexOf('</b>  ') + 6, thisData.lastIndexOf("<b>")).trim();
//  console.log(time);
//  //console.log(content.length);
// }

// //THIS WORKS to get 'TO' CLEAN
// for (var i = 0; i < content.length; i++) {
//  var clean = content[i].day[0];
//  var clean2 = clean.substring(clean.lastIndexOf("</b>  " [0]), clean.lastIndexOf("<b>") + 3).trim();
// console.log(clean2);
// }

// //THIS WORKS to get LAST TIME CLEAN
// for (var i = 0; i < content.length; i++) {
//  var thisData2 = content[i].day[0];
//  var time1 = thisData2.substring(thisData2.lastIndexOf("</b>") + 5).trim();
//  console.log(time1);
//  //console.log(time1.length);
// }

//  //GETS whole line TAKES OUT <b> and extra spaces but not </b>
// for (var i = 0; i < content.length; i++) {
//  var fullTime = content[i].day[0];
//  var fullTime2 = fullTime.substring().split(',').join(time[i], clean2[i], "" + time1[i]);
//  var fullTime3 = fullTime2.replace(/<b>/g, "");
//  var fullTime4 = fullTime3.replace(/[</b>]/g, " ");
//  var fullTime5 = fullTime4.replace(/\s+/g, " ");
//  var fullTime6 = fullTime5.trim();

//  console.log(fullTime6.split(','));
// }
////////////////////////OUT

//////////////////////////////////////////
////MEETING TYPE FOR DAY 1
//THIS WORKS to run ALL INFORMATION IN DAY 

// for (var i = 0; i < content.length; i++) {
//  var thisDay = content[i].day;
// console.log(thisDay);
// }


//THIS WORKS to get 'MEETING TYPE' CLEAN
// for (var i = 0; i < content.length; i++) {
//     var mtg = content[i].day[1];
//     var mtgT = mtg.substring(mtg.lastIndexOf("</b>  " [0]), mtg.lastIndexOf("<b>") + 3).trim();
//     var mtgType = mtgT + ":";
//   //  console.log(mtgType);
// }

// //THIS WORKS to get TYPE OF MEETING CLEAN
// for (var i = 0; i < content.length; i++) {
//     var thisType = content[i].day[1];
//     var type = thisType.substring(thisType.lastIndexOf("</b>") + 5).trim();
//   // console.log(type);
// }

// //  //GETS WHOLE OF MEETING TYPE LINE CLEAN
// for (var i = 0; i < content.length; i++) {
//     var full1Time = content[i].day[1];
//     var full1Time2 = full1Time.substring().split(',').join(mtgType[i], +type[i]);
//     var full1Time3 = full1Time2.replace(/<b>/g, "");
//     var full1Time4 = full1Time3.replace(/[</b>]/g, " ");
//     var full1Time5 = full1Time4.replace(/\s+/g, " ");
//     var full1Time6 = full1Time5.trim();
// //   console.log(full1Time6.split(','));
// }



////////////////////////////////////////////////
////SPECIAL INTEREST LINE

//THIS WORKS to run ALL INFORMATION IN DAY 
// for (var i = 0; i < content.length; i++) {
//     var thisDay = content[i].day;
//     console.log(thisDay);
// }


// //THIS WORKS to get 'SPECIAL INTEREST' CLEAN
// for (var i = 0; i < content.length; i++) {
//     var special = content[i].day[2];
//     var specialInt = special.substring(special.lastIndexOf("</b>  " [0]), special.lastIndexOf("<b>") + 3).trim();
//     if (specialInt === "Special Interest") {
//         specialInt === "Special Interest:";
//     }
//     else {
//         specialInt === "";
//     }
//     //   console.log(specialInt);
// }

// // //THIS WORKS to get SPECIAL INT TYPE CLEAN
// for (var i = 0; i < content.length; i++) {
//     var spInType = content[i].day[2];

//     var IntType = spInType.substring(spInType.lastIndexOf("</b>") + 5).trim();
//     if (IntType === "Special Interest") {
//         IntType === "Special Interest:";
//     }
//     else {
//         IntType === "";
//     }
//      // console.log(IntType);
// }

// // //  //GETS WHOLE OF SPEC INT LINE CLEAN
// for (var i = 0; i < content.length; i++) {
//     var Interest = content[i].day[2];
//     var Interest2 = Interest.substring().split(',').join(specialInt[i], IntType[i]);
//     var Interest3 = Interest2.replace(/<b>/, "");
//     var Interest4 = Interest3.replace(/[</b>]/, " ");
//     var Interest5 = Interest4.replace(/[/b>]/, " ");
//     var Interest6 = Interest5.replace(/[b>]/, " ");
//     var Interest7 = Interest6.replace(/[>]/, " ");
//     var Interest8 = Interest7.replace(/\s+/g, " ");
//     var Interest9 = Interest8.trim();
//  //  console.log(Interest9.split(' ,'));
// }

// ////////////////////////////////////////////
// ///ONTO DAY LINE 3: 2nd DAY of MEETINGS
// ///IF THE MEETING VENUE HAS MORE THAN ONE DAY OF MTGS

// //THIS WORKS to run ALL INFORMATION IN DAY 

// // for (var i = 0; i < content.length; i++) {
// //  var thisDay = content[i].day;
// // console.log(thisDay);
// // }

// ////THIS WORKS TO SHOW ALL THE 2nd DAY & TIME
// // for (var i = 0; i < content.length; i++) {
// //  var thisDay = content[i].day[3];
// // console.log(thisDay);
// // }

// // //THIS WORKS to get 'to' CLEAN
// for (var i = 0; i < content.length; i++) {
//  var clean3 = content[i].day[3];
//  var clean2 = clean3.substring(clean3.lastIndexOf("</b>  " [0]), clean3.lastIndexOf("<b>") + 3).trim();
//   //console.log(clean2);
// }

// //THIS WORKS to get END TIME of 2nd DAY CLEAN
// for (var i = 0; i < content.length; i++) {
//     var thisData3 = content[i].day[3];
//     var time3 = thisData3.substring(thisData3.lastIndexOf("</b>") + 5).trim();
//   //   console.log(time3);
// }

// //  //GETS WHOLE OF DAY 2 CLEAN
// for (var i = 0; i < content.length; i++) {
//     var full2Time = content[i].day[3];
//     var full2Time2 = full2Time.substring().split(',').join(clean2[i], time3[i]);
//     var full2Time3 = full2Time2.replace(/<b>/g, "");
//     var full2Time4 = full2Time3.replace(/[</b>]/g, " ");
//     var full2Time5 = full2Time4.replace(/\s+/g, " ");
//     var full2Time6 = full2Time5.trim();
//  //    console.log(full2Time6.split(','));
// }

// ////////////////////////////////////////////////////


// ////MEETING TYPE FOR DAY 2
// //THIS WORKS to run ALL INFORMATION IN DAY 

// for (var i = 0; i < content.length; i++) {
//  var thisDay = content[i].day;
// console.log(thisDay);
// }

// ////SHOWS MEETING TYPE FULL INFO FOR 2nd DAY
// for (var i = 0; i < content.length; i++) {
//  var thisType2 = content[i].day[4];
//  console.log(thisType2);
// }


// //THIS WORKS to get 'MEETING TYPE' CLEAN
// for (var i = 0; i < content.length; i++) {
//     var mtg2 = content[i].day[4];
//       //     var mtg3 = mtg2.substring(mtg2.lastIndexOf("</b> "[0]), mtg2.lastIndexOf("<b>") + 3);

//       //  var mtg3 = mtg2.lastIndexOf("<b>");
//     if (mtg3 === "undefined") {
//         mtg3 === "";
//     }
//     else {
//       var mtg3 = mtg2.substring(0, mtg2.lastIndexOf("<b>")).trim();
//     }
   
//   //  console.log(mtgType2);
//   console.log(mtg3);
// }

// //THIS WORKS to get TYPE OF MEETING CLEAN
// for (var i = 0; i < content.length; i++) {
//     var this2Type = content[i].day[4];

//     var type2 = this2Type.substring(this2Type.lastIndexOf("</b>") + 5).trim();
//      console.log(type2);
//     console.log(type2.length);
// }

//  //GETS WHOLE OF MEETING TYPE LINE CLEAN
// for (var i = 0; i < content.length; i++) {
//     var full22Time = content[i].day[4];
//     var full22Time2 = full22Time.substring().split(',').join(mtg3[i], type2[i]);
//     var full22Time3 = full22Time2.replace(/<b>/g, "");
//     var full22Time4 = full22Time3.replace(/[</b>]/g, " ");
//     var full22Time5 = full22Time4.replace(/\s+/g, " ");
//     var full22Time6 = full22Time5.trim();
//     console.log(full22Time6.split(','));
// }




//THIS WORKS to run ALL INFORMATION IN DAY 
//var day =[];
// for (var i = 0; i < content.length; i++) {
//  var thisDay = content[i].day;
// console.log(thisDay);
// }


//THIS WORKS CLEAN to get FIRST DAY FROM, eg 'Thursday From'
// for (var i = 0; i < content.length; i++) {
//  var thisDay1 = content[i].day[0];
//  var day1 = thisDay1.substring(3, thisDay1.trim().indexOf('</b>'));
//   console.log(day1);
//   console.log(content.length);
//  }

//THIS WORKS gets the whole TIME LINE but does also get <b>
// for (var i = 0; i < content.length; i++) {
//  var clean = content[i].day[0]; 
// var cleanAll = clean.substring(clean.indexOf("</b>")).trim();
// //console.log(cleanAll);
// }
//}

fs.writeFileSync('/home/ubuntu/workspace/data/allinfo2.txt', JSON.stringify(content));