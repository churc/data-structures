AA map data (Mongo, node), working with Manhattan area codes 1 - 10:

apped4_ah.js / class 3: takes all information from 01.txt - 10.txt files (/home/ubuntu/workspace/zipData/01.txt - /10.txt) and saves in ten new files (raw_groups1.txt - /10.txt).

clean_apped4_ah2.js / class 3: This takes apped4_ah.js and cleans data up for AA areas 1 to 10 (Manhattan). Saved in ten text files (groups1.txt - /10.txt).

class3geo.js / class 3: This takes text files from clean_apped4_ah2.js and gets lat long for each address. Saved in ten text files (groupslatLg1.txt - /10.txt).

clean_apped8_ah2.js / class 3: takes ten text files (groupslatLg1.txt - /10.txt) and ten text files (groups1.txt - /10.txt) and joins these into ten text files (groupsAddLL01 - /10.txt).

clean_apped6_ah.js / homework 1: inserts the ten groupsAddLL01 - /10.txt files into MONGO DB.

AqueryMongo.js / homework 1: aggregates Mongo db documents and returns query into server.js

URL: https://homework1-churc.c9users.io/ and see screenshot
