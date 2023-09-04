import { Schema, model } from 'mongoose';

interface IMovie {
  name: string;
  type: string;
  description: string;
}

const movieSchema = new Schema<IMovie>(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: {},
    versionKey: false,
  },
);

export default model<IMovie>('movies', movieSchema);
