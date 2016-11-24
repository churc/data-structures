AA map data (node):
clean_apped6_ah.js: INSERTS 'groups1.txt': text file 1 into MONGO DB. groups1.txt was generated in clean_apped4_ah.js

clean_apped4_ah.js: 55 objects with information on txt.1 file for AA area 01; clean to go to Mongo. TAKES apped4_ah.js and cleans it up

apped4_ah.js: takes all information from txt file (/home/ubuntu/workspace/zipData/01.txt) and saves in new file (raw_groups1.txt).
  Contains all info for AA area 01. THIS TAKES EACH BlDG, NAME, DAY, MTG TYPE etc AND PARSES IT INTO RAW DATA FILE

app6.js: parses addresses (meetingsArray.txt) for area code 01 and gets latLong for each address, saved in meetings.txt. 
Go to geo_apped6.js (class 4) for uploading meetings.txt file into Mongo db collection meetings.

Arduino photocell sensor light readings (sublime text, terminal):
appst.js: INSERTS photocell sensor readings into AWS table, lightR12. Window number, light reading, time created.
