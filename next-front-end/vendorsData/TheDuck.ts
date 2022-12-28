import { FoodStoreData, SDSFoodMenuItem, SDSStoreHours, SDSDrinkMenuItem } from "../static-content/types";

const hours: SDSStoreHours = {
  monday: {
    isOpen: true,
    openAt: new Date("June 11, 2000 11:00:00"),
    closeAt: new Date("June 11, 2000 22:00:00"),
  },
  tuesday: {
    isOpen: true,
    openAt: new Date("June 11, 2000 11:00:00"),
    closeAt: new Date("June 11, 2000 22:00:00"),
  },
  wednesday: {
    isOpen: true,
    openAt: new Date("June 11, 2000 11:00:00"),
    closeAt: new Date("June 11, 2000 22:00:00"),
  },
  thursday: {
    isOpen: true,
    openAt: new Date("June 11, 2000 11:00:00"),
    closeAt: new Date("June 11, 2000 22:00:00"),
  },
  friday: {
    isOpen: true,
    openAt: new Date("June 11, 2000 11:00:00"),
    closeAt: new Date("June 11, 2000 22:00:00"),
  },
  saturday: {
    isOpen: true,
    openAt: new Date("June 11, 2000 14:00:00"),
    closeAt: new Date("June 11, 2000 22:00:00"),
  },
  sunday: { isOpen: false, openAt: null, closeAt: null },
};

const mainItems: SDSFoodMenuItem[] = [
  {
    name: "Soup & Salad",
    variations: [
      { name: "Country Style Chicken Tenders", price: 10 },
      { name: "Nachos", price: 8 },
      { name: "BBQ Pulled Pork Nachos", price: 10 },
      { name: "Loaded Fries", price: 8 },
      { name: "Spinach & Artichoke Dip", price: 9 },
      { name: "Caprese Platter", price: 9 },
      { name: "Vegetable Quesadilla", price: 7 },
      { name: "Flatbread Pizza--Individual size", price: 7 },
      { name: "Pretzel Bread Sticks", price: 8 },
      { name: "Fried Pickles & Peppers", price: 9 },
      { name: "Chicken Wing", price: 7 },
    ],
  },
  {
    name: "Soup & Salad",
    variations: [
      { name: "Soup of The Day", price: 4 },
      { name: "Tomato Basil Soup", price: 4 },
      { name: "French Onion Soup", price: 7 },
      { name: "Soup & Salad Combo", price: 8 },
      { name: "Caesar Salad", price: 8 },
      { name: "Apple Spinach Salad", price: 8 },
      { name: "House Garden Salad", price: 4 },
      { name: "Cobb Salad", price: 9 },
      { name: "Buffalo Chicken Salad", price: 9 },
    ],
  },
  {
    name: "Sandwiches, Wrap and Panini",
    variations: [
      { name: "Caprese Paninik", price: 9 },
      { name: "Smoked Pulled Pork", price: 9 },
      { name: "Chicken Mozzarella Panini", price: 11 },
      { name: "Duckling Sandwic", price: 9 },
      { name: "Grilled Chicken Sandwich", price: 9 },
      { name: "Mile High Club Sandwich", price: 9 },
      { name: "Presidential Panini", price: 10 },
      { name: "Reuben Sandwich", price: 9 },
      { name: "Southwestern Chicken Wrap", price: 9 },
      { name: "Hoosier Breaded Tenderloin Sandwich", price: 10 },
    ],
  },
  {
    name: "Burgers",
    variations: [
      { name: "New York Strip Steak", price: 22 },
      { name: "Beer-Battered Fried Shrimp", price: 15 },
      { name: "Fish & Chips", price: 12 },
    ],
  },
  {
    name: "Burgers",
    variations: [
      { name: "Duck Burger", price: 10 },
      { name: "Boulder Burge", price: 11 },
      { name: "Veggie Burger", price: 8 },
    ],
  },
  {
    name: "Pasta and Rice",
    variations: [
      { name: "Black Beans & Wild Rice Blend (Vegan)", price: 12 },
      { name: "Creole Shrimp and Sausage Fettuccine", price: 16 },
      { name: "Fettuccine Alfredo", price: 13 },
      { name: "Tri-Color Tortellini", price: 14 },
      { name: "Mac-N-Cheese", price: 13 },
    ],
  },
  {
    name: "14-inch Pizzas",
    variations: [
      { name: "Make you own pizza?", price: 9999 },
      { name: "BBQ Chicken", price: 15 },
      { name: "BBQ Pulled Pork", price: 15 },
      { name: "Southwestern Chiken Pizza", price: 15 },
    ],
  },
  {
    name: "Kids Menu",
    variations: [
      { name: "Child Buttered Fettuccine Noodles", price: 5 },
      { name: "Child Fettuccine Alfredo", price: 5 },
      { name: "Child Fried Chicken Tenders", price: 5 },
      { name: "Child Grilled Cheese Panini", price: 5 },
    ],
  },
  {
    name: "Dessert",
    variations: [
      { name: "Brownie Sundae", price: 7 },
      { name: "Funnel Cake Fries", price: 8 },
      { name: "Caramel Apple Pie", price: 8 },
      { name: "Ice Creanm", price: 4 },
    ],
  },
];

const drinks: SDSDrinkMenuItem[] = [
  { name: "Pepsi", sizeAndPrice: [{ S: 3 }] },
  { name: "Lemonade", sizeAndPrice: [{ S: 3 }] },
  { name: "Ice Tea", sizeAndPrice: [{ S: 3 }] },
  { name: "Coffe", sizeAndPrice: [{ S: 2 }] },
  { name: "Decaf", sizeAndPrice: [{ S: 2 }] },
  { name: "Hot Tea", sizeAndPrice: [{ S: 2 }] },
];

export const Menu: FoodStoreData = {
  name: "The Fluttering Duck",
  mainItems: mainItems,
  drinks: drinks,
  address: "2 W Seminary St, Greencastle, IN 46135",
  hours: hours,
};
