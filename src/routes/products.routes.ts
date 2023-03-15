import { Router } from 'express';
import productsController from '../controllers/products.controller';

const productsRouter = Router();

productsRouter.post('/', productsController.createProductController);
productsRouter.get('/', productsController.getAllController);

export default productsRouter;