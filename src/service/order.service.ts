import { promises as fs } from "node:fs";
import path from "node:path";

import type { Order } from "../types/index.js";

const DB_PATH = path.join(process.cwd(), "src", "db", "db.json");

export class OrderService {
  private async readData(): Promise<Order[]> {
    const data = await fs.readFile(DB_PATH, "utf-8");

    return JSON.parse(data) as Order[];
  }

  private async writeData(data: Order[]): Promise<void> {
    await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
  }

  async getAll(): Promise<Order[]> {
    return await this.readData();
  }

  async getById(id: string): Promise<Order | undefined> {
    const orders = await this.readData();

    return orders.find((order) => order.id === id);
  }

  async create(payload: Omit<Order, "id">): Promise<Order> {
    const orders = await this.readData();

    const newOrder: Order = {
      id: Date.now().toString(),
      ...payload,
    };

    orders.push(newOrder);

    await this.writeData(orders);

    return newOrder;
  }

  async update(
    id: string,
    payload: Partial<Omit<Order, "id">>
  ): Promise<Order | null> {
    const orders = await this.readData();

    const index = orders.findIndex((o) => o.id === id);

    if (index === -1) {
      return null;
    }

    orders[index] = {
      ...orders[index],
      ...payload,
    };

    await this.writeData(orders);

    return orders[index];
  }

  async delete(id: string): Promise<boolean> {
    const orders = await this.readData();

    const filtered = orders.filter((o) => o.id !== id);

    if (filtered.length === orders.length) {
      return false;
    }

    await this.writeData(filtered);

    return true;
  }
}