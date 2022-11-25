const ride = require('../models/CabBook');

// module.exports.myride = (req, res, next)=>{
//     res.render('myride');
// }

module.exports.show = (req, res, next) => {
    ride.findAll().then(rides1 => {
        res.render('myride', {
            data: rides1,
            // identity: req.identity.user
        });
    })
}
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