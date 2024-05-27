const express = require('express');
const multer = require("multer");
const path = require('path');
const Images = require('../models/ImageModel');


const storage = multer.diskStorage({
    destination: function(req, file, cb){

        return cb(null, "./public/images")

    },
    filename: function(req, file, cb){
        return cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})


const router = express.Router();

const uploadImage = multer({
    storage:storage
})

router.post('/', uploadImage.single('file','user'), (req, res)=>{
    console.log(req.body.user)
    console.log(req.file)

    Images.create({image:req.file.filename, user:req.body.user})
})

module.exports = router;