import { Response, Request } from 'express';
import productsModel from '../models/products.model';

const createProductController = async (req: Request, res: Response) => {
  const dataProducts = req.body;
  /* console.log(dataProducts); */
  const result = await productsModel.createProducts(dataProducts);
  return res.status(201).json(result);
};

const getAllController = async (req: Request, res: Response) => {
  const result = await productsModel.getAll();
  return res.status(200).json(result);
};

const productsController = {
  createProductController,
  getAllController,
};

export default productsController;