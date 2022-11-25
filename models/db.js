const {Sequelize} = require('sequelize')

const sequelize = new Sequelize("cbms", "root", "Akshay@3100", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = sequelize;