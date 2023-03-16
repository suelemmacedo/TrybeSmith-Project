import ordersModel from '../models/orders.model';
import { IOrders } from '../interfaces';

const getAllService = async (): Promise<IOrders[]> => {
  const result = await ordersModel.getAllModel();
  return result;
};

const ordersService = {
  getAllService,
};

export default ordersService;