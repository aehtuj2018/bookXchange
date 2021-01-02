
const Sequelize = require('sequelize');
sequelize = new Sequelize('bookexgdb', 'abdi', 'abdiabdi123', {dialect:  'mysql'});

module.exports= sequelize;
