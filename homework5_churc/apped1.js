//homework 5 - take all information from txt file and clean up


var fs = require('fs');
var cheerio = require('cheerio'); // npm install cheerio

var striptags = require('striptags');
// var replace = require('replace');

var content = fs.readFileSync('/home/ubuntu/workspace/data/m02meetings.txt');
var meetings = [];


var $ = cheerio.load(content);


$('tbody').find('tr').each(function(i, elem){
   //  ORIGINAL meetings.push($(elem).find('td').eq(0).html().split('<br>')[2].trim().split(',')[0]);
      //location 
 // splits everything separated by a comma into an array of substrings and selects item [0] 
        meetings.push($(elem).find('td').find('h4').eq(0).html().split(',')[0]);
        
     //location name caps
         meetings.push($(elem).find('td').find('b').eq(0).html().split(',')[0]);
     
     //address with zip
        meetings.push($(elem).find('td').eq(0).html().split('<br>')[2].trim());
        meetings.push($(elem).find('td').eq(0).html().split('<br>')[3].trim());
        
        
     //1st day and time   
       meetings.push($(elem).find('td').eq(1).html().split('<br>')[0].trim().split(',')[0].trim());

     //meeting type for 1st day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[1].split('br')[0].trim());
      
     //third line for 1st day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[2].trim().split(',')[0]);
       
     //2nd day and time
        meetings.push($(elem).find('td').eq(1).html().trim().split('<br>')[3]);
        
     //meeting type for 2nd day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[4]);
       // meetings.push($(elem).find('td').eq(1).html().trim().split('<br>')[4]);
     
     //3rd next day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[6]);
       
     // meeting type for 3rd day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[7]);
       
     //third line for 3rd day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[8]);
       
    //  4th day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[9]);
       
    // 4th meeting type for above day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[10]);
       
    //third line for 4th day and time
        meetings.push($(elem).find('td').eq(1).html().trim().split('<br>')[11]);
    
    //  5th day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[14]);
       
    // 5th meeting type for above day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[15]);
 
    //  6th day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[17]);
       
    // 6th meeting type for above day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[18]);
      
    //  7th day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[20]);
       
    // 7th meeting type for above day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[21]);
       
    //  8th day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[23]);
       
    // 8th meeting type for above day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[24]);
  
   //  9th day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[26]);
       
    // 9th meeting type for above day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[27]);
           
   //  10th day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[29]);
       
    // 10th meeting type for above day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[30]);
       
   //  11th day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[32]);
       
   //  11th meeting type for above day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[33]);
       
   //third line for 11th day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[34]);
       
   //  12th day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[36]);
       
   //  12th meeting type for above day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[37]);
       
   //third line for 12th day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[38]);
       
   // 13th day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[40]);
       
   // 13th meeting type for above day and time
        meetings.push($(elem).find('td').eq(1).html().split('<br>')[41]);
       
        
   //details box
        meetings.push($(elem).find('td').find('div').eq(0).text());
       
    //wheelchair access
        meetings.push($(elem).find('td').find('span').eq(0).text());
        
        //.replace(/'\r\n\t\t\t'/g, '').replace(/'<b>'/,'')
        //striptags(meetings);
        // meetings.push($(elem).find("<b>").removeAttr());
  });


console.log(meetings);
fs.writeFileSync('/home/ubuntu/workspace/data/allinfo1.txt', JSON.stringify(meetings));
