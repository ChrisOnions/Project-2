const seedFoodCategories = require("./seedFoodCategories");
const seedFoodItems = require("./seedFoodItems");
const SeedfoodBank = require("../seeds/seedFoodBank");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: false });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedFoodCategories();
  console.log("\n----- FOOD CATEGORIES SEEDED -----\n");
  await seedFoodItems();
  console.log("\n----- FOOD ITEMS SEEDED -----\n");
  await SeedfoodBank("\n----- FOOD BANK SEEDED -----\n");
  console.log("\n----- FOOD BANK SEEDED -----\n");
  process.exit(0);
};

seedAll();
