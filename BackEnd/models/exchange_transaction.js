const Sequelize = require('sequelize');
const sequelize = require('../configuration/config');
const book = require('./book');
//const exchange_transaction = require('./exchange_transaction');

// define sequlize Model - owner

const exchange_transactions = sequelize.define('exchange_transaction', {
    id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  user_email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
   is_borrowed:{
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: '0',
  },
  bookId:{
    type: Sequelize.INTEGER,
    allowNull: false,
  }

},
  {timestamps:false});

  

module.exports = exchange_transactions;
