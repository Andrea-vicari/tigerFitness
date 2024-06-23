
const Images = require('../models/ImageModel');
const mongoose = require('mongoose');
var fs = require('fs');

var multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage });


// Get all Images: OK
const viewAllImages = async (req, res)=> {

    console.log("Req from /")
    console.log("View all Images")

    const allImages = await Images.find({}).sort({createdAt: -1});
    res.status(200).json(allImages)

}

module.exports = {
    viewAllImages
}