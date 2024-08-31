import { model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    token: { type: String },
  },
  {
    versionKey: false,
  },
);

export const User = model('user', userSchema);

// name*	string
// Username.

// email*	string
// E-mail address.

// password*	string
// Password.
