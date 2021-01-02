const Sequelize = require('sequelize');
const sequelize = require('../configuration/config');

// define sequlize Model - owner

const user = sequelize.define('users', {
    
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
    primaryKey: true,
  },
  Is_Owner:{
    type: Sequelize.INTEGER,
    defaultValue:1,
  },
  Is_Borrower:{
    type: Sequelize.STRING,
    allowNull: false,
    defaultvalue:0,
  }
},
  {timestamps:false});


module.exports = user;

