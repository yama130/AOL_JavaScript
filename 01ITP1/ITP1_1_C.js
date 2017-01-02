process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data',function(chunk)
{
  var input = chunk;
  input = input.split('\n');
  var x = input[0].split(' ')[0];
  var y = input[0].split(' ')[1];
  console.log(x * y + ' ' + (x * 2 + y * 2));
});
