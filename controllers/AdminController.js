const ride = require('../models/CabBook');
const profile = require('../models/CabSignup');
const price = require('../models/payment');
const cabdriver = require('../models/Dsignup');


module.exports.show = async(req, res, next) => {
    var rides = await ride.findAll();
    var profiles = await profile.findAll();
    var amount = await price.findAll();
    var ddata = await cabdriver.findAll();
    res.render('fulldata', {
        data: rides,
        profiles: profiles,
        cabdriver: ddata,
        price: amount
    });
    // ride.findAll().then(rides1 => {
    //     res.render('fulldata', {
    //         data: rides1,
    //         // identity: req.identity.user
    //     });
    // })
}

// module.exports.profileshow = (req, res, next) => {
//     profile.findAll().then(rides => {
//         res.render('fulldata', {
//             data: rides,
//             // identity: req.identity.user
//         });
//     })
// }
module.exports.update = async(req, res, next) => {
    ride.findByPk(req.params.booking_id)
        .then(rides => {
            res.render('cabupdate', {
                data: rides,  
            });
        });
}
module.exports.updatePost = async (req, res, next) => {
    // var movie = await movie.findByPk(req.params.id);
    await ride.update(
        {
            PickUp: req.body.pickup,
            Destination: req.body.destination,
            DateOfTravel: req.body.dot,
            TimeOfTravel: req.body.tot,
            NoOfPassengers: req.body.passenger,
            MobileNo:req.body.mobile
        },
        {
            where: {booking_id: req.params.booking_id}
        }
    )
    res.redirect('/myride');
}

module.exports.delete = async (req, res, next) => {
    let booking_id = req.params.booking_id;
    let rides = await ride.findByPk(booking_id);
    if (rides != null) {
        await ride.destroy({
            where: {
                booking_id: booking_id
            }
        });
        res.redirect("/myride");
    }
}

module.exports.addroutes = (req, res, next)=>{
    res.render('addroutes');
}
module.exports.addNewRoute = (req, res, next) => {
    price.create({
        PickUp: req.body.pickup,
        Destination: req.body.destination,
        Price: req.body.price,
        })
        .then(user => {
            res.redirect("/fulldata");
        })
}