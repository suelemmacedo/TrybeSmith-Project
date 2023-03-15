import { TUsers1, TUsers2 } from '../interfaces';
import usersModel from '../models/users.model';
import { tokenGenerate } from '../utils/token';

const createUsers = async (users: TUsers1): Promise<TUsers2> => {
  const addUsers = await usersModel.createUsers(users);
};

const usersService = {
  createUsers,
};

export default usersService;