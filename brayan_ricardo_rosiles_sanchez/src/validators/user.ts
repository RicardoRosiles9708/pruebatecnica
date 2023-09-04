import user from '../constants/user';
import { generateValidatorFunc, isValidParamId } from '../helpers/validator';
import * as verifier from './verifier';

const userCreateSchema = verifier.typeMainObjectStrict({
  name: verifier.typeStringOptionalMinMax(2, 40),
  last_name: verifier.typeStringOptionalMinMax(2, 40),
  email: verifier.typeEmail(),
  password: verifier.typeStringOptional(),
});

const usersFindAllUsersSchema = verifier.typeMainObjectStrictPaged({
  name: verifier.typeStringOptional(),
  last_name: verifier.typeStringOptional(),
  email: verifier.typeEmailOptional(),
});

export const isValidCreationUser = generateValidatorFunc(userCreateSchema, user.CREATION);
export const isValidUsersFindAll = generateValidatorFunc(usersFindAllUsersSchema, user.BAD_PARAMS);
export const isValidUserId = isValidParamId(user.BAD_PARAMS);
