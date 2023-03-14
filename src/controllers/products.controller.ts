import { Response, Request } from 'express';
import productsModel from '../models/products.model';

const createProductController = async (req: Request, res: Response) => {
  const dataProducts = req.body;
  /* console.log(dataProducts); */
  
  const result = await productsModel.createProducts(dataProducts);
  return res.status(201).json(result);
};

const productsController = {
  createProductController,
};

export default productsController;