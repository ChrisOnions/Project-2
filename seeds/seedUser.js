const user = require("../models/user");
const bcrypt = require("bcrypt");

const seedUser = async () =>
  user.bulkCreate([
    {
      name: "Kenzie",
      email: "cat@kencat.com",
      password: await bcrypt.hash("1234", 10),
    },
    {
      name: "Oscar",
      email: "cat@occat.com",
      password: await bcrypt.hash("1234", 10),
    },
  ]);

module.exports = seedUser;
