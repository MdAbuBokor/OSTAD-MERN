const http = require("node:http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname;
  if (pathname == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("This is Home Page");
    res.end();
  } else if (pathname == "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("This is About Page");
    res.end();
  } else if (pathname == "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("This is Contact Page");
    res.end();
  } else if (pathname == "/file-write") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.writeFile("demo.text", "hello world", (err) => {
      if (err) {
        console.log(err);
      }
    });
    res.write("demo.text file is created with content : hello world ");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("Page Not Found");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
