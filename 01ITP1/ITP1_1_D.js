var input = 0;
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
  input += chunk;
  //spuritが入ると今度はだめ
  //input = input.split('\n');
  var hour = Math.floor(input / 3600);
  var min = Math.floor((input % 3600) / 60);
  var sec = Math.floor((input % 3600) % 60);
  console.log(hour + ':' + min + ':' + sec);

});
process.stdin.on('end', function() {
  //do something
});
