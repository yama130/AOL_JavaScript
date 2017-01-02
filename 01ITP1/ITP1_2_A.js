//自作１回しか値取れない
var input = '';
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
  input += chunk;
  input = input.split('\n');
  var a = input[0].split(' ')[0];
  var b = input[0].split(' ')[1];
  if(a > b){
    console.log('a > b' + a + b);
  }else if(a < b){
    console.log('a < b');
  }else if(a == b){
    console.log('a == b')
  }

});
process.stdin.on('end', function() {
  //do something
});
