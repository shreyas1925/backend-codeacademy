'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      Note.belongsTo(User, {
        foreignKey: 'user_id',
        onDelete: 'cascade'
      })
    }
  }
  Note.init({
    title: DataTypes.STRING,
    userID:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Note',
  });
  return Note;
};