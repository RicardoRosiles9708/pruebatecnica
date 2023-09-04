import { generateValidatorFunc } from '../helpers/validator';
import * as verifier from './verifier';

const COMPOSE_NAMES = ['movies-backend', 'movies-backend-test'];
const NODE_ENVS = ['development', 'production', 'staging', 'test'];

const schema = verifier.typeMainObject({
  NODE_ENV: verifier.typeStringEnum(NODE_ENVS),
  // DATABASE_NAME: verifier.typeString(),
  // DATABASE_USERNAME: verifier.typeString(),
  // DATABASE_PASSWORD: verifier.typeString(),
  // DATABASE_HOST: verifier.typeString(),
  // DATABASE_DIALECT: verifier.typeStringEnum(DATABASE_DIALECTS),
  // DATABASE_PORT: verifier.typeNumber(),
  PORT: verifier.typeNumber(),
});

export const isValidEnvFile = generateValidatorFunc(schema, {
  httpCode: -1,
  code: 'ENV_FILE_001',
  detail: 'required environment variables are missing or some variable is not valid',
});
