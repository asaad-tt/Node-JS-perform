const http = require("http");
const PORT = process.env.PORT;
const fs = require("fs");
const { error } = require("console");

const server = http.createServer((req, res) => {
  const handleRead = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (error, data) => {
      res.writeHead(statusCode, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });
  };
  if (req.url === "/") {
    handleRead(200, "index.html");
  } else if (req.url === "/contact") {
    handleRead(200, "contact.html");
  } else if (req.url === "/about") {
    handleRead(200, "about.html");
  } else {
    handleRead(404, "error.html");
  }
});

server.listen(PORT, () => {
  console.log("server is running ");
});
