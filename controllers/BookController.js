const cabsignup = require('../models/CabBook');

module.exports.book = (req, res, next) => {
    res.render('cabbook');
}

module.exports.getpay = (req, res, next) => {
    res.render('payment');
}


module.exports.preBook = (req, res, next) => {
    cabsignup.create({
            PickUp: req.body.pickup,
            Destination: req.body.destination,
            DateOfTravel: req.body.dot,
            TimeOfTravel: req.body.tot,
            NoOfPassengers: req.body.passenger,
            MobileNo:req.body.mobile
        })
        .then(user => {
            res.redirect("/payment");
        })
}