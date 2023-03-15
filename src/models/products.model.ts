import { RowDataPacket, ResultSetHeader } from 'mysql2';
import { IProducts, Products1, Products2 } from '../interfaces';
import connection from './connection';

const getAll = async (): Promise<IProducts[]> => {
  const [result] = await connection.execute<RowDataPacket[] & IProducts[]>(
    'SELECT * FROM Trybesmith.products',
  );
  return result;
};

const createProducts = async (product:Products1): Promise<Products2> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  return {
    id: insertId,
    name, 
    amount,
  };
};

const productsModel = {
  getAll,
  createProducts,
};

export default productsModel; 
