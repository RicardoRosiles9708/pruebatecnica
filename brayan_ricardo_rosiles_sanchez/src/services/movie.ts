import movie from '../models/movie';

type MovieCreate = {
  name: string;
  type: string;
  description: string;
};

type MovieUpdate = {
  name?: string;
  type?: string;
  description?: string;
};

type MovieFilterParams = {
  name?: string;
};

export const createMovie = async (data: MovieCreate) => {
  const { name, type, description } = data;

  const findMovie = await findOneByName(name);

  if (findMovie) return false;

  return await movie.create({
    name,
    type,
    description,
  });
};

export const findAll = async (params: MovieFilterParams) => {
  const data = await movie.find();

  return { data };
};

export const findOneByName = async (name: string) => {
  const movieFound = await movie.findOne({
    $or: [{ name: { $regex: `${name}`, $options: 'i' } }],
  });
  if (!movieFound) return null;
  return movieFound;
};

export const updateMovie = async (_id: string, data: MovieUpdate) => {
  const update = { $set: { ...data } };

  const movieUpdated = await movie.findOneAndUpdate({ _id }, update, {
    new: true,
  });

  return movieUpdated;
};

export const deleteMovieById = async (_id: string, data: MovieUpdate) => {
  const movieDeleted = await movie.findOneAndDelete({ _id });

  return movieDeleted;
};
