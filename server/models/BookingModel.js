const mongoose = require('mongoose')

const bookingsSchema = new mongoose.Schema({

    user:{
        type: String,
        required: false
    },
    data:{},
    orario:{},
    status:{
        type: String,
        default:"IN APPROVAZIONE",
        required: false
    }



},{ timestamps:true })


module.exports = mongoose.model("BookingModel", bookingsSchema);