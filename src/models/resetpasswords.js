'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ResetPasswords extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ResetPasswords.init({
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ResetPasswords',
  });
  return ResetPasswords;
};