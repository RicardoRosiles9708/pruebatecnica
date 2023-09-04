import httpStatus from './httpStatus';

export default {
  CREATION: {
    httpCode: httpStatus.BAD_REQUEST,
    code: 'bad_user_request',
    detail: 'The correct data was not sent to create a user',
  },
  ALREADY_EXIST: {
    httpCode: httpStatus.CONFLICT,
    code: 'user_duplicated',
    detail: 'user already exists',
  },
  NOT_FOUND: {
    httpCode: httpStatus.NOT_FOUND,
    code: 'user_not_found',
    detail: 'There is no user with the provided auth token',
  },
  NOT_FOUND_ID: {
    httpCode: httpStatus.NOT_FOUND,
    code: 'user_id_not_found',
    detail: 'There is no user with the provided id',
  },
  FORBIDDEN: {
    httpCode: httpStatus.FORBIDDEN,
    code: 'administrator_forbidden',
    detail: 'The user has not the administrators permissions',
  },
  BAD_PARAMS: {
    httpCode: httpStatus.BAD_REQUEST,
    code: 'bad_user_params',
    detail: 'incorrect format in query params',
  },
  CONFLICT: {
    httpCode: httpStatus.CONFLICT,
    code: 'user_conflict',
    detail: 'Invalid password',
  },
};
