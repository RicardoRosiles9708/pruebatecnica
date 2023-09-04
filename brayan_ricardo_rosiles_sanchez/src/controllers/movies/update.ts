import { Request, Response } from 'express';
import movie from '../../constants/movie';
import { throwNewError } from '../../helpers/throwNewError';
import { findOneByName, updateMovie } from '../../services/movie';

export const update = async (req: Request, res: Response) => {
  const movieFound = await findOneByName(req.params.name);

  if (!movieFound) {
    throwNewError(movie.NOT_FOUND.detail, movie.NOT_FOUND);
    return;
  }

  const movieCreated = await updateMovie(movieFound.id, req.body);

  res.status(201);
  res.json({
    data: movieCreated,
  });
};
