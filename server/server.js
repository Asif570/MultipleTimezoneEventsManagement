const http = require("http");
require("dotenv").config();
const app = require("./app/app");
const DB = require("./db/db");
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
const URL = process.env.URL || "http://localhost:";
const URI = process.env.URI;
DB(URI);
server.listen(PORT, () => {
  console.log("server is running at---->>>>>> " + URL + PORT);
});
