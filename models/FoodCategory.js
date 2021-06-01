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
        min: 3,
        is: /^\S\w*\S$/i, 
        // \S matches single charater OTHER THAN white space - 
        // this regEx expression is no whitespace at the start of string and no whitespace at the end of string 
        // with any alphanumeric character from the basic Latin alphabet
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