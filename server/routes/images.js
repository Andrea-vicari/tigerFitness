const express = require('express');


const {viewAllImages} = require('../controllers/imageController');

const router = express.Router();

router.get('/', viewAllImages);



module.exports = router