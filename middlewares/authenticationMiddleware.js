const user = require('../models/CabSignup');

module.exports = async (req, res, next) => {
    req.identity = {
        isAuthenticated: false,
        user: null
    }



    if(req.url == "/home" || req.url == "/signup" ||req.url == "/login" ||req.url == "/driverlogin"||req.url == "/driversignup"){
        return next();
    }

let userId = req.session.userId;
if(!userId || userId == null){
    return res.redirect("/login");
}

let userFromDb = await user.findByPk(userId);
if(userFromDb == null){
    return res.redirect("/login");
}

req.identity.isAuthenticated = true;
req.identity.user = {
    id: userFromDb.dataValues.id,
    fullName: userFromDb.dataValues.Fullname,
    email: userFromDb.dataValues.Email,
    
}
next();
}
