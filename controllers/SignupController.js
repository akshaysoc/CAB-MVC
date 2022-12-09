const cabsignup = require('../models/CabSignup');

module.exports.index = (req, res, next) => {
    cabsignup.findAll().then(cabdata => {
        res.render('cabsignin', {
            data: cabdata
        });
    })
}

module.exports.login = (req, res, next)=>{
    res.render('cabsignin');
}
module.exports.getHome = (req, res, next)=>{
    res.render('home');
}
module.exports.getIndex = (req, res, next)=>{
    res.render('cabhome');
}
module.exports.signup = (req, res, next)=>{
    res.render('cabsignup');
}
// module.exports.pay = (req, res, next)=>{
//     res.render('payment');
// }
module.exports.admin = (req, res, next)=>{
    res.render('admin');
}



module.exports.loginPost = async (req, res, next)=>{
    const email = req.body.email;
    const password = req.body.Password;
    const userFromDb = await cabsignup.findOne({
        where: {Email: email, Password: password}
    });
    
    if(userFromDb == null){
        res.render('cabhome', {message: 'No user with this email or password was found.'})
    }
    if(userFromDb.Role==0){
        req.session.userId = userFromDb.dataValues.id;
        res.redirect('/admin'); 
    }
    else{
    req.session.userId = userFromDb.dataValues.id;
    res.redirect('/index');
    }
}

module.exports.signup = (req, res, next) => {
    res.render('cabsignup');
}

module.exports.addNew = (req, res, next) => {
    cabsignup.create({
            Fullname: req.body.fullname,
            MobileNo: req.body.mobile_no,
            Email: req.body.email,
            Password: req.body.Password,
            Cpassword: req.body.cpassword,
        })
        .then(user => {
            res.redirect("/login");
        })
}

// module.exports.cupd = (req, res, next)=>{
//     res.render('cabupdate');
// }


module.exports.logout = (req,res,next)=>{
    req.session = null;
    res.redirect("/login");
}