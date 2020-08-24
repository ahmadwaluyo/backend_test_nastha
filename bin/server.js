const env = process.env.NODE_ENV || "development";

if (env) {
    require("dotenv").config({ path: process.cwd() + '/.env'});
}

const app = require("../app");
const http = require("http");
const server = http.createServer(app);

server.listen(process.env.PORT, () => {
    console.log("This server running on port: ", process.env.PORT);
})