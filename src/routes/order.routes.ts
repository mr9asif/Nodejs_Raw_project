import type { Req, Res } from "../types/index.js";

import { OrderService } from "../service/order.service.js";
import { sendResponse } from "../utils/sendResponse.js";

const orderService = new OrderService();

async function parseBody(req: Req): Promise<any> {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch (error) {
        reject(error);
      }
    });
  });
}

export const orderRoutes = async (
  req: Req,
  res: Res
): Promise<void> => {
  const url = req.url || "";

  const id = url.split("/")[2];

  try {
    // GET /orders

    if (req.method === "GET" && url === "/orders") {
      const orders = await orderService.getAll();

      return sendResponse(res, "Orders fetched", orders);
    }

    // GET /orders/:id

    if (req.method === "GET" && id) {
      const order = await orderService.getById(id);

      if (!order) {
        return sendResponse(res, "Order not found", null, 404);
      }

      return sendResponse(res, "Order fetched", order);
    }

    // POST /orders

    if (req.method === "POST" && url === "/orders") {
      const body = await parseBody(req);

      const created = await orderService.create(body);

      return sendResponse(res, "Order created", created, 201);
    }

    // PATCH /orders/:id

    if (req.method === "PATCH" && id) {
      const body = await parseBody(req);

      const updated = await orderService.update(id, body);

      if (!updated) {
        return sendResponse(res, "Order not found", null, 404);
      }

      return sendResponse(res, "Order updated", updated);
    }

    // DELETE /orders/:id

    if (req.method === "DELETE" && id) {
      const deleted = await orderService.delete(id);

      if (!deleted) {
        return sendResponse(res, "Order not found", null, 404);
      }

      return sendResponse(res, "Order deleted");
    }

    sendResponse(res, "Route not found", null, 404);
  } catch (error) {
    sendResponse(res, "Internal server error", error, 500);
  }
};