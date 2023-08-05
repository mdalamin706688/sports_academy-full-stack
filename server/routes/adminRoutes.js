// routes/adminRoutes.js
const express = require('express');
const { adminSignup, adminLogin, getInstructors, addInstructor, updateInstructor, deleteInstructor, getClasses, addClass, updateClass, deleteClass, getStudents, addStudent, updateStudent, deleteStudent, getEnrollments, makeStudentInstructor, makeStudentAdmin } = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Admin Authentication
router.post('/signup', adminSignup);
router.post('/login', adminLogin);

// Instructors
router.get('/instructors', protect, getInstructors);
router.post('/instructors', protect, addInstructor);
router.put('/instructors/:id', protect, updateInstructor);
router.delete('/instructors/:id', protect, deleteInstructor);

// Classes
router.get('/classes', protect, getClasses);
router.post('/classes', protect, addClass);
router.put('/classes/:id', protect, updateClass);
router.delete('/classes/:id', protect, deleteClass);

// Students
router.get('/students', protect, getStudents);
router.post('/students', protect, addStudent);
router.put('/students/:id', protect, updateStudent);
router.delete('/students/:id', protect, deleteStudent);

// Enrollments
router.get('/enrollments', protect, getEnrollments);

//roles
router.put('/students/:studentId/make-instructor', protect, makeStudentInstructor);
router.put('/students/:studentId/make-admin', protect, makeStudentAdmin);



module.exports = router;
