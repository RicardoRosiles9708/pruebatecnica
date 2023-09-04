import express from 'express';
import { catchWrapper } from '../helpers/catchWrapper';
import { create } from '../controllers/user/create';
import { readAll, readOne } from '../controllers/user/read';
import { GET_USERS, GET_USER_DETAIL, POST_AUTH_SIGN_UP, POST_USER } from '../constants/routesName';
import { ensureAuth } from '../helpers/jwt';
import { login } from '../controllers/user/auth';

export const user = express.Router();

user.post(POST_USER.url, catchWrapper(create));
user.get(GET_USERS.url, ensureAuth(), catchWrapper(readAll));
user.get(GET_USER_DETAIL.url, ensureAuth(), catchWrapper(readOne));
user.post(POST_AUTH_SIGN_UP.url, catchWrapper(login));
