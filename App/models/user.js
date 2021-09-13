const {DataTypes, Model} = require ('sequelize');
const sequelize = require('../database');

class User extends Model {};

User.init ({
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
  type: DataTypes.STRING,
  allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'user',
});

module.exports = User;