const seedFoodCategories = require("./food-categories-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedFoodCategories();
  console.log("\n----- FOOD CATEGORIES SEEDED -----\n");

  process.exit(0);
};

seedAll();
