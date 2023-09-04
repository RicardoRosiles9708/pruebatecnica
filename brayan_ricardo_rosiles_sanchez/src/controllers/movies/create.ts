import { Request, Response } from 'express';
import movie from '../../constants/movie';
import { throwNewError } from '../../helpers/throwNewError';
import { isValidCreationMovie } from '../../validators/movie';
import { createMovie, findOneByName } from '../../services/movie';

export const create = async (req: Request, res: Response) => {
  await isValidCreationMovie(req.body);

  const movieFound = await findOneByName(req.body.name);

  if (movieFound) {
    throwNewError(movie.ALREADY_EXIST.detail, movie.ALREADY_EXIST);
    return;
  }

  const movieCreated = await createMovie(req.body);

  res.status(201);
  res.json({
    data: movieCreated,
  });
};
