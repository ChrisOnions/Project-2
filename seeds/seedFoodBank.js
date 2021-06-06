const foodBank = require("../models/foodBank");
id, name, address, quantity, donated_date, created_at, updated_at
const foodBankData = [
    {
      name: "Red Cross Relief",
      address: "Shop 128 , 7 Albion road, boxhill, Vic, 3128",
      quantity: 12,
      donated_date: 8 / 04 / 2021,
      donatedByUserId: null,
      foodItemId: null,
    },
    {
        name: "United children relief fund",
        address: "Shop 128 , 88 camberwell road, camberwell, Vic, 3122",
        quantity: 11,
        donated_date: 5 / 02 / 2020,
        donatedByUserId: null,
        foodItemId: null,
    }
  ];
  
  const seedFoodBanks = () => foodBank.bulkCreate(foodBankData);
  
  module.exports = seedFoodBanks;