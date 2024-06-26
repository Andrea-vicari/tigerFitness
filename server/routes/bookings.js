const express = require('express');

const {viewAllBookings, createNewBooking, viewSingleBooking, updateStatusBooking} = require('../controllers/bookingController');


const router = express.Router();


router.get('/', viewAllBookings);
router.post('/', createNewBooking);
router.get('/:id', viewSingleBooking)
router.patch('/:id', updateStatusBooking)


module.exports = router;