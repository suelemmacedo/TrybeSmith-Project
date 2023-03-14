/* export interface IUsers {
  userName: string;
  vocation: string;
  level: string;
  password: string;
}

export interface Orders {
  id: number;
}
 */
export interface IProducts {
  'id': number;
  'name': string;
  'amount': string;
  'orderId': number;
}

export type Products1 = Omit <IProducts, 'id' | 'orderId'>;
export type Products2 = Omit <IProducts, 'orderId'>; 

// O omit permite criar um novo tipo que omite uma ou mais propriedades de um tipo existente.