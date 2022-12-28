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
  price: number;
};
export type SDSOrder = {
  items: SDSOrderItem[];
  customer: string;
  worker: string;
};
export type SDSStoreHours = {
  mondayOpen: Date;
  mondayClose: Date;
  tuesdayOpen: Date;
  tuesdayClose: Date;
  wednesdayOpen: Date;
  wednesdayClose: Date;
  thursdayOpen: Date;
  thursdayClose: Date;
  fridayOpen: Date;
  fridayClose: Date;
  saterdayOpen: Date;
  saterdayClose: Date;
  sundayOpen: Date;
  sundayClose: Date;
};
export type FoodStoreData = {
  name: string;
  mainItems: SDSFoodMenuItem[];
  drinks: SDSDrinkMenuItem[];
  address: string;
  hours: SDSStoreHours;
};
export type SDSFoodMenuItem = {
  name: string;
  variation: SDSOrderItem[];
};
export type drinkSizeAndPrice = {
  [key: string]: number;
};
export type SDSDrinkMenuItem = {
  name: string;
  sizeAndPrice: drinkSizeAndPrice[];
};
