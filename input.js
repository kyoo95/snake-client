const handUserInput = function(key) {
  //ctrl + c exit implementation
  if (key === '\u0003') {
    console.log("Exiting")
    process.exit();
  }
}


const setupInput = function() {
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
stdin.resume();
stdin.on('data', (handUserInput));
return stdin;
}

module.exports = { setupInput };