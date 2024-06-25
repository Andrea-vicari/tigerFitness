const express = require('express');

const {viewAllBookings} = require('../controllers/bookingController');


const router = express.Router();


router.get('/', viewAllBookings);





module.exports = router;