const user = require('./CabSignup')
const book = require('./CabBook')
const driver = require('./Dsignup');
const payment = require('./payment');

user.hasOne(book);
book.belongsTo(user,{
    foreignKey:{
        name:'user_id',
        field:'user_id',
        allowNull:false
    }
});

user.sync({alter: true});
book.sync({alter: true});
driver.sync({alter: true});
payment.sync({alter: true});