import express from 'express';
import { catchWrapper } from '../helpers/catchWrapper';
import { create } from '../controllers/movies/create';
import { update } from '../controllers/movies/update';
import { readAll, readOne } from '../controllers/movies/read';
import {
  DELETE_MOVIE,
  GET_MOVIES,
  GET_MOVIE_DETAIL,
  POST_MOVIE,
  UPDATE_MOVIE,
} from '../constants/routesName';
import { ensureAuth } from '../helpers/jwt';
import { deleteMovie } from '../controllers/movies/delete';

export const movie = express.Router();

movie.post(POST_MOVIE.url, ensureAuth(), catchWrapper(create));
movie.get(GET_MOVIES.url, ensureAuth(), catchWrapper(readAll));
movie.get(GET_MOVIE_DETAIL.url, ensureAuth(), catchWrapper(readOne));
movie.delete(DELETE_MOVIE.url, ensureAuth(), catchWrapper(deleteMovie));
movie.patch(UPDATE_MOVIE.url, ensureAuth(), catchWrapper(update));
