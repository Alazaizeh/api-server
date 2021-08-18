"use strict";

// const POSTGRES_URI = process.env.POSTGRES_URI || 'postgres://localhost/postgres';
const POSTGRES_URI =
  process.env.POSTGRES_URI ||
  "postgresql://postgres:0000@localhost:5432/class04";
const { Sequelize, DataTypes } = require("sequelize");
const clothes = require("./clothes");
const food = require("./food");
const Collection = require("./collection-class");

var sequelize = new Sequelize(POSTGRES_URI, {});

const clothesModel = clothes(sequelize, DataTypes);
const foodModel = food(sequelize, DataTypes);

// create our relations that will add 'foreign keys' to our tables
// clothesModel.hasMany(foodModel, {
//   sourceKey: "id",
//   foreignKey: "customerId",
// });
// foodModel.belongsTo(clothesModel, {
//   foreignKey: "customerId",
//   targetKey: "id",
// });

const clothesCollection = new Collection(clothesModel);
const foodCollection = new Collection(foodModel);

module.exports = {
  db: sequelize,
  Clothes: clothesCollection,
  Food: foodCollection,
};
