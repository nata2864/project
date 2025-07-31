const http = require("http");
const getUsers = require("./modules/users");

const hostname = "127.0.0.1";
const port = 3003;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${hostname}:${port}`);
  const params = url.searchParams;
  const keys = [...params.keys()];

  if (params.has("hello") && keys.length === 1) {
    const name = params.get("hello");

    if (!name || name.trim() === "") {
      res.statusCode = 400;
      res.setHeader("Content-Type", "text/plain");
      res.end("Enter a name");
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end(`Hello, ${name}.`);
    }

  } else if (params.has("users") && keys.length === 1) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(getUsers());

  } else if (keys.length === 0) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, World!");
  } else {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Сервер запущен по адресу http://${hostname}:${port}/`);
});
