const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const driver = sequelize.define('Driver',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Fullname: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    DrivingLisenceNo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    VehicleNo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    MobileNo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING(50),
        allowNull: true,
        unique: true
    },
    Password: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    
});

module.exports = driver;