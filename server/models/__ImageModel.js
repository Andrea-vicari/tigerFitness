const mongoose = require('mongoose')

const imagesSchema = new mongoose.Schema({

    user:{
        type: String,
        required: false
    },
    image:{
        type: String,
        required: false
    },


},{ timestamps:true })


module.exports = mongoose.model("ImageModel", imagesSchema);
