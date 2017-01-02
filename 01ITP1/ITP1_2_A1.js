//コピー品
var readable = process.stdin;
readable.resume();
readable.setEncoding( 'utf-8' );
readable.on( 'data', function( chunk ) {
  var data = chunk.split( ' ' );
  var a = parseInt( data[0] );
  var b = parseInt( data[1] );
  if( a < b ) {
    console.log( 'a < b' );
  } else if( b < a ) {
    console.log( 'a > b' );
  } else {
    console.log( 'a == b' );
  }
} )
