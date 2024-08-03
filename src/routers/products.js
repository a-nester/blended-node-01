import { Router } from 'express';
import {
  deleteProductController,
  getAllProduct,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/', ctrlWrapper(getAllProduct));

router.delete('/:productId', ctrlWrapper(deleteProductController));

export default router;
