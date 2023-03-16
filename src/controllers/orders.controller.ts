import { Response, Request } from 'express';
import ordersService from '../service/orders.service';

const getAllContoller = async (req: Request, res: Response) => {
  const result = await ordersService.getAllService();
  return res.status(200).json(result);
};

const ordersController = {
  getAllContoller,
};

export default ordersController;