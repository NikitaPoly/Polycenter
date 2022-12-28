import { FoodStoreData, SDSFoodMenuItem, SDSStoreHours, SDSDrinkMenuItem } from "../static-content/types";

const hours: SDSStoreHours = {
  monday: { isOpen: false, openAt: null, closeAt: null },
  tuesday: { isOpen: false, openAt: null, closeAt: null },
  wednesday: { isOpen: false, openAt: null, closeAt: null },
  thursday: { isOpen: false, openAt: null, closeAt: null },
  friday: { isOpen: false, openAt: null, closeAt: null },
  saturday: { isOpen: false, openAt: null, closeAt: null },
  sunday: { isOpen: false, openAt: null, closeAt: null },
};

const mainItems: SDSFoodMenuItem[] = [];

const drinks: SDSDrinkMenuItem[] = [];

export const Menu: FoodStoreData = {
  name: "Hoover",
  mainItems: mainItems,
  drinks: drinks,
  address: "101 E Hanna St, Greencastle, IN 46135",
  hours: hours,
};
