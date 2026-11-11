import type { Request, Response } from "express";
import { products } from "../data/products.js";

export function getProducts(_req: Request, res: Response): void {
  res.json(products);
}

export function getProductById(req: Request, res: Response): void {
  const id = Number(req.params.id);

  const product = products.find((item) => item.id === id);

  if (!product) {
    res.status(404).json({
      message: "Produto não encontrado",
    });
    return;
  }

  res.json(product);
}
