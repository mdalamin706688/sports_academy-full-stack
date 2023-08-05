const express = require('express');
const { signup, login, addEnrollment, getEnrollmentStatus, updateUser,getPopularClasses, getPopularInstructors, } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/enrollments/status', protect, getEnrollmentStatus);
router.post('/enrollments', protect, addEnrollment);
router.put('/users/:userId', protect, updateUser);
// Route for getting popular classes
router.get('/popular-classes', getPopularClasses);

// Route for getting popular instructors
router.get('/popular-instructors', getPopularInstructors);

module.exports = router;
