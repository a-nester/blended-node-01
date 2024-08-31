import express from 'express';
import { registerUserSchema } from '../validation/auth.js'; //loginUserSchema,
import { validateBody } from '../utils/validateBody.js';
import {
  //loginUserController,
  registerUserController,
} from '../controllers/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = express.Router();

router.post(
  '/signup',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

// router.post(
//   '/login',
//   validateBody(loginUserSchema),
//   ctrlWrapper(loginUserController),
// );
export default router;
