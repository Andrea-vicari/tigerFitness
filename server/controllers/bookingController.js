const Bookings = require('../models/bookingModel');
const mongoose = require('mongoose');

// Get all Bookings: OK
const viewAllBookings = async (req, res)=> {

    console.log("Req from /")
    console.log("View all Bookings")

    const allBookings = await Bookings.find({}).sort({createdAt: -1});
    res.status(200).json(allBookings)

}

module.exports = {
    viewAllBookings
}