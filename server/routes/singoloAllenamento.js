const express = require('express');

const {creaAllenamentoSingolo, vediAllenamentoSingolo} = require('../controllers/creaAllenamentoSingoloController');


const router = express.Router();


router.post('/', creaAllenamentoSingolo);
router.get('/', vediAllenamentoSingolo);



module.exports = router;
