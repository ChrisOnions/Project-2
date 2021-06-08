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
]

const SeedfoodBank = () => foodBank.bulkCreate(foodBankSeed);

module.exports = SeedfoodBank;