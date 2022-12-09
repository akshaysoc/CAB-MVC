const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const Cab = sequelize.define('Cab',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Fullname: {
        type: DataTypes.STRING(50),
        allowNull: false,
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
    Cpassword: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Role: {
        type: DataTypes.INTEGER,
        allowNull:false,
        defaultValue: 1
    }
});

module.exports = Cab;