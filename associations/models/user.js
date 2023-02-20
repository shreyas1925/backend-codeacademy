'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate({Note}) {
            User.hasMany(Note);
        }
    }
    User.init({
        title: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};