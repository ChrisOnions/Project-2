const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class FoodBank extends Model { }

FoodBank.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // foodItemId: { // used
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "FoodItem",
    //     key: "id",
    //   },
    // },
    quantity: {
      type: DataTypes.INTEGER,
    },
    donatedDate: {
      type: DataTypes.STRING,
    },
    // donatedByUserId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
  },
  {
    sequelize,
    freezeTableName: true, // Removes plurals
    underscored: true,
    modelName: "foodBank",
  }
);

module.exports = FoodBank;