const foodBank = require("../models/foodBank");

const foodBankSeed = [
  {
    name: 'Webster Foods',
    address: '29 Stephen Rd, Dandenong South VIC 3175',
    foodItemId: '',
    quantity: '4',
    donatedDate: '2021-04-23',
    donatedByUserId: '',
  },
  {
    name: 'Foodbank Victoria',
    address: '4/2 Somerville Rd, Yarraville VIC 3013',
    foodItemId: '',
    quantity: '1',
    donatedDate: '2021-04-23',
    donatedByUserId: '',
  },
  {
    name: 'Hope on Friday',
    address: '3 Clifford Grove, Tecoma VIC 3160',
    foodItemId: '',
    quantity: '5',
    donatedDate: '2021-04-23',
    donatedByUserId: '',
  },
  {
    name: "Red Cross Relief",
    address: "Shop 128 , 7 Albion road, boxhill, Vic, 3128",
    quantity: 12,
    donated_date: 8 / 04 / 2021,
    donatedByUserId: 1,
    foodItemId: 1,
  },
  {
    name: "United children relief fund",
    address: "Shop 128 , 88 camberwell road, camberwell, Vic, 3122",
    quantity: 11,
    donated_date: 5 / 02 / 2020,
    donatedByUserId: 2,
    foodItemId: 2,
    }
]

const SeedfoodBank = () => foodBank.bulkCreate(foodBankSeed);

module.exports = SeedfoodBank;