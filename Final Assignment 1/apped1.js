////apped1.js scrapes the 10 html AA Manhattan zones codes 1-10 and saves them in text files - zipData/ 01.txt - 10.txt
///go to apped4_ah.js 


var request = require('request');
var fs = require('fs');

request('http://visualizedata.github.io/datastructures/data/m01.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //fs.writeFileSync('/home/ubuntu/workspace/zipData/01.txt', body);
  }
  else {console.error('request failed')}
});

request('http://visualizedata.github.io/datastructures/data/m02.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/zipData/02.txt', body);
  }
  else {console.error('request failed')}
});

request('http://visualizedata.github.io/datastructures/data/m03.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/zipData/03.txt', body);
  }
  else {console.error('request failed')}
});

request('http://visualizedata.github.io/datastructures/data/m04.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/zipData/04.txt', body);
  }
  else {console.error('request failed')}
});

request('http://visualizedata.github.io/datastructures/data/m05.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/zipData/05.txt', body);
  }
  else {console.error('request failed')}
});

request('http://visualizedata.github.io/datastructures/data/m06.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/zipData/06.txt', body);
  }
  else {console.error('request failed')}
});

request('http://visualizedata.github.io/datastructures/data/m07.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/zipData/07.txt', body);
  }
  else {console.error('request failed')}
});

request('http://visualizedata.github.io/datastructures/data/m08.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/zipData/08.txt', body);
  }
  else {console.error('request failed')}
});

request('http://visualizedata.github.io/datastructures/data/m09.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/zipData/09.txt', body);
  }
  else {console.error('request failed')}
});

request('http://visualizedata.github.io/datastructures/data/m10.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/zipData/10.txt', body);
  }
 else {console.error('request failed')}
});