const FoodCategory = require("../models/foodCategory");

const foodCategoryData = [
  {
    name: "Meat Products",
  },
  {
    name: "Fish Products",
  },
  {
    name: "Poultry Products",
  },
  {
    name: "Dairy Products",
  },
  {
    name: "Fat Products",
    is_perishable: false,
  },
  {
    name: "Grain, Flour or Wheat Products",
  },
  {
    name: "Fruits and Vegetables",
  },
  {
    name: "Canned or Bottled Goods",
    is_perishable: false,
  },
];

const seedFoodCategories = () => FoodCategory.bulkCreate(foodCategoryData);

module.exports = seedFoodCategories;
