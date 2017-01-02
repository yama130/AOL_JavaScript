var readable = process.stdin;
readable.resume();
readable.setEncoding( 'utf-8' );
readable.on( 'data', function( chunk ) {
  var x = chunk.split(' ');
  x[0] = Number(x[0])
  x[1] = Number(x[1])
  x[2] = Number(x[2])
  x.sort();
  console.log(x[0] + ' ' + x[1] + ' ' + x[2]);
} )
