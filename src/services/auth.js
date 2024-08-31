import { User } from '../db/models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { env } from '../utils/env.js';

// import { createSession } from '../utils/createSession.js';
// import { Session } from '../db/models/Session.js';

export const findUserByEmail = (email) => User.findOne({ email });

export const updateUserWithToken = (id) => {
  const token = jwt.sign({ id }, env('JWT_SECRET'));
  return User.findByIdAndUpdate(id, { token }, { new: true });
};

export const createUser = async (userData) => {
  const encryptedPassword = await bcrypt.hash(userData.password, 10);
  const user = await User.create({
    ...userData,
    password: encryptedPassword,
  });
  //console.log('user', user);
  return updateUserWithToken(user._id);
};

export const findUserById = (id) => User.findById(id);

export const resetToken = (id) => {
  User.findByIdAndUpdate(id, { token: '' });
};

// export const setupSession = async (userId) => {
//   await Session.deleteOne({ userId });
//   return Session.create({ userId, ...createSession() });
// };
