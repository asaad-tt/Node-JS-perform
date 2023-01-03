// make first server  ***********

const http = require("http");

const myServer = http.createServer((req, res) => {
  res.writeHead(205, { "Content-Type": "text/plain" });
  res.write("server is running");
  res.end();
});

myServer.listen(3000, () => {
  console.log("server runnung cmd");
});
