const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class FoodItem extends Model { }

FoodItem.init(
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
    expiryDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    isFrozen: {
      type: DataTypes.BOOLEAN,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      }
    },
    foodCategoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: "foodCategory",
        key: "id",
      },
    },
    donated: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    foodBankId: {
      type: DataTypes.INTEGER,
      references: {
        model: "foodBank",
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    alreadyPurchased: {
      type: DataTypes.BOOLEAN,
    },
    brand: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "foodItem",
  }
);

module.exports = FoodItem;
