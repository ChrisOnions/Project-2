const foodItem = require("../models/FoodItem");

const foodItemData = [
  {
    name: "Full-cream Milk",
    expiryDate: "2021-06-17", // passed in as ISO-8061
    isFrozen: false,
    user_id: 2,
    foodCategoryId: 4,
    quantity: 1,
    alreadyPurchased: true,
    brand: "Coles Brand",
  },
  {
    name: "Raw beef steak",
    expiryDate: "2021-06-08",
    isFrozen: false,
    user_id: 1,
    foodCategoryId: 1,
    quantity: 2,
    alreadyPurchased: true,
    brand: "BeastMeats",
  },
  {
    name: "Cooked Salmon",
    expiryDate: "2021-06-16",
    isFrozen: false,
    user_id: 1,
    foodCategoryId: 2,
    quantity: 3,
    alreadyPurchased: true,
    brand: "Fisherman's Choice",
  },
  {
    name: "Eggs",
    expiryDate: "2021-06-13", // passed in as ISO-8061
    isFrozen: false,
    user_id: 2,
    foodCategoryId: 5,
    quantity: 12,
    alreadyPurchased: false,
    brand: "FarmRight",
  },
  {
    name: "White Bread Loaf",
    expiryDate: "2021-06-10",
    isFrozen: false,
    user_id: 1,
    foodCategoryId: 6,
    quantity: 1,
    alreadyPurchased: true,
    brand: "ColesBrand",
    is_perishable: false,
  },
  {
    name: "Pepsi cans",
    expiryDate: "2021-12-03",
    isFrozen: false,
    user_id: 1,
    foodCategoryId: 8,
    quantity: 24,
    alreadyPurchased: false,
    brand: "PespsiCo",
  },
  {
    name: "Brussel Sprouts",
    expiryDate: "2021-08-03",
    isFrozen: false,
    user_id: 1,
    foodCategoryId: 7,
    quantity: 20,
    alreadyPurchased: true,
    brand: "unkown",
  },
  {
    name: "Apples",
    expiryDate: "2021-06-11",
    isFrozen: false,
    user_id: 1,
    foodCategoryId: 7,
    quantity: 5,
    alreadyPurchased: false,
    brand: "unkown",
  },
];

const seedFoodItems = () => foodItem.bulkCreate(foodItemData);

module.exports = seedFoodItems;
