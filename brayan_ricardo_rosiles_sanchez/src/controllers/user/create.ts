import { Request, Response } from 'express';
import user from '../../constants/user';
import { hasUserByEmail } from '../../services/user';
import { throwNewError } from '../../helpers/throwNewError';
import { createUser } from '../../services/user';
import { isValidCreationUser } from '../../validators/user';

export const create = async (req: Request, res: Response) => {
  await isValidCreationUser(req.body);

  const userFound = await hasUserByEmail(req.body.email);

  if (userFound) {
    throwNewError(user.ALREADY_EXIST.detail, user.ALREADY_EXIST);
    return;
  }

  const clientCreated = await createUser(req.body);

  res.status(201);
  res.json({
    data: clientCreated,
  });
};
