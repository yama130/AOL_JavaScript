//自作成功品
var lines=[];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
  lines.push(line);
  line = line.split('\n');
  var a = parseInt(line[0].split(' ')[0]);
  var b = parseInt(line[0].split(' ')[1]);
  if(a>b){
    console.log('a > b');
  }else if(a<b){
    console.log('a < b');
  }else if(a==b){
    console.log('a == b')
  }

});
process.stdin.on('end', function() {
  //do something
});
