const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose')
require ('dotenv').config();
const app = express();
const cloudinary = require('cloudinary').v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_APIKEY,
    api_secret: process.env.CLOUDINARY_APISECRET,
    secure: false
});

console.log("BELOW CLOUDINARY CONFIGURATION")
//console.log(cloudinary.config())


app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended:true, limit: '50mb'}));


console.log(process.cwd())

app.use(cors(
    {
        // Use this in production (DO NOT PUT FINAL SLASH!!) //
        origin: ["https://tiger-fitness.vercel.app"],
        methods: ["POST", "GET", "PUT", "PATCH", "DELETE"],
        credentials: true

    }
));



mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        app.listen(process.env.PORT, () => console.log(`Connected to DB and Listening on port ${process.env.PORT}`));
    })
    .catch((error)=>{
        console.log(error)
    })

const workoutsRoutes = require('./routes/workouts');
const singoloAllenamentoRoutes = require('./routes/singoloAllenamentoRoutes');
const usersRoutes = require('./routes/users');
const bookingsRoutes = require('./routes/bookings');

app.use(workoutsRoutes)
app.use(usersRoutes)
app.use(bookingsRoutes)
app.use(singoloAllenamentoRoutes)


app.use('/api/workouts', workoutsRoutes)
app.use('/api/singoloAllenamento', singoloAllenamentoRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/bookings', bookingsRoutes)



