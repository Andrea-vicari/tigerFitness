const Bookings = require('../models/BookingModel');
const mongoose = require('mongoose');

// Get all Bookings: OK
const viewAllBookings = async (req, res)=> {

    console.log("Req from /")
    console.log("View all Bookings")

    const allBookings = await Bookings.find({}).sort({createdAt: -1});
    res.status(200).json(allBookings)

}

// Create a NEW booking:
const createNewBooking = async (req, res)=> {


    const {user, today, giorno, mese, anno, ora, minuto } = req.body


    // Add doc to the Mongo DB

    try{
        const booking = await Bookings.create({user, today, giorno, mese, anno, ora, minuto})
        res.status(200).json(booking)
    }

    catch(error){
        res.status(400).json({error: error.message})
    }

}

// View booking for a single user_id
const viewSingleBooking = async (req, res) => {
    console.log("======")
    console.log("Req from /id")
    console.log("View single booking ****** /// *****  ")

    const { id } = req.params;

    console.log(id)

    // const singleBooking = await Bookings.find({"_id": id});
    const singleBooking = await Bookings.find({"user.user_id": id});
    if(!singleBooking){
        return res.status(400).json({error: "No WorkOut found"})
    }

    res.status(200).json(singleBooking)
}

// View Booking to be approved
const viewBookingTBA = async (req, res) =>{


    const bookingTBA = await Bookings.find({"status": "Da approvare"});
    if(!bookingTBA){
        return res.status(400).json({error: "No WorkOut found"})
    }

    res.status(200).json(bookingTBA)
}
// View Booking approved
const vediApprovate = async (req, res) =>{


    const prenotApprovate = await Bookings.find({"status": "Approvato"});
    if(!prenotApprovate){
        return res.status(400).json({error: "No WorkOut found"})
    }

    res.status(200).json(prenotApprovate)
}

const aggiornaPrenotazione = async (req, res) =>{
    const {status } = req.body
    const { id } = req.params;
    const singleBooking = await Bookings.findOneAndUpdate({"_id":id},{
        ...req.body
    })
    if(!singleBooking){
        return res.status(400).json({error: "No WorkOut found"})
    }
    res.status(200).json(singleBooking)

}

// Get all Bookings: OK
const viewSingolaPren = async (req, res)=> {
    const { id } = req.params;
    console.log("*/*/*/*/")
    console.log("Richiesta singola prenotazione")


    const singleBooking = await Bookings.find({"_id": id});
    res.status(200).json(singleBooking)

}

module.exports = {
    viewAllBookings,
    createNewBooking,
    viewSingleBooking,
    aggiornaPrenotazione,
    viewBookingTBA,
    vediApprovate,
    viewSingolaPren
}
