export type SDSUserData = {
  ID: string;
  UserEmail: string;
  UserName: string;
  GraduationYear: number;
  OrderCompleted: number;
  OrdersRequested: number;
  Ballance: number;
};

export type SDSOrderItem = {
  name: string;
  cost: number;
};
export type SDSOrder = {
  items: SDSOrderItem[];
  customer: string;
  worker: string;
};
