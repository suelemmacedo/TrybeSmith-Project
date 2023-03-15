import jwt, { SignOptions } from 'jsonwebtoken';
import { TUsers2 } from '../interfaces';

const secret = process.env.JWT_SECRET || '123456';

const tokenConfig: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '1h',
};

export const tokenGenerate = (payload: TUsers2) => jwt.sign(payload, secret, tokenConfig);

export const validateToken = (token:string) => jwt.verify(token, secret);
