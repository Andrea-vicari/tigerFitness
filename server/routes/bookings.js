-singola-prenotazioneconst express = require('express');

const {viewAllBookings, createNewBooking, viewSingleBooking, updateStatusBooking, viewBookingTBA} = require('../controllers/bookingController');


const router = express.Router();


router.get('/', viewAllBookings);
router.post('/', createNewBooking);
router.get('/vedi-singola-prenotazione/:id', viewSingleBooking)
router.patch('/conferma-prenotazione/:id', updateStatusBooking)
router.get('/tba/list', viewBookingTBA)


module.exports = router;
