<H3> Cleaning meeting information for Manhattan zones 1 - 10, storing with geocodes in MongoDB (NoSQL) and querying the database</H3>
<H5> Connect MongoDB query output to Google Maps API to show upcoming meetings in local area</H5>

<H6>AA map data (MongoDB, node), working with Manhattan zones 1 - 10:<br>
<p>
<i>apped4_ah.js/class 3</i>: takes all information from 01.txt - 10.txt files (/home/ubuntu/workspace/zipData/01.txt - /10.txt) and saves in ten new files (raw_groups1.txt - /10.txt).</p><br>
<p>
<i>clean_apped4_ah2.js/class 3</i>: This takes apped4_ah.js and cleans data up for AA areas 1 to 10 (Manhattan). Saved in ten text files (groups1.txt - /10.txt).</p><br>
<p>
<i>class3geo.js/class 3:</i> This takes text files from clean_apped4_ah2.js and gets lat long for each address. Saved in ten text files (groupslatLg1.txt - /10.txt).</p><br>
<p>
<i>clean_apped8_ah2.js/class 3</i>: takes ten text files (groupslatLg1.txt - /10.txt) and ten text files (groups1.txt - /10.txt) and joins these into ten text files (groupsAddLL01 - /10.txt).</p><br>
<p>
<i>clean_apped6_ah.js/homework 1</i>: inserts the ten groupsAddLL01 - /10.txt files into MongoDB.</p><br>
<p>
<i>AqueryMongo.js/homework 1</i>: aggregates MongoDB documents and returns query into server.js.</p><br>
<p>
URL: https://homework1-churc.c9users.io/ and see screenshot</H6></p>
