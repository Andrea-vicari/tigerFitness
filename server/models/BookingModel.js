const mongoose = require('mongoose')

const bookingsSchema = new mongoose.Schema({

    user:{
        type: String,
        required: false
    },
    giorno:{
        type:Number
    },
    mese:{
        type:String
    },
    anno:{
        type:Number
    },

    ora:{
        type:Number
    },
    minuto:{
        type:Number
    },
    status:{
        type: String,
        default:"IN APPROVAZIONE"
    }

},{ timestamps:true })


module.exports = mongoose.model("BookingModel", bookingsSchema);