const express = require('express');

const {viewAllBookings, createNewBooking, viewSingleBooking, confermaPrenotazione, viewBookingTBA, vediApprovate, viewSingolaPren} = require('../controllers/bookingController');


const router = express.Router();


router.get('/', viewAllBookings);
router.post('/', createNewBooking);
router.get('/prenotazioni-singolo-utente/:id', viewSingleBooking)
router.patch('/conferma-prenotazione/:id', confermaPrenotazione)
router.get('/prenotazioni-da-approvare', viewBookingTBA)
router.get('/prenotazioni-approvate', vediApprovate)
router.get('/vedi-singola-pren/:id', viewSingolaPren)


module.exports = router;
