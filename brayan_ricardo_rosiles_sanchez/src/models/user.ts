import { Schema, model } from 'mongoose';

interface IUser {
  name: string;
  email: string;
  last_name: string;
  password: string;
  id_rol?: string;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    last_name: { type: String, required: true },
    password: { type: String, required: true },
    id_rol: { type: Schema.ObjectId, ref: 'roles' },
  },
  {
    timestamps: {},
    versionKey: false,
  },
);

export default model<IUser>('users', userSchema);
