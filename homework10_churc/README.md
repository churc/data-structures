  AA map data (Mongo, node):

apped4_ah.js: takes all information from text files (/home/ubuntu/workspace/zipData/01.txt and 02/03/04/05) and saves in new files (raw_groups1.txt and 2/3/4/5).
  
clean_apped4_ah.js: 57 objects with information on txt.1 file for AA area 01; clean to go to Mongo. This takes apped4_ah.js and cleans data up for AA areas 1,2,3,4 and 5 (so far).
  
clean_apped6_ah.js: INSERTS 'groups1.txt': text file 1 into MONGO DB. groups1.txt was generated in clean_apped4_ah.js

app6.js: parses addresses 'meetingsArray.txt' for area code 01 and gets latLong for each address, saved in 'meetings.txt'. 

geo_apped6Mongo.js: INSERTS 'meetings.txt' latLong into MONGO DB collection 'meetings. Geocode has 22 location addresses and latLong for area code 01.

AqueryMongo.js: aggregates Mongo db documents and returns query into server.js

URL: https://homework1-churc.c9users.io/ and see screenshot



  Arduino photocell sensor light readings (AWS, sublime text, terminal. Query in node):

appst.js: INSERTS photocell sensor readings into AWS table, lightR12. Window number, light reading, time created.

queryLightAWS3.js: queries RDS db and returns query into server.js

URL: https://class10-churc.c9users.io/  and see screenshot 
