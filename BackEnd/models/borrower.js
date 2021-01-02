const Sequelize = require('sequelize');
const sequelize = require('../configuration/config');

// define sequlize Model - owner

const borrower = sequelize.define('borrower', {
    id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email:{
    type: Sequelize.STRING,
    allowNull: false,
  }
},
  {timestamps:false});

module.exports = borrower;

