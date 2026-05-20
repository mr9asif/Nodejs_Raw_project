import http from "node:http";

import { orderRoutes } from "./routes/order.routes.js";

const server = http.createServer(async (req, res) => {
  await orderRoutes(req, res);
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});