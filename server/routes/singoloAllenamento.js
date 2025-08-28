const express = require('express');

const {creaAllenamentoSingolo} = require('../controllers/creaAllenamentoSingoloController');


const router = express.Router();


router.post('/', creaAllenamentoSingolo);



module.exports = router;
