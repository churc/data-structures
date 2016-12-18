<H3> Reading photocell sensors using Arduino boards and sending to AWS </H3>
<H4> Photoresistors reading light on 2 window sills for 12 hours / Arduino / Johnny-Five / AWS RDS</H4>
<H5> Light readings are in GMT (UTC): 6.30am - 6.30p EST is 11.30 - 23.30 GMT</H5>
<H6>Arduino photocell sensor light readings (AWS RDS, sublime text, terminal. Query in node):
appLight.js / sublime text: inserts photocell sensor readings into AWS table, lightP. (window number, light reading, time).
queryLightAWS3.js / class 10: queries RDS db and returns query into server.js
URL: https://class10-churc.c9users.io/ - screenshots below
The aim was to record light change over the course of the day on 2 windowsills to find the optimal light/placing for edible plants. The project was inspired by attempts to grow plants at home with a new building going up across the street blocking out direct sunlight for part of the day.
Questions:
1.	what times of day do the plants get light?
2.	when there is sunlight is the reading bright or very bright?
3.	what is the light reading when the sun is blocked out by buildings?
4.	which windowsill is brighter / can both windowsills be used for growing plants?
5.	overall assessment of light during the day - is there enough light to grow edible plants indoors?
</H6>

<p align="center", margin-bottom="0px">
<img src=https://github.com/churc/data-structures/blob/master/Final%20Assignment%202/IMG_3776window1.jpg>    <img src=https://github.com/churc/data-structures/blob/master/Final%20Assignment%202/IMG_3772window2.jpg>
<H6 align="center", margin-top="0px">Windows 1 and 2</H6>
</p>
<p align="center">
<br>
<p align="center">
<img src=https://github.com/churc/data-structures/blob/master/Final%20Assignment%202/Photocell1_2.jpg>
<H6 H6 align="center">2 photoresistors and SQL query on AWS database</H6>
</p>
<br>
</p>
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
