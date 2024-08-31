import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';
import {
  createUser,
  findUserByEmail,
  updateUserWithToken,
  resetToken,
} from '../services/auth.js'; //createUser,  setupSession
// import { setupCookie } from '../utils/setupCookie.js';

export const registerUserController = async (req, res) => {
  const { name, email } = req.body;

  const user = await findUserByEmail(email);
  if (user) {
    throw createHttpError(409, 'Email in use');
  }

  const createdUser = await createUser(req.body);
  res.status(201).json({
    user: { name: createdUser.name, email: createdUser.email },
    token: createdUser.token,
  });
};

export const loginUserController = async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);

  if (!user) {
    throw createHttpError(401, 'User not authorized!');
  }

  const isEqual = bcrypt.compare(password, user.password);

  if (!isEqual) {
    throw createHttpError(401, 'User not authorized!');
  }

  const updatedUser = await updateUserWithToken(user._id);
  res.status(200).json({
    user: { name: updatedUser.name, email: updatedUser.email },
    token: updatedUser.token,
  });
};

export const logoutUserController = async (req, res) => {
  await resetToken(req.user._id);
  res.status(204).end();
};
