import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';
import { createUser, findUserByEmail, setupSession } from '../services/auth.js';
import e from 'express';
import { setupCookie } from '../utils/setupCookie.js';

export const registerUserController = async (req, res) => {
  const { name, email } = req.body;

  const user = await findUserByEmail(email);
  if (user) {
    throw createHttpError(409, 'Email in use');
  }

  await createUser(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successful user registered!',
    data: {
      name,
      email,
    },
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

  const session = await setupSession(user._id);

  setupCookie(res, session);

  res.status(200).json({
    status: 200,
    message: 'Successful logged in!',
    data: {
      accessToken: session.accessToken,
    },
  });
};
