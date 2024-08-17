import { User } from '../db/models/user.js';

export const findUserByEmail = (email) => User.findOne({ email });
