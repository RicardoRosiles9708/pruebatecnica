import dotenv from 'dotenv';
import { isValidEnvFile } from '../validators/environment';

dotenv.config({ path: `./${process.env.NODE_ENV || 'development'}.env` });

isValidEnvFile({
  ...process.env,
  PORT: parseInt(process.env.PORT as string, 10),
  DATABASE_PORT: parseInt(process.env.DATABASE_PORT as string, 10),
  RETRY_TIMES: parseInt(process.env.RETRY_TIMES as string, 10),
  TRIAL_DAYS: parseInt(process.env.TRIAL_DAYS as string, 10),
  GCP_EXPIRE_SIGN_TIME: parseInt(process.env.GCP_EXPIRE_SIGN_TIME as string, 10),
});
