import mongoose from 'mongoose';
import { logger } from './helpers/logger';
import rol from './models/rol';
import movie from './models/movie';

const {
  DATABASE_USERNAME_MONGO,
  DATABASE_PASSWORD_MONGO,
  DATABASE_PORT_MONGO,
  DATABASE_INITDB_DATABASE,
} = process.env;

const seedMovies = [
  {
    name: 'Avengers',
    type: 'Action',
    description: 'Marvel',
  },
  {
    name: 'Transformers',
    type: 'Action',
    description: 'Hasbro',
  },
  {
    name: 'GOL',
    type: 'Action',
    description: 'TEST',
  },
];

const seedRoles = [
  {
    type: 'admin',
    description: 'admin',
  },
];

const seedDB = async () => {
  await rol.deleteMany({});
  await rol.insertMany(seedRoles);

  await movie.deleteMany({});
  await movie.insertMany(seedMovies);
};

seedDB().then(() => {});

mongoose
  .connect(
    `mongodb://${DATABASE_USERNAME_MONGO}:${DATABASE_PASSWORD_MONGO}@localhost:${DATABASE_PORT_MONGO}/${DATABASE_INITDB_DATABASE}?authMechanism=DEFAULT&authSource=admin`,
  )
  .then(() => logger.info('successful connection MongoDB'))
  .catch((e) => logger.error(`connection failed ${e}`));
