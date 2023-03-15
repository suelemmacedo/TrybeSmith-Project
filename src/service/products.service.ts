import productsModel from '../models/products.model';
import { IProducts, Products1, Products2 } from '../interfaces';

const getAllService = async (): Promise<IProducts[]> => {
  const result = await productsModel.getAll();
  return result;
};

const createProductService = async (product: Products1): Promise<Products2> => {
  const result = await productsModel.createProducts(product);
  return result;
};

const productsService = {
  getAllService,
  createProductService,
};

export default productsService;
