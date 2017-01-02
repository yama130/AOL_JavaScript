var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function(line) {
    lines.push(line);
    console.log(line * line * line);
});
reader.on('close', function() {
    //do something
});
