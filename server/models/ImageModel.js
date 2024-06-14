const mongoose = require('mongoose')

const imagesSchema = new mongoose.Schema({


    image:{
        type:String,
        required: false
    },


},{ timestamps:true })


module.exports = mongoose.model("ImageModel", imagesSchema);
