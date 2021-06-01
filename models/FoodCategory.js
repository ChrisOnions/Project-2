const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class FoodCategory extends Model {}

FoodCategory.init(
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
      validate: {
        notEmpty: true,
      }
    },
    is_perishable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'FoodCategory',
  }
);

module.exports = FoodCategory;