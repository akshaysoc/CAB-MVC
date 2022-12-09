const express = require('express');
const controller = require('../controllers/SignupController');
const Dcontroller = require('../controllers/DsignupController');
const bookController = require('../controllers/BookController');
const ridecontroller = require('../controllers/MyRideController');
const invoicecontroller = require('../controllers/InvoiceController');
const admincontroller = require('../controllers/AdminController');

const router = express.Router();

router.get('/', controller.index);
router.get('/signup', controller.signup);
router.post('/signup', controller.addNew);
router.get('/login', controller.login);
router.post('/login', controller.loginPost);
router.get('/home', controller.getHome);
router.get('/index', controller.getIndex);
router.get('/logout', controller.logout);
router.get('/admin', controller.admin);
// router.get('/cabupdate', controller.cupd);

//Driver login-signup
router.get('/driverlogin', Dcontroller.dlogin);
router.post('/driverlogin', Dcontroller.loginDriver);
router.get('/driversignup', Dcontroller.dsignup);
router.post('/driversignup', Dcontroller.addNewDriver);
router.get('/driverhome', Dcontroller.dhome);
router.get('/driverlogout', Dcontroller.dlogout);
router.get('/request', Dcontroller.dshow);

//booking
router.get('/cabbook', bookController.book);
router.post('/cabbook', bookController.preBook);
router.get('/payment', bookController.getpay);
router.get('/invoice', bookController.invoice);

// router.get('/myride', ridecontroller.myride);
router.get('/myride', ridecontroller.show);
router.post('/update/:booking_id', ridecontroller.updatePost);
router.get('/update/:booking_id', ridecontroller.update);
router.get('/delete/:booking_id', ridecontroller.delete);

router.get('/invoice/:id', invoicecontroller.showinvoice);

router.get('/fulldata', admincontroller.show);
router.post('/update/:booking_id', admincontroller.updatePost);
router.get('/update/:booking_id', admincontroller.update);
router.get('/delete/:booking_id', admincontroller.delete);
router.get('/addroutes', admincontroller.addroutes);
router.post('/addroutes', admincontroller.addNewRoute);


module.exports = router;