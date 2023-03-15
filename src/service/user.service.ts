import { TUsers1, TUsers2 } from '../interfaces';
import usersModel from '../models/users.model';

const createUsers = async (users: TUsers1): Promise<TUsers2> => {
  const addUsers = await usersModel.createUsers(users);
  return addUsers;
};

const usersService = {
  createUsers,
};

export default usersService;