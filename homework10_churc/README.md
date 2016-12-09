  AA map data (Mongo, node):

apped4_ah.js / class 3: takes all information from text files (/home/ubuntu/workspace/zipData/01.txt - /10.txt) and saves in ten new files (raw_groups1.txt - /10.txt).
  
clean_apped4_ah.js / class 3: This takes apped4_ah.js and cleans data up for AA areas 1 to 10 (Manhattan). Saved in ten text files (groups1.txt - /10.txt).

class3geo.js  / class 3: This takes text files from clean_apped4_ah.js and gets lat long for each address. Saved in ten text files (groupslatLg1.txt - /10.txt).
  
clean_apped6_ah.js / class 3: inserts the groups1 - 10 text files and the groupslatLg1-10 text files into MONGO DB. 

?app6.js / homework 1: parses addresses 'meetingsArray.txt' for area code 01 and gets latLong for each address, saved in 'meetings.txt'. 

?geo_apped6Mongo.js / class 4: inserts 'meetings.txt' latLong into MONGO DB collection 'meetings'. Geocode has 22 location addresses and latLong for area code 01.


AqueryMongo.js / homework 1: aggregates Mongo db documents and returns query into server.js

URL: https://homework1-churc.c9users.io/ and see screenshot



  Arduino photocell sensor light readings (AWS, sublime text, terminal. Query in node):

appLight.js / sublime text: inserts photocell sensor readings into AWS table, lightP. (Window number, light reading, time).

queryLightAWS3.js / class 10: queries RDS db and returns query into server.js

URL: https://class10-churc.c9users.io/  and see screenshot 
![my description](https://raw.githubusercontent.com/churc/data-structures/master/homework10_churc/Screen%20Shot%202016-11-25%20at%207.06.47%20PM.png "This is my title")
