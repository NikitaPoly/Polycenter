import { FoodStoreData, SDSFoodMenuItem, SDSStoreHours, SDSDrinkMenuItem } from "../static-content/types";

const hours: SDSStoreHours = {
  monday: { isOpen: false, openAt: null, closeAt: null },
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
    closeAt: new Date("June 11, 2000 24:00:00"),
  },
  saturday: {
    isOpen: true,
    openAt: new Date("June 11, 2000 17:00:00"),
    closeAt: new Date("June 11, 2000 24:00:00"),
  },
  sunday: {
    isOpen: true,
    openAt: new Date("June 11, 2000 17:00:00"),
    closeAt: new Date("June 11, 2000 22:00:00"),
  },
};

const mainItems: SDSFoodMenuItem[] = [
  {
    name: "Pizza",
    variations: [
      { name: "Cheese", price: 7 },
      { name: "Veggie", price: 10 },
      { name: "House", price: 10.75 },
      { name: "Buffalo Chiken", price: 14 },
      { name: "BBQ Chicken", price: 14 },
      { name: "Hawaiian", price: 12 },
    ],
  },
  {
    name: "Salads",
    variations: [
      { name: "Mexican Chef ", price: 4.75 },
      { name: "Chef ", price: 4 },
      { name: "Tossed ", price: 1.75 },
    ],
  },
  {
    name: "Sides",
    variations: [
      { name: "Chiken Wings ", price: 6.95 },
      { name: "BreadSticks ", price: 3 },
      { name: "Onion Rings ", price: 3 },
      { name: "Egg Rolls ", price: 3 },
      { name: "Breader Mushrooms ", price: 2.75 },
      { name: "Chiken Tenders ", price: 3 },
      { name: "Jalapeno Poppers ", price: 3 },
      { name: "Mozzarelaa Sticks ", price: 2.75 },
      { name: "Garlic Bread ", price: 1.25 },
      { name: "Mac Bites ", price: 4.5 },
      { name: "Garlic Cheese Bread ", price: 2 },
      { name: "French Fries ", price: 1.5 },
      { name: "Cheese Fries ", price: 2.25 },
      { name: "Franks Fries ", price: 2.25 },
      { name: "Patty Fries ", price: 3.5 },
      { name: "Ranch Fries ", price: 2.25 },
      { name: "Ranch Sause ", price: 0.75 },
      { name: "Cheese Sause ", price: 0.75 },
    ],
  },
  {
    name: "Sandwiches",
    variations: [
      { name: "Stromboli", price: 3.25 },
      { name: "Marvin Special Deluxe Sandwich ", price: 3 },
      { name: "Garlic Cheeseburger", price: 3.5 },
      { name: "Garlic Chickenburger", price: 3 },
      { name: "Hamberger", price: 3.15 },
      { name: "Cheeseburger", price: 3.5 },
      { name: "DePauw Burger", price: 4.25 },
      { name: "Fish Sandwich", price: 6 },
      { name: "Grilled Cheese Sandwich", price: 5.25 },
      { name: "Beta Suit Sandwich", price: 6 },
      { name: "Tenderloin Sandwich ", price: 5.75 },
      { name: "Steak Philly Sandwich", price: 6 },
      { name: "Chiken Philly", price: 6 },
      { name: "Hot Ham And cheese ", price: 3 },
      { name: "Toasded Cheese", price: 2.25 },
      { name: "BLT", price: 4.35 },
    ],
  },
  {
    name: "Mexican",
    variations: [
      { name: "Burrito", price: 3.25 },
      { name: "Burrito with Sour Cream", price: 3 },
      { name: "Ole", price: 3.5 },
      { name: "Wet Burrito", price: 3 },
      { name: "Nachos", price: 3.15 },
    ],
  },
  {
    name: "Desserts",
    variations: [{ name: "Cheescake", price: 2 }],
  },
];

const drinks: SDSDrinkMenuItem[] = [
  { name: "Coke", sizeAndPrice: [{ S: 1.75 }] },
  { name: "Sprite", sizeAndPrice: [{ S: 1.75 }] },
  { name: "Diet Coke", sizeAndPrice: [{ S: 1.75 }] },
  { name: "Pibb Extra", sizeAndPrice: [{ S: 1.75 }] },
  { name: "Lemonade", sizeAndPrice: [{ S: 1.75 }] },
  { name: "Mellow Yellow", sizeAndPrice: [{ S: 1.75 }] },
  { name: "Fresh Brewed Iced Tea", sizeAndPrice: [{ S: 1.75 }] },
];

export const Menu: FoodStoreData = {
  name: "Marvins",
  mainItems: mainItems,
  drinks: drinks,
  address: "202 S College Ave, Greencastle, IN 46135",
  hours: hours,
};
