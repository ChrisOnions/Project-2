// import models
const foodCategory = require("./foodCategory");
const user = require('./user');
const foodBank = require('./foodBank');
const foodItems = require('./foodItem');
//users dont relate to anything

user.hasMany(foodItems, {
  foreignKey: 'user_id'
})

foodItems.belongsToMany(user, {
  through: "foodItemsId"
})

foodCategory.hasMany(foodItems, {
  foreignKey: 'foodCategoryId'
})

foodItems.belongsTo(foodCategory, {
  foreignKey: 'foodCategoryId'
})

foodBank.hasMany(foodItems, {
  foreignKey: 'foodBankId'
})

foodItems.belongsTo(foodBank, {
  foreignKey: 'foodBankId'
})

// user.belongsTo(foodBank, {
//   foreignKey: ''
// })

// foodBank.hasOne(user, {
//   foreignKey: ''
// })

module.exports = { foodCategory, user, foodBank, foodItems };

