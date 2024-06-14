const express = require('express');


const {viewAllWorkouts} = require('../controllers/imageController');

const router = express.Router();

router.get('/', viewAllWorkouts);



module.exports = router