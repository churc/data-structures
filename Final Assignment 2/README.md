<H3> Reading photocell sensors using Arduino boards and sending to AWS </H3>
<H4> Photoresistors reading light on 2 window sills for 12 hours / Arduino / Johnny-Five / AWS RDS</H4>
<H5> Light readings are in GMT (UTC): 6.30am - 6.30p EST is 11.30 - 23.30 GMT</H5>
<H6>Arduino photocell sensor light readings (AWS RDS, sublime text, terminal. Query in node):
appLight.js / sublime text: inserts photocell sensor readings into AWS table, lightP. (window number, light reading, time).
queryLightAWS3.js / class 10: queries RDS db and returns query into server.js
URL: https://class10-churc.c9users.io/ - screenshots below. <br>
The aim was to record light change over the course of the day on 2 windowsills to find the optimal light/placing for edible plants. The project was inspired by attempts to grow plants at home with a new building going up across the street blocking out direct sunlight for part of the day.<br>
Questions:
<ul>
   <li>what times of day do the plants get light?</li>
   <li>which windowsill is brighter / can both windowsills be used for growing plants?</li>
   <li>what is the highest reading?</li>
   <li>which windowsill is brighter / can both windowsills be used for growing plants?</li>
   <li>overall assessment of light during the day - is there enough light to grow edible plants indoors?</li>
 </ul>
<br>

<p align="center", margin-bottom="0px">
<img src=https://github.com/churc/data-structures/blob/master/Final%20Assignment%202/IMG_3776window1.jpg>    <img src=https://github.com/churc/data-structures/blob/master/Final%20Assignment%202/IMG_3772window2.jpg>
<H6 align="center", margin-top="0px">Windows 1 and 2</H6>
</p>
<p align="center">
<br>
<p align="center">
<img src=https://github.com/churc/data-structures/blob/master/Final%20Assignment%202/Photocell1_2.jpg>
<H6 H6 align="center">2 photoresistors</H6>
<H6>Data collection: <br>
Data was collected from 2 windows during daylight hours (6.30am – 6.30pm) over 3 days (to check weather differences across days) using two arduino breadboards and two photocell sensors. Data was streamed to AWS RDS for light reading and time of reading with a 20000 delay.<br>
The aim was to plot light against time of day for each window. <br>
Light levels were checked against readings and grouped into brightness in order to understand the data more quickly and to provide a color code for plotting. The idea was to plot this 12 hour data on a circle to easily show the relation of light to time of day.<br>
Light level groupings:
<ul>
   <li>very bright: greater than 950</li>
   <li>brightk: between 800 and 950</li>
   <li>lightk: between 650 and 800</li>
   <li>dimk: between 500 and 650</li>
   <li>very dimk: between 350 and 500</li>
   <li>duskk: between  200 and 350</li>
   <li>nearly dark: between 50 and 200</li>
   <li>night: less than 50</li>
 </ul>
</H6>
</p>
<br>

<p align="center">
<img src=https://github.com/churc/data-structures/blob/master/Final%20Assignment%202/Photocell1_1.jpg>    <img src= https://github.com/churc/data-structures/blob/master/Final%20Assignment%202/Screen%20Shot%202016-12-11%20at%203.31.20%20AM_query.png> 
<H6 H6 align="center">Photoresistor 1 and readings</H6>
</p>
<br>
<p></p>
<p align="center">
<img src= https://github.com/churc/data-structures/blob/master/Final%20Assignment%202/PhotocellReadings.jpg> 
<H6 align="center">Readings</H6>
</p>
<br>
<p align="center">

</p>

<p align="center">
<img src= https://github.com/churc/data-structures/blob/master/Final%20Assignment%202/Screen%20Shot%202016-12-11%20at%203.31.14%20AM_query.png>
<H6 align="center">SQL query on AWS database</H6>
</p>
