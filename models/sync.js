const user = require('./CabSignup')
const book = require('./CabBook')
user.sync({alter: true});
book.sync({alter: true});