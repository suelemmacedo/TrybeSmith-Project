export interface IProducts {
  'id': number;
  'name': string;
  'amount': string;
  'orderId': number;
}

export type Products1 = Omit <IProducts, 'id' | 'orderId'>;
export type Products2 = Omit <IProducts, 'orderId'>; 

// O omit permite criar um novo tipo que omite uma ou mais propriedades de um tipo existente.

export interface IUsers {
  id: number;
  'username': string;
  'vocation': string;
  'level': number;
  'password': string;
}

export type TUsers1 = Omit <IUsers, 'id'>;
export type TUsers2 = Omit <IUsers, 'password'>;

export interface IOrders {
  'id': number;
  'userId': number;
  'productsId': number[];
}