const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const payment = sequelize.define('payment',{
    pay_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    PickUp: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    Destination: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    Price: {
        type: DataTypes.INTEGER,
        primaryKey: true,
       
    },
   
});

module.exports = payment;