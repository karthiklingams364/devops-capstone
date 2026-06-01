const http = require("http");

http.createServer((req, res) => {
  res.end("🚀 DevOps Capstone Running on AWS!");
}).listen(3000);
