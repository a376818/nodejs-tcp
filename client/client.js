const net = require("net");
const readline = require("readline-sync");

const options = {
  port: 4000,
  host: process.env.SERVER_HOST || "0.0.0.0",
};

const client = net.createConnection(options);

client.on("connect", () => {
  console.log("¡¡Conexión satisfactoria!!");
  sendLine();
});

client.on("error", (err) => {
  console.log(err.message);
});

client.on("data", (data) => {
  console.log("El servidor dice: " + data);
  sendLine();
});

function sendLine() {
  var line = readline.question("\nDigite alguna cosa\t");
  
  if (line == "0") {
    client.end();
  } else {
    client.write(line);
  }
}
