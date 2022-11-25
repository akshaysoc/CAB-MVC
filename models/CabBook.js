const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const Book = sequelize.define('Book',{
    booking_id: {
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
    DateOfTravel: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    TimeOfTravel: {
        type: DataTypes.TIME,
        allowNull: false
    },
    NoOfPassengers: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    MobileNo: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Book;