const express = require('express');

const {viewAllBookings, createNewBooking} = require('../controllers/bookingController');


const router = express.Router();


router.get('/', viewAllBookings);
router.post('/', createNewBooking);




module.exports = router;