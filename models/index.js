// import models
const Food_Category = require("./FoodCategory");
const User = require('./user');
const Food_bank = require('./Foodbank');
const Food_items = require('./FoodItem');
//Users dont relate to anything

// User.hasMany(Food_items, {
//   foreignKey: ''
// })

// Food_items.belongsTo(User, {
//   foreignKey: ''
// })

Food_Category.hasMany(Food_items, {
  foreignKey: 'foodCategory'
})

Food_items.belongsTo(Food_Category, {
  foreignKey: 'foodCategory'
})

Food_bank.hasMany(Food_items, {
  foreignKey: 'foodBankId'
})

Food_items.belongsTo(Food_bank, {
  foreignKey: 'foodBankId'
})

// User.belongsTo(Food_bank, {
//   foreignKey: ''
// })

// Food_bank.hasOne(User, {
//   foreignKey: ''
// })

module.exports = { Food_Category, User, Food_bank, Food_items };

