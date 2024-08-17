import createHttpError from 'http-errors';
import { findUserByEmail } from '../services/auth.js';

export const registerUserController = async (req, res) => {
  const { email } = req.body;

  const user = await findUserByEmail(email);
  if (user) {
    throw createHttpError(409, 'Email in use');
  }
};
