const ride = require('../models/payment');


module.exports.showinvoice = (req, res, next) => {
   let id=req.params.id;
   console.log(id);
    ride.findByPk(id)
  
    .then(rides => {
        res.render('invoice', {
            PickUp: rides.PickUp,
            Destination: rides.Destination,
            Price: rides.Price,
            user: req.identity.user
            
        });
    })
}