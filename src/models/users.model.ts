import { ResultSetHeader } from 'mysql2';
import { TUsers1, TUsers2 } from '../interfaces';
import connection from './connection';

const createUsers = async (users:TUsers1):Promise<TUsers2> => {
  const { username, vocation, level, password } = users;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?);',
    [username, vocation, level, password],
  );
  
  return { 
    id: insertId, 
    username, 
    vocation, 
    level };
};

const usersModel = {
  createUsers,
};

export default usersModel; 
