const Student = require('../models/Student');
const User = require('../models/User');
const Enrollment = require('../models/Enrollment');

const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const createStudent = async (req, res) => {
  try {
    const { userId } = req; // Assuming you're using authentication middleware to extract the user ID

    // Check if the user is already a student
    const existingStudent = await Student.findOne({ user: userId });
    if (existingStudent) {
      return res.status(400).json({ error: 'User is already a student' });
    }

    // Find the enrollment for the user
    const enrollment = await Enrollment.findOne({ user: userId });

    // Check if the enrollment exists and its payment status is "paid"
    if (!enrollment || enrollment.paymentStatus !== 'paid') {
      return res.status(400).json({ error: 'User must have a paid enrollment to become a student' });
    }

    // Find the user by ID
    const user = await User.findById(userId);

    // Create a new student
    const student = new Student({
      user: user._id,
      name: user.name,
      email: user.email,
      instructorId: enrollment.instructor, // Add the instructor ID from the enrollment
      classId: enrollment.class, // Add the class ID from the enrollment
      // Add other student data as needed
    });

    const savedStudent = await student.save();

    res.status(201).json(savedStudent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create student' });
  }
};

module.exports = {
  getStudents,
  createStudent
};
