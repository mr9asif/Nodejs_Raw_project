import type { Res } from "../types/index.js";

export const sendResponse = <T>(
  res: Res,
  message: string,
  data?: T,
  status = 200
): void => {
  res.writeHead(status, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      success: status < 400,
      message,
      data,
    })
  );
};