//loop attempt using array-loop and for to go through the 10 htmls and write body text to all.txt 
//not getting this to work 

var request = require('request');
var fs = require('fs');
var circulate = require('array-loop');

var AA = circulate["http://visualizedata.github.io/datastructures/data/m01.html","http://visualizedata.github.io/datastructures/data/m02.html","http://visualizedata.github.io/datastructures/data/m03.html","http://visualizedata.github.io/datastructures/data/m04.html","http://visualizedata.github.io/datastructures/data/m05.html","http://visualizedata.github.io/datastructures/data/m06.html","http://visualizedata.github.io/datastructures/data/m07.html","http://visualizedata.github.io/datastructures/data/m08.html","http://visualizedata.github.io/datastructures/data/m09.html","http://visualizedata.github.io/datastructures/data/m10.html"];

for(var i=0; i<10; i++){
  request(AA, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/all.txt', body);
  }
  else {console.error('request failed')}
});
}
