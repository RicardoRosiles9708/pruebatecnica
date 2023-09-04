import { Request, Response } from 'express';
import user from '../../constants/user';
import { loginUser } from '../../services/user';
import { throwNewError } from '../../helpers/throwNewError';
import bcryptjs from 'bcryptjs';

export const login = async (req: Request, res: Response) => {
  const response = await loginUser(req.body);
  if (!response) {
    throwNewError(user.NOT_FOUND.detail, user.NOT_FOUND);
    return;
  }

  const comparePassword = bcryptjs.compareSync(req.body.password, response.findUser.password);

  if (!comparePassword) {
    throwNewError(user.CONFLICT.detail, user.CONFLICT);
    return;
  }

  res.status(201);
  res.json({
    data: response.findUser,
    token: response.token,
  });
};
