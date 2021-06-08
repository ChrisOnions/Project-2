// import models
const foodCategory = require("./foodCategory");
const foodBank = require("./foodBank");
const user = require("./user");
const foodItems = require("./foodItem");

// Users can have many food items
user.hasMany(foodItems, {
  foreignKey: "user_id",
});

// Food items belong to one user
foodItems.belongsTo(user, {
  foreignKey: "user_id",
});

// A food category can have many food items
foodCategory.hasMany(foodItems, {
  foreignKey: "foodCategoryId",
});

// A food item can belong to one category
foodItems.belongsTo(foodCategory, {
  foreignKey: "foodCategoryId",
});

// A foodbank can have many food items
foodBank.hasMany(foodItems, {
  foreignKey: "foodBankId",
});

// A food item can belong to one food bank
foodItems.belongsTo(foodBank, {
  foreignKey: "foodBankId",
});

// user.belongsTo(foodBank, {
//   foreignKey: ''
// })

// foodBank.hasOne(user, {
//   foreignKey: ''
// })

module.exports = { foodCategory, user, foodBank, foodItems };
