import type { IncomingMessage, ServerResponse } from "node:http";

export interface Order {
  id: string;
  name: string;
  price: number;
}

export interface Req extends IncomingMessage {
  body?: unknown;
}

export type Res = ServerResponse<IncomingMessage>;

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}