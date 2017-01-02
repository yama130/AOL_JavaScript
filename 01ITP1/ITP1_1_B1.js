process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data',function(chunk)
{
  var x = parseInt(chunk.trim(),10);
  console.log(x * x * x);
});
