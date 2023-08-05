const express = require('express');
const { getStudents,createStudent } = require('../controllers/studentController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getStudents);

router.post('/validate', protect, createStudent);


module.exports = router;
