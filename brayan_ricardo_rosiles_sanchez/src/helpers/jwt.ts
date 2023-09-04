import jwt from 'jsonwebtoken';
import moment from 'moment';
import { NextFunction, Request, Response } from 'express';

export const createAuth = (_id: string, id_rol: string) => {
  const payload = {
    _id,
    rol: id_rol,
    cat: moment().unix(),
    exp: moment().add(1, 'days').unix(),
  };
  return jwt.sign(payload, process.env.SECRET_TOKEN || 'token');
};

export const ensureAuth = () => (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return res.status(403).send({
      mensaje: 'Es requerida la autenticación para acceder a este recurso',
    });
  }

  const token = req.headers.authorization.replace(/['"]+/g, '');
  try {
    const payload = jwt.verify(token, process.env.SECRET_TOKEN || 'token') as jwt.JwtPayload;
    if ((payload?.exp as number) <= moment().unix()) {
      return res.status(401).send({
        mensaje: 'Su sesión ha expirado, es requerida la autenticación para acceder a este recurso',
      });
    }
  } catch (ex) {
    return res.status(401).send({
      message: 'Es requerida la autenticación para acceder a este recurso',
    });
  }

  return next();
};

export const decodeAuth = (req: Request) => {
  const token = req.headers.authorization?.replace(/['"]+/g, '') || '';
  try {
    return jwt.verify(token, process.env.SECRET_TOKEN || 'token');
  } catch (ex) {
    return null;
  }
};
