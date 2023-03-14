import { Router } from 'express';
import productsController from '../controllers/products.controller';

const router = Router();

router.post('/', productsController.createProductController);
router.get('/', productsController.getAllController);

export default router;