let connection;


const handUserInput = function(key) {
  //ctrl + c exit implementation
  if (key === '\u0003') {
    console.log("Exiting")
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up')
  }
  if (key === 's') {
    connection.write('Move: down')
  }
  if (key === 'a') {
    connection.write('Move: left')
  }
  if (key === 'd') {
    connection.write('Move: right')
  }
}


const setupInput = function(conn) {
connection = conn;
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
stdin.resume();
stdin.on('data', (handUserInput));
return stdin;
}

module.exports = { setupInput };