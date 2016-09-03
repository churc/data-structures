var request = require('request');
var fs = require('fs');

request('http://visualizedata.github.io/datastructures/data/m01.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/101.txt', body);
  }
  else {console.error('request failed')}
})

request('http://visualizedata.github.io/datastructures/data/m02.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/102.txt', body);
  }
  else {console.error('request failed')}
})

request('http://visualizedata.github.io/datastructures/data/m03.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/103.txt', body);
  }
  else {console.error('request failed')}
})

request('http://visualizedata.github.io/datastructures/data/m04.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/104.txt', body);
  }
  else {console.error('request failed')}
})

request('http://visualizedata.github.io/datastructures/data/m05.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/105.txt', body);
  }
  else {console.error('request failed')}
})

request('http://visualizedata.github.io/datastructures/data/m06.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/106.txt', body);
  }
  else {console.error('request failed')}
})

request('http://visualizedata.github.io/datastructures/data/m07.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/107.txt', body);
  }
  else {console.error('request failed')}
})

request('http://visualizedata.github.io/datastructures/data/m08.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/108.txt', body);
  }
  else {console.error('request failed')}
})

request('http://visualizedata.github.io/datastructures/data/m09.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/109.txt', body);
  }
  else {console.error('request failed')}
})

request('http://visualizedata.github.io/datastructures/data/m10.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/110.txt', body);
  }
  else {console.error('request failed')}
})