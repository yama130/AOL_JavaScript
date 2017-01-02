//コレは通らなかった。大量データでもイケルと思うけど。
var lines=[];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
  lines.push(line);
  line = line.split('\n');
  var x = line[0].split(' ')[0];
  var y = line[0].split(' ')[1];
  console.log(x * y + ' ' + (x * 2 + y * 2));
});
process.stdin.on('end', function () {
  //do something
  console.log('end');
});
