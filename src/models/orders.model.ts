import { RowDataPacket } from 'mysql2';
import { IOrders } from '../interfaces';
import connection from './connection';

const getAllModel = async (): Promise<IOrders[]> => {
  const [result] = await connection.execute<IOrders[] & RowDataPacket[]>(`SELECT 
    O.id, O.user_Id as userId, JSON_ARRAYAGG(P.id) as productsIds 
    FROM Trybesmith.orders as O
    INNER JOIN Trybesmith.products as P ON O.id = P.order_id
    GROUP BY O.id`);
  /*  console.log(result); */
  
  return result;
};

// Utilização do JSON_ARRAYAGG: pode-se utilizar em situações em que deseja transformar os resultados da consulta em um objeto JSON. Exemplo: se você tiver uma tabela de produtos e quiser retornar um objeto JSON que contenha uma lista de todos os produtos, poderá utilizar a função JSON_ARRAYAGG para concatenar os valores de uma coluna que contém os nomes dos produtos.

const ordersModel = {
  getAllModel,
};

export default ordersModel;