import { Response, Request } from 'express';
import usersService from '../models/users.model';

const createUsersController = async (req: Request, res: Response) => {
  const dataUsers = req.body;
 
  const token = await usersService.createUsers(dataUsers);
  return res.status(201).json({ token });
};

const usersController = {
  createUsersController,
};

export default usersController;