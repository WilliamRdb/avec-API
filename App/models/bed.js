const {DataTypes, Model} = require ('sequelize');
const sequelize = require('../database');

class Bed extends Model {};

Bed.init ({
  num: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  floor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  availability: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  occupancy_time: {
  type: DataTypes.INTEGER,
  allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated_at: {	
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'bed',
  timestamps:true,
});

module.exports = Bed;