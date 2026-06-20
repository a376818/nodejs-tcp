const net = require("net");
const readline = require("readline-sync");
const server = net.createServer();

server.on("connection", (socket) => {
  socket.on("data", (data) => {
    console.log("\nMensaje recibido desde el cliente: " + data);
    sendLine(socket);
  });

  socket.on("close", () => {
    console.log("Comunicación finalizada");
  });

  socket.on("error", (err) => {
    console.log(err.message);
  });
});

server.listen(4000, () => {
  console.log(
    "El servidor está escuchando en la puerta",
    server.address().port,
  );
});

function sendLine(socket) {
  var line = readline.question("\nDigite alguna cosa\t");

  if (line == "0") {
    socket.end();
  } else {
    socket.write(line);
  }
}