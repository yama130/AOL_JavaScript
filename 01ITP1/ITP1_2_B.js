var readable = process.stdin;
readable.resume();
readable.setEncoding( 'utf-8' );
readable.on( 'data', function( chunk ) {
  var data = chunk.split( ' ' );
  var a = parseInt( data[0] );
  var b = parseInt( data[1] );
  var c = parseInt( data[2] );

  if( a < b && b < c && -1 < a && c < 101) {
      console.log( 'Yes' );
  } else {
    console.log( 'No' );
  }
} )
