import express from 'express';
import { user } from './routes/user';
import { movie } from './routes/movie';

export const router = express.Router();

router.use(user);
router.use(movie);
