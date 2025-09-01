const mongoose = require('mongoose')

const singoloAllenamentoSchema = new mongoose.Schema({
    today:{
        type: String,
        required: false
    },
    user:{
        type: String,
        required: false
    },
    image:{
            type: String,
            required: false,
            default: "file_1715325537969.png"
        },
    title:{
        type: String,
        required: true
    },
    tipologia:{
        type: String,
        required: true
    },
    livello:{
        type: String,
        required: true
    },
    reps:{
        type: Number,
        required: true
    },
    rest:{
        type: Number,
        required: true
    },
    series:{
        type: Number,
        required: true
    },
    loads:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        default:"OPEN",
        required: false
    },
    dataChiusura:{
        type: String,
        required: false
    },
    notaAllenamento:{
        type: String,
        required: false
    },

    registered:{
        type: Array,
        default:[],
        required: false
    }


},{ timestamps:true })


module.exports = mongoose.model("singoloAllenamentoModel", singoloAllenamentoSchema);
