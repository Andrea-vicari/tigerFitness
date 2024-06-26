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

const viewSingleBooking = async (req, res) => {
    console.log("======")
    console.log("Req from /id")
    console.log("View single workouts")

    const { id } = req.params;

    const allBookings = await Bookings.find({}).sort({createdAt: -1});
    res.status(200).json(allBookings)
}

module.exports = {
    viewAllBookings,
    createNewBooking,
    viewSingleBooking
}