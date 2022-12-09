const Dsignup = require('../models/Dsignup');
const rides =  require('../models/CabBook');

module.exports.dhome = (req, res, next)=>{
    res.render('driverhome');
}
module.exports.dlogin = (req, res, next)=>{
    res.render('driverlogin');
}
module.exports.dsignup = (req, res, next)=>{
    res.render('driversignup');
}
module.exports.dshow = (req, res, next) => {
    rides.findAll().then(rides1 => {
        res.render('driverrequest', {
            data: rides1,
        });
    })
}

module.exports.loginDriver = async (req, res, next)=>{
    const email = req.body.email;
    const password = req.body.Password;
    const userFromDb = await Dsignup.findOne({
        where: {Email: email, Password: password}
    });
    
    if(userFromDb == null){
        res.render('driverhome', {message: 'No user with this email or password was found.'})
    }
    req.session.userId = userFromDb.dataValues.id;
    res.redirect('/driverhome');
}

module.exports.addNewDriver = (req, res, next) => {
    Dsignup.create({
            Fullname: req.body.name,
            DrivingLisenceNo: req.body.lisence,
            VehicleNo: req.body.vehicleno,
            MobileNo: req.body.mobile,
            Email: req.body.email,
            Password: req.body.password,
        })
        .then(user => {
            res.redirect("/driverlogin");
        })
}

module.exports.dlogout = (req,res,next)=>{
    req.session = null;
    res.redirect("/driverlogin");
}
