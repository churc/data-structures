<p>Update note on status of project: The MongoDB query runs - see c9/ AqueryMongo.js / homework1 https://ide.c9.io/churc/homework1 and in https://github.com/churc/data-structures/FinalAssignment1 <br>
The 10 Manhattan zones have the correct number of meetings.<br>
8 of the 10 zone files have lat long and are in the MongoDB<br>
However the map markers are not showing.<br>
Next steps are to geocode the remaining 2 zones, and to get the map markers on the map working correctly.<br></p>
<H3> Cleaning meeting information for Manhattan zones 1 - 10, storing with geocodes in MongoDB (NoSQL) and querying the database</H3>
<H5> Connect MongoDB query output to Google Maps API to show upcoming meetings in local area</H5>

<H6>AA map data (MongoDB, node), working with Manhattan zones 1 - 10:<br>
<p>
<i>apped1.js/ class 3</i>: scrapes AA meeting html Manhattan zones 1 - 10 and saves in 01.txt - 10.txt files (/home/ubuntu/workspace/zipData/01.txt - /10.txt).</p><br>
<p>
<i>apped4_ah.js/ class 3</i>: takes all information from 01.txt - 10.txt files (/home/ubuntu/workspace/zipData/01.txt - /10.txt) and saves in ten new files (raw_groups1.txt - /10.txt).</p>
<br>
<p>
<i>clean_apped4_ah2.js/class 3</i>: This takes apped4_ah.js and cleans data up for AA areas 1 to 10 (Manhattan). Saved in ten text files (groups1.txt - /10.txt).</p><br>
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
<p><H6>
URL: https://homework1-churc.c9users.io/</H6></p>
<br>
<H6 align = "center"> <img src=https://github.com/churc/data-structures/blob/master/Final%20Assignment%201/Screen%20Shot%202016-12-18%20at%202.14.02%20AM_fullInfo.png>
<br>
<H6 align = "center"> <img src=https://github.com/churc/data-structures/blob/master/Final%20Assignment%201/Screen%20Shot%202016-12-18%20at%202.20.42%20AM_query.png>


