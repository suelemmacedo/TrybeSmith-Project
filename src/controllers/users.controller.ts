import { Response, Request } from 'express';
import usersService from '../models/users.model';
import { tokenGenerate } from '../utils/token';

const createUsersController = async (req: Request, res: Response) => {
  const dataUsers = req.body;

  const result = await usersService.createUsers(dataUsers);
 
  const token = tokenGenerate(result);
  return res.status(201).json({ token });
};

const usersController = {
  createUsersController,
};

export default usersController;