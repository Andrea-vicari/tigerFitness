const express = require('express');

const {viewAllBookings, addBookings} = require('../controllers/bookingController');


const router = express.Router();


router.get('/', viewAllBookings);

router.post('/', addBookings);



module.exports = router;