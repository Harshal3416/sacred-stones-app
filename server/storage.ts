import { type Product } from "@shared/schema";
import { readFileSync } from "fs";
import { join } from "path";

export interface IStorage {
  getAllProducts(): Promise<Product[]>;
  getProductById(id: string): Promise<Product | undefined>;
}

export class MemStorage implements IStorage {
  private products: Product[];

  constructor() {
    this.products = [];
    this.loadProducts();
  }

  private loadProducts() {
    try {
      const dataPath = join(process.cwd(), "server", "data.json");
      const data = readFileSync(dataPath, "utf-8");
      const jsonData = JSON.parse(data);
      this.products = jsonData.products;
    } catch (error) {
      console.error("Error loading products:", error);
      this.products = [];
    }
  }

  async getAllProducts(): Promise<Product[]> {
    return this.products;
  }

  async getProductById(id: string): Promise<Product | undefined> {
    return this.products.find((product) => product.id === id);
  }
}

export const storage = new MemStorage();
