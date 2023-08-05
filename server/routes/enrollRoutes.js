const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { enrollUserInClass } = require('../controllers/enrollmentController');

const router = express.Router();

router.post('/classes/:classId/enroll', protect, enrollUserInClass);

module.exports = router;
