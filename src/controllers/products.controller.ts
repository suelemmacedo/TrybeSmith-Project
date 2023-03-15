import { Response, Request } from 'express';
import productsSercive from '../service/products.service';

const createProductController = async (req: Request, res: Response) => {
  const dataProducts = req.body;
  /* console.log(dataProducts); */
  const result = await productsSercive.createProductService(dataProducts);
  return res.status(201).json(result);
};

const getAllController = async (req: Request, res: Response) => {
  const result = await productsSercive.getAllService();
  return res.status(200).json(result);
};

const productsController = {
  createProductController,
  getAllController,
};

export default productsController;