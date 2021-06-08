const seedFoodCategories = require("./seedFoodCategories");
const seedFoodItems = require("./seedFoodItems");
const seedUser = require("./seedUser");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: false });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedUser();
  console.log("\n----- USER SEEDED -----\n");
  await seedFoodCategories();
  console.log("\n----- FOOD CATEGORIES SEEDED -----\n");
  await seedFoodItems();
  console.log("\n----- FOOD ITEMS SEEDED -----\n");

  process.exit(0);
};

seedAll();
