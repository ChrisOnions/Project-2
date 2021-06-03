
// import models
const FoodCategory = require("./FoodCategory");
const User = require('./user');
const Food_items = require('./foodItem');
const Food_bank = require('./foodbank');

//Users dont relate to anything

// User.hasMany(Food_items, {
//   foreignKey: ''
// })

// Food_items.belongsTo(User, {
//   foreignKey: ''
// })

Food_items.hasOne(Food_Catagory, {
  foreignKey: 'foodCategory'
})

Food_Catagory.belongsTo(Food_items, {
  foreignKey: 'foodCategory'
})

Food_items.hasMany(Food_bank, {
  foreignKey: 'foodItemId'
})

Food_bank.belongsTo(Food_items, {
  foreignKey: 'foodItemId'
})

// User.belongsTo(Food_bank, {
//   foreignKey: ''
// })

// Food_bank.hasOne(User, {
//   foreignKey: ''
// })

module.exports = { User, Food_items, Food_bank, Food_Catagory };

