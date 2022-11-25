const express = require('express');
const controller = require('../controllers/SignupController');
const bookController = require('../controllers/BookController');
const ridecontroller = require('../controllers/MyRideController');

const router = express.Router();

router.get('/', controller.index);
router.get('/signup', controller.signup);
router.post('/signup', controller.addNew);
router.get('/login', controller.login);
router.get('/index', controller.getIndex);
router.post('/login', controller.loginPost);
// router.get('/cabupdate', controller.cupd);

//booking
router.get('/cabbook', bookController.book);
router.post('/cabbook', bookController.preBook);
router.get('/payment', bookController.getpay);

// router.get('/myride', ridecontroller.myride);
router.get('/myride', ridecontroller.show);
router.post('/update/:booking_id', ridecontroller.updatePost);
router.get('/update/:booking_id', ridecontroller.update);
router.get('/delete/:booking_id', ridecontroller.delete);

module.exports = router;