import httpStatus from './httpStatus';

export default {
  CREATION: {
    httpCode: httpStatus.BAD_REQUEST,
    code: 'bad_movie_request',
    detail: 'The correct data was not sent to create a movie',
  },
  ALREADY_EXIST: {
    httpCode: httpStatus.CONFLICT,
    code: 'movie_duplicated',
    detail: 'movie already exists',
  },
  NOT_FOUND: {
    httpCode: httpStatus.NOT_FOUND,
    code: 'movie_not_found',
    detail: 'There is no movie with the provided auth token',
  },
  NOT_FOUND_ID: {
    httpCode: httpStatus.NOT_FOUND,
    code: 'movie_id_not_found',
    detail: 'There is no movie with the provided id',
  },
  BAD_PARAMS: {
    httpCode: httpStatus.BAD_REQUEST,
    code: 'bad_movie_params',
    detail: 'incorrect format in query params',
  },
  CONFLICT: {
    httpCode: httpStatus.CONFLICT,
    code: 'movie_conflict',
    detail: 'Invalid password',
  },
};
