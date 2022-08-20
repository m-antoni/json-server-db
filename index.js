const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000;

// middleware
server.use(middlewares);
server.use('/api/v1',router); // custom endpoint ex. /api/v1/[todo]

server.listen(port);