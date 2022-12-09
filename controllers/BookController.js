const cabsignup = require('../models/CabBook');
const price = require('../models/payment');

module.exports.book = (req, res, next) => {
    res.render('cabbook');
}

module.exports.getpay = (req, res, next) => {
    res.render('payment');
}
module.exports.invoice = (req, res, next) => {
    res.render('invoice');
}

module.exports.preBook = (req, res, next) => {
    cabsignup.create({
        PickUp: req.body.pickup,
        Destination: req.body.destination,
        DateOfTravel: req.body.dot,
        TimeOfTravel: req.body.tot,
        NoOfPassengers: req.body.passenger,
        MobileNo: req.body.mobile,
        user_id: req.identity.user.id
    })
        .then(user => {

            const PickupPoint = req.body.pickup;
            const Destination =  req.body.destination;
            console.log(PickupPoint)
            price.findOne({
                where: { PickUp: PickupPoint, Destination: Destination }

            })
                .then(amount => {
                    console.log(amount.price)
                    res.render("payment", {
                        Price: amount.Price,
                        pay_id: amount.pay_id,
                        PickUp: amount.PickUp,
                        Destination: amount.Destination
                    })
                })
            // res.redirect("/payment");
        });
}