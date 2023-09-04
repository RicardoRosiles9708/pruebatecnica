import { createAuth } from '../helpers/jwt';
import rol from '../models/rol';
import user from '../models/user';
import bcryptjs from 'bcryptjs';

type UserCreate = {
  name: string;
  email: string;
  last_name: string;
  password: string;
};

export const createUser = async (data: UserCreate) => {
  const numSaltRounds = 8;

  const password = await bcryptjs.hash(data.password, numSaltRounds);

  const userRol = await rol.findOne({ type: 'admin' });

  const create = await user.create({ ...data, password, id_rol: userRol?.id });

  return { create };
};

export const loginUser = async (data: UserCreate) => {
  const { email } = data;
  const findUser = await user.findOne({ email });

  if (!findUser) return null;

  const token = await createAuth(findUser.id, findUser.id_rol as unknown as string);

  return {
    findUser,
    token,
  };
};

export const findAll = async () => {
  const data = await user.find();

  return { data };
};

export const findOneById = async (id: string) => {
  const userFound = await user.findOne({ _id: id });
  if (!userFound) return null;
  return userFound;
};

export const hasUserByEmail = async (email: string) => {
  const findUser = await user.findOne({ email });

  return Boolean(findUser);
};
