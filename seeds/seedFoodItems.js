const foodItem = require("../models/FoodItem");

const foodItemData = [
  {
    name: "Full-cream Milk",
    expiryDate: '2021-06-17',
    isFrozen: false,
    foodCategoryId: 4,
    quantity: 1,
    alreadyPurchased: true,
    brand: "Coles Brand",
  },
  {
    name: "Raw beef steak",
    expiryDate: '2021-08-17',
    isFrozen: false,
    foodCategoryId: 1,
    quantity: 2,
    alreadyPurchased: true,
    brand: "BeastMeats",
  },
  {
    name: "Cooked Salmon",
    expiryDate: '2021-06-16',
    isFrozen: false,
    foodCategoryId: 2,
    quantity: 3,
    alreadyPurchased: true,
    brand: "Fisherman's Choice",
  },
  {
    name: "Eggs",
    expiryDate: '2021-07-13',
    isFrozen: false,
    foodCategoryId: 5,
    quantity: 12,
    alreadyPurchased: false,
    brand: "FarmRight",
  },
  {
    name: "White Bread Loaf",
    expiryDate: '2021-06-10',
    isFrozen: false,
    foodCategoryId: 6,
    quantity: 1,
    alreadyPurchased: true,
    brand: "ColesBrand",
    is_perishable: false,
  },
  {
    name: "Pepsi cans",
    expiryDate: '2023-03-12',
    isFrozen: false,
    foodCategoryId: 8,
    quantity: 24,
    alreadyPurchased: false,
    brand: "PespsiCo",
  },
  {
    name: "Brussel Sprouts",
    expiryDate: '2021-08-21',
    isFrozen: false,
    foodCategoryId: 7,
    quantity: 20,
    alreadyPurchased: true,
    brand: "unkown",
  },
  {
    name: "Apples",
    expiryDate: '2021-06-17',
    isFrozen: false,
    foodCategoryId: 7,
    quantity: 5,
    alreadyPurchased: false,
    brand: "unkown",
  },
];

const seedFoodItems = () => foodItem.bulkCreate(foodItemData);

module.exports = seedFoodItems;
