import { Schema, model } from 'mongoose';

interface IRol {
  type: string;
  description: string;
}

const rolSchema = new Schema<IRol>(
  {
    type: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: {},
    versionKey: false,
  },
);

export default model<IRol>('roles', rolSchema);
