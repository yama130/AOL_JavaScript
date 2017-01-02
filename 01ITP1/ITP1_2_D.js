var readable = process.stdin;
readable.resume();
readable.setEncoding( 'utf-8' );
readable.on( 'data', function( chunk ) {
  var a = chunk.split(' ');
  var W = Number(a[0]);
  var H = Number(a[1]);
  var x = Number(a[2]);
  var y = Number(a[3]);
  var r = Number(a[4]);

  if(x - r < 0){console.log('No');}
  else if(y - r < 0){console.log('No');}
  else if(x + r > W){console.log('No');}
  else if(y + r > H){console.log('No');}
  //else{console.log('Yes' + W + H + x + y + r);}
  else{console.log('Yes');}

} )
