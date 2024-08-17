import express from 'express';
import { registerUserSchema } from '../validation/auth.js';
import { validateBody } from '../utils/validateBody.js';
import { registerUserController } from '../controllers/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = express.Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

export default router;
