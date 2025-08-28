const AllenamentiSingoli = require('../models/SingoloAllenamentoModel');
const mongoose = require('mongoose');

// Get all AllenamentiSingoli: OK
const vediAllenamentoSingolo = async (req, res)=> {

    console.log("Req from /")
    console.log("View all AllenamentiSingoli")

    const allenamentiSingoli = await AllenamentiSingoli.find({}).sort({createdAt: -1});
    res.status(200).json(allAllenamentiSingoli)

}

// Create a NEW workout:
const creaAllenamentoSingolo = async (req, res)=> {


    const {today, user, title, series, reps, rest, loads, status, notaAllenamento, tipologia} = req.body

    console.log("FYTFYFFTFYTFYT")
    console.log(req.body)
    


    // Add doc to the Mongo DB

    try{
        const allenamentoSingolo = await AllenamentiSingoli.create({today, user, title, series, reps, rest, loads, status, notaAllenamento, tipologia})
        res.status(200).json(allenamentoSingolo)
    }

    catch(error){
        res.status(400).json({error: error.message})
    }

}





module.exports = {
    vediAllenamentoSingolo,
    creaAllenamentoSingolo  
    
}
