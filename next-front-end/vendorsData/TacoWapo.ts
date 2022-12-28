import { FoodStoreData, SDSFoodMenuItem, SDSStoreHours, SDSDrinkMenuItem } from "../static-content/types";

const hours: SDSStoreHours = {
  monday: { isOpen: false, openAt: null, closeAt: null },
  tuesday: {
    isOpen: true,
    openAt: new Date("June 11, 2000 11:00:00"),
    closeAt: new Date("June 11, 2000 21:00:00"),
  },
  wednesday: {
    isOpen: true,
    openAt: new Date("June 11, 2000 11:00:00"),
    closeAt: new Date("June 11, 2000 21:00:00"),
  },
  thursday: {
    isOpen: true,
    openAt: new Date("June 11, 2000 11:00:00"),
    closeAt: new Date("June 11, 2000 21:00:00"),
  },
  friday: {
    isOpen: true,
    openAt: new Date("June 11, 2000 11:00:00"),
    closeAt: new Date("June 11, 2000 21:00:00"),
  },
  saturday: {
    isOpen: true,
    openAt: new Date("June 11, 2000 11:00:00"),
    closeAt: new Date("June 11, 2000 21:00:00"),
  },
  sunday: {
    isOpen: true,
    openAt: new Date("June 11, 2000 11:00:00"),
    closeAt: new Date("June 11, 2000 21:00:00"),
  },
};

const mainItems: SDSFoodMenuItem[] = [
  {
    name: "Burrito",
    variation: [
      { name: "Chicken", price: 7.8 },
      { name: "Steak", price: 8.4 },
      { name: "Carnitas", price: 8.4 },
      { name: "Pastor", price: 7.99 },
      { name: "Ground Beef", price: 8.4 },
      { name: "Veggies Burrito", price: 7.8 },
      { name: "Shredded Beef Burrito", price: 7.8 },
    ],
  },
  {
    name: "Nachos",
    variation: [
      { name: "Chicken", price: 7.8 },
      { name: "Steak", price: 8.4 },
      { name: "Carnitas", price: 8.4 },
      { name: "Pastor", price: 7.99 },
      { name: "Ground Beef", price: 8.4 },
      { name: "Veggies Burrito", price: 7.8 },
      { name: "Shredded Beef Burrito", price: 7.8 },
    ],
  },
  {
    name: "Quesadilla",
    variation: [
      { name: "Chicken", price: 7.8 },
      { name: "Steak", price: 8.4 },
      { name: "Carnitas", price: 8.4 },
      { name: "Pastor", price: 7.99 },
      { name: "Ground Beef", price: 8.4 },
      { name: "Veggies Burrito", price: 7.8 },
      { name: "Shredded Beef Burrito", price: 7.8 },
    ],
  },
  {
    name: "Salas Bowl",
    variation: [
      { name: "Chicken", price: 7.8 },
      { name: "Steak", price: 8.4 },
      { name: "Carnitas", price: 8.4 },
      { name: "Pastor", price: 7.99 },
      { name: "Ground Beef", price: 8.4 },
      { name: "Veggies Burrito", price: 7.8 },
      { name: "Shredded Beef Burrito", price: 7.8 },
    ],
  },
  {
    name: "3 Tacos",
    variation: [
      { name: "Chicken", price: 7.8 },
      { name: "Steak", price: 8.4 },
      { name: "Carnitas", price: 8.4 },
      { name: "Pastor", price: 7.99 },
      { name: "Ground Beef", price: 8.4 },
      { name: "Veggies Burrito", price: 7.8 },
      { name: "Shredded Beef Burrito", price: 7.8 },
    ],
  },
  {
    name: "3 Street Tacos",
    variation: [
      { name: "Chicken", price: 7.8 },
      { name: "Steak", price: 8.4 },
      { name: "Carnitas", price: 8.4 },
      { name: "Pastor", price: 7.99 },
      { name: "Ground Beef", price: 8.4 },
      { name: "Veggies Burrito", price: 7.8 },
      { name: "Shredded Beef Burrito", price: 7.8 },
    ],
  },
  {
    name: "Sides",
    variation: [
      { name: "Guacamole", price: 1.8 },
      { name: "Queso", price: 1.8 },
      { name: "Salsa", price: 0.7 },
      { name: "Sour Cream", price: 0.7 },
      { name: "Pico de Gallo", price: 0.7 },
    ],
  },
  {
    name: "Chips and",
    variation: [
      { name: "Salsa", price: 2 },
      { name: "Queso", price: 4 },
      { name: "Guacamole", price: 3.5 },
    ],
  },
  {
    name: "Kids Menu",
    variation: [
      { name: "Burrito", price: 4.5 },
      { name: "Quesadilla", price: 4.5 },
      { name: "Taco", price: 4.5 },
      { name: "Cheese Nachos", price: 4.5 },
    ],
  },
];

const drinks: SDSDrinkMenuItem[] = [
  { name: "Agua de Horchata", sizeAndPrice: [{ S: 2.2 }] },
  { name: "Bottle Water", sizeAndPrice: [{ S: 1.35 }] },
  { name: "Slushie", sizeAndPrice: [{ S: 1.75 }] },
];

export const Menu: FoodStoreData = {
  name: "Taco Wapo",
  mainItems: mainItems,
  drinks: drinks,
  address: "306 E. Washington St., Greencastle",
  hours: hours,
};
