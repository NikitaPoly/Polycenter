import { FoodStoreData, SDSFoodMenuItem, SDSStoreHours, SDSDrinkMenuItem } from "../static-content/types";

const hours: SDSStoreHours = {
  mondayOpen: new Date(),
  mondayClose: new Date(),
  tuesdayOpen: new Date(),
  tuesdayClose: new Date(),
  wednesdayOpen: new Date(),
  wednesdayClose: new Date(),
  thursdayOpen: new Date(),
  thursdayClose: new Date(),
  fridayOpen: new Date(),
  fridayClose: new Date(),
  saterdayOpen: new Date(),
  saterdayClose: new Date(),
  sundayOpen: new Date(),
  sundayClose: new Date(),
};

const mainItems: SDSFoodMenuItem[] = [];

const drinks: SDSDrinkMenuItem[] = [];

export const Menu: FoodStoreData = {
  name: "The Fluttering Duck",
  mainItems: mainItems,
  drinks: drinks,
  address: "2 W Seminary St, Greencastle, IN 46135",
  hours: hours,
};
