const express = require('express');

const {viewAllBookings, createNewBooking, viewSingleBooking} = require('../controllers/bookingController');


const router = express.Router();


router.get('/', viewAllBookings);
router.post('/', createNewBooking);
router.get('/:id', viewSingleBooking)



module.exports = router;