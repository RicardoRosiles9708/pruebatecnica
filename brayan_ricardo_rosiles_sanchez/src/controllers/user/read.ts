import { Request, Response } from 'express';
import { isValidUserId, isValidUsersFindAll } from '../../validators/user';
import { findAll, findOneById } from '../../services/user';
import { throwNewError } from '../../helpers/throwNewError';
import user from '../../constants/user';

export const readAll = async (req: Request, res: Response) => {
  const userFounded = await findAll();
  if (userFounded.data.length === 0) {
    throwNewError(user.NOT_FOUND.detail, user.NOT_FOUND);
    return;
  }
  res.json(userFounded);
};

export const readOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  await isValidUserId(id);

  const userFound = await findOneById(id);
  if (!userFound) {
    throwNewError(user.NOT_FOUND_ID.detail, user.NOT_FOUND_ID);
    return;
  }

  res.json({
    data: userFound,
  });
};
