import { Request, Response } from 'express';
import { isValidMovieName, isValidMoviesFindAll } from '../../validators/movie';
import { throwNewError } from '../../helpers/throwNewError';
import movie from '../../constants/movie';
import { findAll, findOneByName } from '../../services/movie';

export const readAll = async (req: Request, res: Response) => {
  await isValidMoviesFindAll(req.query);
  const movieFounded = await findAll(req.query);
  console.log(movieFounded);
  if (movieFounded.data.length === 0) {
    throwNewError(movie.NOT_FOUND.detail, movie.NOT_FOUND);
    return;
  }
  res.json(movieFounded);
};

export const readOne = async (req: Request, res: Response) => {
  const { name } = req.params;
  await isValidMovieName(name);

  const movieFound = await findOneByName(name);
  if (!movieFound) {
    throwNewError(movie.NOT_FOUND_ID.detail, movie.NOT_FOUND_ID);
    return;
  }

  res.json({
    data: movieFound,
  });
};
