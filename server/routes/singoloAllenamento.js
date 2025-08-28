const express = require('express');

const {creaAllenamentoSingolo} = require('../controllers/creaAllenamentoSingolo');


const router = express.Router();


router.post('/', creaAllenamentoSingolo);



module.exports = router;
