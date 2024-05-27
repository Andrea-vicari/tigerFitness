const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose')
require ('dotenv').config();
const app = express();
const cookieParser = require('cookie-parser')
const path = require('path');


app.use(express.json());
// app.use(express.static('public'))

app.use(express.static(path.join(__dirname, 'public')));


app.use(cors(
    {
        // Use this in production (DO NOT PUT FINAL SLASH!!) //
        origin: ["https://pulsefit-client.vercel.app"],
        methods: ["POST", "GET", "PUT", "PATCH"],
        credentials: true
    }
));

app.use(cookieParser())

mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        app.listen(process.env.PORT, () => console.log(`Connected to DB and Listening on port ${process.env.PORT}`));
    })
    .catch((error)=>{
        console.log(error)
    })

const workoutsRoutes = require('./routes/workouts');
const usersRoutes = require('./routes/users');
// const imagesRoutes = require('./routes/images');

app.use(workoutsRoutes)
app.use(usersRoutes)
// app.use(imagesRoutes)

app.use('/api/workouts', workoutsRoutes)
app.use('/api/users', usersRoutes)
// app.use('/api/images', imagesRoutes)


