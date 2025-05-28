const express = require('express');
const multer = require("multer");
const path = require('path');
const Users = require('../models/UserModel');
const cloudinary = require('cloudinary').v2;

const {signupUser, loginUser, seeAllUser, forgotPassword, resetPassword, getSingleUser} = require('../controllers/userController');


const router = express.Router();

async function handleUpload(file) {

    const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
    });
    console.log(res)
    return res;
}

const storage = new multer.memoryStorage();

const upload = multer({
  storage,
});

router.post("/upload", upload.single("my_file"), async (req, res) => {
	try {
	  const b64 = Buffer.from(req.file.buffer).toString("base64");
	  let dataURI = "data:" + req.file.mimetype + ";base64," + b64;

	  const cldRes = await handleUpload(dataURI);

	  res.json(cldRes);
	} catch (error) {
	  console.log(error);
	  res.send({
		message: error.message,
	  });
	}
  });

// See All
router.get('/', seeAllUser)

// See single user
router.get('/:id', getSingleUser);

// SignUp
router.post('/signup', signupUser);

// Login
router.post('/login', loginUser);

// Forgot password
router.post('/forgot-password', forgotPassword)

// Reset password
router.post('/reset-password/:token', resetPassword)

// Upload user profile
router.patch('/:id', uploadImage.single('file'), async (req, res)=>{

    /*
    if(req.file === undefined){
      return res.status(400).json({error: "Ehiii!! Upload an image please"})
    }
    */

    const { id } = req.params;
    console.log("OIBO'!!!")
    // console.log(req.file.filename)
    console.log(id)



    const user = await Users.findByIdAndUpdate(id,{image:req.file.filename})
    // const user = await Users.create(id,{image:req.file.filename})

    if(!user){
        return res.status(400).json({error: "No WorkOut found"})
    }
    res.status(200).json(user);


})


module.exports = router;
