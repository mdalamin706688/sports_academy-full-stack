const express = require('express');
const {
  instructorSignup,
  instructorLogin,
  addInstructorClass,
  getInstructors,
  getInstructorById, // Import the new function here
  getInstructorClasses,
  deleteClass,
  updateClass
} = require('../controllers/instructorController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/signup', instructorSignup);
router.post('/login', instructorLogin);
router.get('/', getInstructors);
router.post('/classes', protect, addInstructorClass);
router.get('/classes', protect, getInstructorClasses);
router.get('/:instructorId',protect, getInstructorById); // Add the new route here
router.delete('/classes/:classId', protect, deleteClass);
router.put('/classes/:classId', protect, updateClass);

module.exports = router;
