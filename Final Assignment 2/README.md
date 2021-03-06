<H3> Writing Arduino board photocell sensor readings to AWS db (PostgreSQL, RDS) and querying the database</H3>
<H4> Photoresistors reading light on 2 windowsills for 12 hours / Arduino / Johnny-Five / AWS RDS</H4>
<H5> Light readings are in GMT (UTC): 6.30am - 6.30p EST is 11.30 - 23.30 GMT</H5>
<H6>Arduino photocell sensor light readings (AWS RDS, sublime text, terminal. Query in node)<br>
<br>
See code folder:<p><br>
appLight.js / sublime text: inserts photocell sensor readings into AWS table, lightP. (window number, light reading, time).<br>
</p>
<p>
queryLightAWS3.js / class 10: queries RDS db and returns query into server.js. <br>
URL: https://class10-churc.c9users.io/ - and screenshots below. </p>
<br>
The aim was to record light change over the course of the day on 2 windowsills to find the optimal light/placing for edible plants. The project was inspired by attempts to grow plants at home with a new building going up across the street blocking out direct sunlight for part of the day.<br>
Questions:
<ul>
   <li>what times of day do the plants get light?</li>
   <li>which windowsill is brighter / can both windowsills be used for growing plants?</li>
   <li>what is the highest reading?</li>
   <li>overall assessment of light during the day - is there enough light to grow edible plants indoors?</li>
 </ul>
<br>

<p align="center", margin-bottom="0px">
<img src=https://github.com/churc/data-structures/blob/master/Final%20Assignment%202/IMG_3776window1.jpg>    <img src=https://github.com/churc/data-structures/blob/master/Final%20Assignment%202/IMG_3772window2.jpg>
<H6 align="center", margin-top="0px", border-top="0px">Windows 1 and 2</H6>
</p>
<p align="center">
<br>
<p align="center">
<img src=https://github.com/churc/data-structures/blob/master/Final%20Assignment%202/Photocell1_2_2.jpg>
<H6 H6 align="center">2 photoresistors</H6>
<H5>Data collection: </H5>
<H6>Data was collected from 2 windows during daylight hours (6.30am – 6.30pm) over 3 days (to check weather differences across days) using two arduino breadboards and two photocell sensors. Data was streamed to AWS RDS for light reading and time of reading with a 120000 delay.<br>
The aim was to plot light against time of day for each window. 
Light levels were checked against readings and grouped into brightness in order to understand the data more quickly and to provide a color code for plotting. The idea was to plot 12 hour data on a circle to easily show the relation of light to time of day.</H6>
<H5>Light level groupings:</H5>
<H6><ul>
   <li>very bright: greater than 950</li>
   <li>bright: between 800 and 950</li>
   <li>light: between 650 and 800</li>
   <li>dim: between 500 and 650</li>
   <li>very dim: between 350 and 500</li>
   <li>dusk: between  200 and 350</li>
   <li>nearly dark: between 50 and 200</li>
   <li>night: less than 50</li>
 </ul>
</H6>
</p>
<p align="center">
<img src= https://github.com/churc/data-structures/blob/master/Final%20Assignment%202/PhotocellReadings.jpg> 
<H6 align="center">Readings</H6>
</p>
<H6>Examples of SQL query on AWS database (see queryLightAWS3.js/class10 c9): <ul>
<li>This queries readings on Dec. 5th, from 6.30am - 6.30pm to get the highest reading for window 1:<br>
<i>var queryHght04 = "SELECT * FROM lightP AS hght1 WHERE dateCreated &gt;'2016-12-05 11:30:00' AND dateCreated &lt;'2016-12-05 23:30:00' AND windowNo ='1' ORDER BY reading DESC LIMIT 1;"; </i></li>
<li>This queries readings on Dec. 5th, from 6.30am - 6.30pm which are between 800 and 950 and assigns them as bright:<br>
<i>var queryBright = "SELECT windowNo, reading, EXTRACT(HOUR from dateCreated) as hr, EXTRACT(MINUTE from dateCreated) as min  FROM lightP AS bt WHERE dateCreated &gt;'2016-12-05 11:30:00' AND dateCreated &lt;'2016-12-05 23:30:00' AND reading &gt;800 AND reading &lt;950 ORDER BY dateCreated;"; </i></li>
<li>This queries readings on Dec. 7th, simplifies the date time stamp into hours and mins (UTC) and orders by reading:<br>
<i>var queryLong2 = "SELECT windowNo, reading, EXTRACT(HOUR from dateCreated) as hr, EXTRACT(MINUTE from dateCreated) as min FROM lightP AS long2 WHERE dateCreated &gt;'2016-12-07 11:30:00' AND dateCreated &lt;'2016-12-07 23:30:00' AND reading &lt;1100 ORDER BY reading;";</i>
</li>
<li>This queries readings on Dec. 5th, simplifies the date time stamp into hours and mins (UTC) and orders by time to find times when windowsills are getting good light:<br>
<i>var queryLong3 = "SELECT windowNo, reading, EXTRACT(HOUR from dateCreated) as hr, EXTRACT(MINUTE from dateCreated) as min FROM lightP AS long3 WHERE dateCreated &gt;'2016-12-05 11:30:00' AND dateCreated &lt;'2016-12-05 23:30:00' AND windowNo = '2' AND reading &gt;650 ORDER BY hr;";</i></li><br>

<p align="center">
<img src=https://github.com/churc/data-structures/blob/master/Final%20Assignment%202/Photocell1_1.jpg>    <img src= https://github.com/churc/data-structures/blob/master/Final%20Assignment%202/Screen%20Shot%202016-12-11%20at%203.31.20%20AM_query.png> 
<H6 H6 align="center">Photoresistor 1 and SQL query on AWS database</H6>
</p>
<br>
<p></p>
<br>

<p align="center">
<img src= https://github.com/churc/data-structures/blob/master/Final%20Assignment%202/Screen%20Shot%202016-12-11%20at%203.31.14%20AM_query.png>
<H6 align="center">SQL query on AWS database</H6>
</p><br><br>

<p align="center">
<img src=https://github.com/churc/data-structures/blob/master/Final%20Assignment%202/Screen%20Shot%202016-12-18%20at%2011.47.08%20PM_grpQuery.png>
<H6 align="center">SQL queries to group readings by light level - color and plot in 12 hour time circle</H6>
</p><br><br>
<p align="center">
<img src=https://github.com/churc/data-structures/blob/master/Final%20Assignment%202/Sketch.png>
<H6 align="center">12-hour time circle sketch in r - not actual data</H6>
</p><br>

<H6>Query running on cloud 9 (https://class10-churc.c9users.io/) - Dec. 7th 'very dim' group readings between 350 and 500 for each window and order by time. Group 'dim' readings between 500 and 650 for each window and order by time</H6>
<p align="center">
<img src=https://github.com/churc/data-structures/blob/master/Final%20Assignment%202/Screen%20Shot%202016-12-18%20at%2010.17.58%20PM_query.png>
<H6 align="center">cloud9 query</H6>
</p>

<p align="center">
<img src=https://github.com/churc/data-structures/blob/master/Final%20Assignment%202/Screen%20Shot%202016-12-18%20at%2010.17.21%20PM_apiQuery.png>
<H6 align="center">cloud9 array of results of 'very dim', 'dim' query above</H6>
</p><br>

<p align="center">
<img src=https://github.com/churc/data-structures/blob/master/Final%20Assignment%202/Sketch_linesmall.png>
<H6 align="center">Second sketch of 12-hour circle, using lines from center. This is drawn onto a sketch from r</H6>
</p>

