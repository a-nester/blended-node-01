import express from 'express';
import { loginUserSchema, registerUserSchema } from '../validation/auth.js';
import { validateBody } from '../utils/validateBody.js';
import {
  loginUserController,
  registerUserController,
  logoutUserController,
} from '../controllers/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import { checkToken } from '../middlewares/checkToken.js';

const router = express.Router();

router.post(
  '/signup',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

router.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);

router.post('/logout', checkToken, ctrlWrapper(logoutUserController));

export default router;
