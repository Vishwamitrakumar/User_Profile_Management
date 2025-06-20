const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { Create_Data, Getdata, Delete_Data } = require('../controller/User_in');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });


router.get('/', Getdata);
router.post('/', upload.single('profilePhoto'), Create_Data);
router.delete('/:id', Delete_Data);

module.exports = router;
