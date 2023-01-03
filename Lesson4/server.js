// make first server  ***********

const http = require("http");

const myServer = http.createServer((req, res) => {
  res.end("server is running");
});

myServer.listen(3000, () => {
  console.log("server runnung cmd");
});
