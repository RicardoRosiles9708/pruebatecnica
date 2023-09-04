import movie from '../constants/movie';
import { generateValidatorFunc, isValidParamId } from '../helpers/validator';
import * as verifier from './verifier';

const movieCreateSchema = verifier.typeMainObjectStrict({
  name: verifier.typeStringOptionalMinMax(2, 40),
  type: verifier.typeStringOptionalMinMax(2, 40),
  description: verifier.typeStringOptionalMinMax(2, 40),
});

const moviesFindAllMoviesSchema = verifier.typeMainObjectStrictPaged({
  name: verifier.typeStringOptional(),
  type: verifier.typeStringOptional(),
  description: verifier.typeStringOptional(),
});

export const isValidCreationMovie = generateValidatorFunc(movieCreateSchema, movie.CREATION);
export const isValidMoviesFindAll = generateValidatorFunc(
  moviesFindAllMoviesSchema,
  movie.BAD_PARAMS,
);
export const isValidMovieName = isValidParamId(movie.BAD_PARAMS);
