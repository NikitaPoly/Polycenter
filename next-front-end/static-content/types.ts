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
export type DayData = {
  isOpen: boolean;
  openAt: Date | null;
  closeAt: Date | null;
};
export type SDSStoreHours = {
  monday: DayData;
  tuesday: DayData;
  wednesday: DayData;
  thursday: DayData;
  friday: DayData;
  saturday: DayData;
  sunday: DayData;
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
  variations: SDSOrderItem[];
};
export type drinkSizeAndPrice = {
  [key: string]: number;
};
export type SDSDrinkMenuItem = {
  name: string;
  sizeAndPrice: drinkSizeAndPrice[];
};
