import createHttpError from 'http-errors';
import jwt from 'jsonwebtoken';
import { env } from '../utils/env.js';
import { findUserById } from '../services/auth.js';

export const checkToken = async (req, res, next) => {
  const authHeader = req.get('Authorization');

  if (!authHeader) {
    return next(createHttpError(401, 'Enter the Authorization!'));
  }

  const [bearer, token] = authHeader.split(' ', 2);

  if (bearer !== 'Bearer' || typeof token !== 'string') {
    return next(createHttpError(401, 'Auth header should be type of Bearer'));
  }

  const { id } = jwt.verify(token, env('JWT_SECRET'));
  const user = await findUserById(id);

  if (!user || !user.token || user.token !== token) {
    return next(createHttpError(401, 'Not authorised'));
  }
  req.user = user;
  next();
};
