const http = require("http");
const port = process.env.PORT || 3001;
http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("kz works on port " + port);
}).listen(port, () => console.log("kz server started on " + port));
